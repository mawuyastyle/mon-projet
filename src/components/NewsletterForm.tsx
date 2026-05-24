'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterForm() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-caps text-[12px]" style={{ color: 'var(--mw-gold)' }}>
        Merci. Nous resterons proches.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        required
        className="flex-1 px-4 py-3 text-sm border-b bg-transparent focus:outline-none"
        style={{
          borderColor: 'var(--mw-line)',
          color: 'var(--mw-ink)',
        }}
      />
      <button
        type="submit"
        className="px-8 py-3 text-caps text-[12px] text-white transition-opacity hover:opacity-80"
        style={{ backgroundColor: 'var(--mw-ink)' }}
      >
        {t('cta')}
      </button>
    </form>
  );
}
