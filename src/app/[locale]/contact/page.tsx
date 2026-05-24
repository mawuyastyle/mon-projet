import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FadeInUp from '@/components/ui/FadeInUp';
import ContactForm from '@/components/ContactForm';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';
  return {
    title: isFr ? 'Contact — MAWUYA' : 'Contact — MAWUYA',
    description: isFr
      ? 'Contactez la maison MAWUYA pour toute commande, demande sur mesure ou question. Nous répondons personnellement.'
      : 'Contact MAWUYA for any order, bespoke request or question. We respond personally.',
  };
}

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="pt-32 pb-24 px-6 md:px-10" style={{ minHeight: '100vh' }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeInUp>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}>
            {t('title')}
          </h1>
          <p className="text-lg mb-16 max-w-xl" style={{ color: 'var(--mw-stone)' }}>
            {t('intro')}
          </p>
        </FadeInUp>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Gauche — infos */}
          <FadeInUp className="w-full md:w-[40%]">
            <div className="space-y-10">
              <div>
                <p className="text-caps mb-2" style={{ color: 'var(--mw-stone)' }}>{t('atelier_label')}</p>
                <p className="text-base">MAWUYA — Abidjan, Côte d'Ivoire</p>
                <p className="text-sm" style={{ color: 'var(--mw-stone)' }}>Sur rendez-vous uniquement</p>
              </div>
              <div>
                <p className="text-caps mb-2" style={{ color: 'var(--mw-stone)' }}>{t('email_label')}</p>
                <a href="mailto:contact@mawuya.com" className="link-underline text-base">contact@mawuya.com</a>
              </div>
              <div>
                <p className="text-caps mb-2" style={{ color: 'var(--mw-stone)' }}>{t('whatsapp_label')}</p>
                <p className="text-base mb-1">+225 07 48 06 32 55</p>
                <a
                  href="https://wa.me/2250748063255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm"
                  style={{ color: 'var(--mw-gold)' }}
                >
                  {t('whatsapp_cta')}
                </a>
              </div>
              <div>
                <p className="text-caps mb-2" style={{ color: 'var(--mw-stone)' }}>{t('social_label')}</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/ma.wuya" target="_blank" rel="noopener noreferrer" className="link-underline text-sm">Instagram @ma.wuya</a>
                  <a href="https://tiktok.com/@mawuyaa" target="_blank" rel="noopener noreferrer" className="link-underline text-sm">TikTok @mawuyaa</a>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Droite — formulaire */}
          <FadeInUp delay={150} className="w-full md:w-[60%]">
            <ContactForm />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
