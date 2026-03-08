import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend audience ID for hakiandink-subscribers
const AUDIENCE_ID = 'deba0ed4-fd08-4755-bc8c-aa45d0b5b9ef';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Add email to Resend contacts
    const response = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!', data: response.data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
