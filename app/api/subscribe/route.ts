import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIP } from '@/lib/rate-limit';

// Feature flags
const ENABLE_CAPTCHA = process.env.NEXT_PUBLIC_ENABLE_CAPTCHA === 'true';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Rate limit: 5 submissions per minute per IP
const RATE_LIMIT_OPTIONS = { maxRequests: 5, windowMs: 60000 };

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('CAPTCHA verification failed:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request.headers);
    const rateLimitResult = rateLimit(clientIP, RATE_LIMIT_OPTIONS);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await request.json();
    const {
      email,
      firstName,
      lastName,
      userType,
      state,
      phone,
      comments,
      optInTexts,
      captchaToken,
      honeypot  // Hidden field - should be empty
    } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Silently accept but don't process (don't reveal bot detection)
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter'
      });
    }

    // CAPTCHA verification (when enabled)
    if (ENABLE_CAPTCHA) {
      if (!captchaToken) {
        return NextResponse.json(
          { error: 'Please complete the CAPTCHA verification' },
          { status: 400 }
        );
      }

      const captchaValid = await verifyCaptcha(captchaToken);
      if (!captchaValid) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!email || !userType || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, first name, last name, and user type are required' },
        { status: 400 }
      );
    }

    // Check for API credentials
    if (!process.env.MAILERLITE_API_KEY) {
      console.error('MailerLite credentials not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    // Prepare payload for MailerLite
    const payload: Record<string, unknown> = {
      email,
      fields: {
        name: firstName,
        last_name: lastName
      }
    };

    // Add custom fields
    const fields = payload.fields as Record<string, string>;
    if (userType) fields.user_type = userType;
    if (state) fields.state = state;
    if (phone) fields.phone = phone;
    if (comments) fields.comments = comments;
    if (optInTexts !== undefined) fields.opt_in_texts = optInTexts ? 'Yes' : 'No';

    // Map userType to MailerLite Group IDs
    const GROUP_IDS: Record<string, string> = {
      'future-client': '167252022478767457',
      'friend-family': '167252039302121459',
      'investor-partner': '167347781190551424',
      'treatment-center': '167347809411924997',
      'healer-employee': '167347824711698065'
    };

    const groupId = GROUP_IDS[userType];
    if (groupId) {
      payload.groups = [groupId];
    }

    // Development-only logging (no PII in production)
    if (!IS_PRODUCTION) {
      console.log('MailerLite payload:', JSON.stringify({
        email: '[REDACTED]',
        userType,
        groupId,
      }));
    }

    // Subscribe to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Log full error server-side for debugging
      console.error('MailerLite API error:', response.status, responseData?.message || 'Unknown error');

      // Return sanitized error to client
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: response.status >= 500 ? 500 : 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Subscription error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
