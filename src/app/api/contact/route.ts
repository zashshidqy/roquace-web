import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/types/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body);

    // TODO: Implement actual email sending
    // For now, just log and return success
    console.log('Contact form submission:', validatedData);

    // Example: Send email via Resend, SendGrid, etc.
    // await sendEmail(validatedData);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
