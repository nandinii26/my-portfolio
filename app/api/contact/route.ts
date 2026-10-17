import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contact, message } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Please enter your message.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'nandinisrivastava015@gmail.com';

    // Send to FormSubmit service to deliver directly to the email
    const forwardResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        Name: name.trim(),
        Email: email.trim(),
        'Contact / Phone': contact?.trim() || 'Not provided',
        Message: message.trim(),
        _subject: `New Portfolio Message from ${name.trim()}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    if (!forwardResponse.ok) {
      const errorData = await forwardResponse.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP ${forwardResponse.status}`);
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Unable to send message at this time.',
      },
      { status: 500 }
    );
  }
}
