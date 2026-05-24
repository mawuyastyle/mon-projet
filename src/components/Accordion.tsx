'use client';

import { useState, ReactNode } from 'react';

export default function Accordion({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderTop: '1px solid var(--mw-line)' }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left text-caps text-[12px]"
        style={{ color: 'var(--mw-ink)' }}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        {title}
        <span
          className="text-xl leading-none transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'none', color: 'var(--mw-stone)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-6 text-sm leading-relaxed" style={{ color: 'var(--mw-stone)' }}>
          {children}
        </div>
      )}
    </div>
  );
}
