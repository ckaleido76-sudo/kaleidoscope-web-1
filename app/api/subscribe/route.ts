import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, userType, state, phone, comments, optInTexts } = body;

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
        { error: 'Service not configured' },
        { status: 500 }
      );
    }

    // Prepare payload for MailerLite
    // Note: first_name and last_name are standard MailerLite fields
    // Custom fields must be created in MailerLite dashboard first
    const payload: any = {
      email,
      fields: {
        name: firstName,
        last_name: lastName
      }
    };

    // Add custom fields to the existing fields object
    // These custom fields must be created in MailerLite dashboard first
    if (userType) payload.fields.user_type = userType;
    if (state) payload.fields.state = state;
    if (phone) payload.fields.phone = phone;
    if (comments) payload.fields.comments = comments;
    if (optInTexts !== undefined) payload.fields.opt_in_texts = optInTexts ? 'Yes' : 'No';

    // Map userType to MailerLite Group IDs
    // These IDs are from your MailerLite dashboard (not sensitive, just identifiers)
    // To update: Go to MailerLite → Groups → Click group → Copy ID from URL
    const GROUP_IDS: Record<string, string> = {
      'future-client': '167252022478767457',      // Future Clients
      'friend-family': '167252039302121459',      // Friends & Family Members
      'investor-partner': '167347781190551424',   // Investors & Partners
      'treatment-center': '167347809411924997',   // Treatment Centers
      'healer-employee': '167347824711698065'     // Healers & Future Employees
    };

    // Add subscriber to appropriate group based on userType
    const groupId = GROUP_IDS[userType];
    if (groupId) {
      payload.groups = [groupId];
    }

    console.log('Sending to MailerLite:', JSON.stringify(payload, null, 2));

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
      console.error('MailerLite API error:', JSON.stringify(responseData, null, 2));
      return NextResponse.json(
        {
          error: 'Failed to subscribe to newsletter',
          details: responseData
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
