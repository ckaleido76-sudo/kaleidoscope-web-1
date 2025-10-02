import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('[API] Subscribe endpoint called - version 2.0');

  try {
    const body = await request.json();
    const { email, userType, state, phone, comments, optInTexts } = body;

    console.log('[API] Request body:', { email, userType, state, phone, comments, optInTexts });

    // Validate required fields
    if (!email || !userType) {
      console.error('[API] Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'Email and user type are required' },
        { status: 400 }
      );
    }

    // Check for API credentials
    const hasApiKey = !!process.env.MAILERLITE_API_KEY;
    const hasGroupId = !!process.env.MAILERLITE_GROUP_ID;
    console.log('[API] Credentials check:', { hasApiKey, hasGroupId });

    if (!hasApiKey || !hasGroupId) {
      console.error('[API] MailerLite credentials not configured');
      return NextResponse.json(
        { error: 'Service not configured' },
        { status: 500 }
      );
    }

    const payload = {
      email,
      groups: [process.env.MAILERLITE_GROUP_ID],
      fields: {
        user_type: userType,
        state: state || '',
        phone: phone || '',
        comments: comments || '',
        opt_in_texts: optInTexts ? 'Yes' : 'No'
      }
    };

    console.log('[API] Sending to MailerLite:', JSON.stringify(payload, null, 2));

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
    console.log('[API] MailerLite response status:', response.status);
    console.log('[API] MailerLite response data:', JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      console.error('[API] MailerLite API error:', responseData);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter', details: responseData },
        { status: response.status }
      );
    }

    console.log('[API] Successfully subscribed:', email);
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('[API] Subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: String(error) },
      { status: 500 }
    );
  }
}
