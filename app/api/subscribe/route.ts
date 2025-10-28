import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, userType, state, phone, comments, optInTexts } = body;

    // Validate required fields
    if (!email || !userType) {
      return NextResponse.json(
        { error: 'Email and user type are required' },
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
    // Note: Custom fields must be created in MailerLite dashboard first
    const payload: any = {
      email
    };

    // Only add fields object if we have custom fields to send
    const customFields: Record<string, string> = {};

    if (userType) customFields.user_type = userType;
    if (state) customFields.state = state;
    if (phone) customFields.phone = phone;
    if (comments) customFields.comments = comments;
    if (optInTexts !== undefined) customFields.opt_in_texts = optInTexts ? 'Yes' : 'No';

    // Only include fields if we have any
    if (Object.keys(customFields).length > 0) {
      payload.fields = customFields;
    }

    // Map userType to MailerLite Group IDs
    // These IDs are from your MailerLite dashboard (not sensitive, just identifiers)
    // To update: Go to MailerLite → Groups → Click group → Copy ID from URL
    const GROUP_IDS: Record<string, string> = {
      'future-client': '167252022478767457',      // Future Clients
      'friend-family': 'YOUR_GROUP_ID_HERE',      // Friends & Family Members
      'investor-partner': 'YOUR_GROUP_ID_HERE',   // Investors & Partners
      'treatment-center': 'YOUR_GROUP_ID_HERE',   // Treatment Centers
      'healer-employee': 'YOUR_GROUP_ID_HERE'     // Healers & Future Employees
    };

    // Add subscriber to appropriate group based on userType
    const groupId = GROUP_IDS[userType];
    if (groupId && groupId !== 'YOUR_GROUP_ID_HERE') {
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
