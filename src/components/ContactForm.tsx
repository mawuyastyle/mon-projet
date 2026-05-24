'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Commande', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-base" style={{ color: 'var(--mw-gold)' }}>
        Merci. Nous reviendrons vers vous sous 48 heures ouvrées.
      </p>
    );
  }

  const inputClass = "w-full px-0 py-3 text-base bg-transparent border-b focus:outline-none";
  const inputStyle = { borderColor: 'var(--mw-line)', color: 'var(--mw-ink)' };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-caps text-[11px] block mb-1" style={{ color: 'var(--mw-stone)' }}>{t('form_name')} *</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={inputClass}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="text-caps text-[11px] block mb-1" style={{ color: 'var(--mw-stone)' }}>{t('form_email')} *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className={inputClass}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="text-caps text-[11px] block mb-1" style={{ color: 'var(--mw-stone)' }}>{t('form_subject')}</label>
        <select
          value={form.subject}
          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
          className={inputClass}
          style={inputStyle}
        >
          <option>{t('subject_commande')}</option>
          <option>{t('subject_sur_mesure')}</option>
          <option>{t('subject_presse')}</option>
          <option>{t('subject_autre')}</option>
        </select>
      </div>
      <div>
        <label className="text-caps text-[11px] block mb-1" style={{ color: 'var(--mw-stone)' }}>{t('form_message')} *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="w-full py-4 text-caps text-[12px] text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'var(--mw-ink)' }}
        >
          {t('form_submit')}
        </button>
        <p className="text-sm italic" style={{ color: 'var(--mw-stone)' }}>{t('form_reply')}</p>
      </div>
    </form>
  );
}
