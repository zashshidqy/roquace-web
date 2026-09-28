import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with ROQUACE. Digital. Tell us about your project.',
};

export default function ContactPage() {
  return (
    <div className="px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16 text-center">
          <h1 className="font-display text-display-xl text-roquace-warm-white">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-body-lg text-roquace-soft-gray/70">
            Tell us about your project. We&apos;ll review your brief and get back within 24 hours
            with next steps.
          </p>
        </header>

        <div className="rounded-2xl border border-roquace-soft-gray/10 bg-roquace-black p-8 md:p-12">
          <ContactForm />
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-display text-display-md text-roquace-accent-blue">24h</p>
            <p className="mt-1 text-body-sm text-roquace-soft-gray/70">Response time</p>
          </div>
          <div>
            <p className="font-display text-display-md text-roquace-accent-blue">Free</p>
            <p className="mt-1 text-body-sm text-roquace-soft-gray/70">Initial consultation</p>
          </div>
          <div>
            <p className="font-display text-display-md text-roquace-accent-blue">NDA</p>
            <p className="mt-1 text-body-sm text-roquace-soft-gray/70">Available on request</p>
          </div>
        </div>
      </div>
    </div>
  );
}
