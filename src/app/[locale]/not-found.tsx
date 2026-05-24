import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--mw-white)' }}
    >
      <h1
        className="font-display mb-6"
        style={{ fontSize: 'clamp(80px, 15vw, 180px)', lineHeight: 1 }}
      >
        404.
      </h1>
      <p
        className="text-lg mb-10"
        style={{ color: 'var(--mw-stone)', fontStyle: 'italic' }}
      >
        Cette page n'existe pas. Mais nos sacs, oui.
      </p>
      <Link
        href="/collection"
        className="inline-block px-8 py-3.5 text-caps text-[12px] text-white transition-opacity hover:opacity-80"
        style={{ backgroundColor: 'var(--mw-ink)' }}
      >
        Voir la collection
      </Link>
    </div>
  );
}
