import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

type HomeProps = {
  onNavigate: (page: string) => void;
};

const stagger = (i: number) => ({ '--i': i } as CSSProperties);

export default function Home({ onNavigate }: HomeProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  // Alcuni browser bloccano l'autoplay finché il video non è pronto
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener('canplay', play);
    return () => video.removeEventListener('canplay', play);
  }, []);

  // Modelli in evidenza nella sezione Vendita
  const models = [
    { name: 'GTX', image: '/moto/gtx.avif' },
    { name: 'Spark', image: '/moto/spark.avif' },
    { name: 'RXP-X', image: '/moto/rxp-x.avif' },
  ];

  return (
    <>
      <SEO
        title="Nautic Service SRL | Riparazione Moto d'Acqua, Vendita Barche e Ricambi - Lago di Garda"
        description="Nautic Service SRL: il tuo punto di riferimento per riparazione moto d'acqua Sea Doo, vendita barche nuove e usate, ricambi originali e accessori nautici. Officina mobile su tutto il lago. Serviamo Peschiera, Desenzano, Sirmione, Lazise, Bardolino, Salò e Riva del Garda. Dal 2003."
        keywords="riparazione moto d'acqua, assistenza Sea Doo, vendita barche, ricambi nautici, officina nautica, jet ski, meccanico barche, manutenzione motori marini, noleggio moto d'acqua, accessori nautici, barche usate, PWC service"
        url="/"
      />

      {/* Hero */}
      <section className="px-2 sm:px-3 pt-2 sm:pt-3">
        <div className="relative min-h-[560px] h-[calc(100svh-80px)] max-h-[880px] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-ink">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/landing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 sm:pb-16">
            <p className="eyebrow text-primary reveal" style={stagger(0)}>
              {t('home_hero_eyebrow')}
            </p>
            <h1
              className="mt-3 max-w-3xl text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white reveal"
              style={stagger(1)}
            >
              {t('home_hero_title')}
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80 reveal" style={stagger(2)}>
              {t('home_hero_subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 reveal" style={stagger(3)}>
              <button
                onClick={() => onNavigate('vendita')}
                className="inline-flex items-center gap-2 ps-6 pe-5 py-3.5 rounded-full bg-primary text-ink font-semibold hover:bg-primary-light transition-colors duration-150"
              >
                {t('home_discover_products')}
                <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2} absoluteStrokeWidth />
              </button>
              <button
                onClick={() => onNavigate('contatti')}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold backdrop-blur-md shadow-[inset_0_0_0_1px_oklch(1_0_0/0.2)] hover:bg-white/20 transition-colors duration-150"
              >
                {t('home_contact_us')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vendita */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow text-teal-ink">{t('home_vendita_title')} · Sea-Doo 2026</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
            {t('home_vendita_desc')}
          </h2>
          <button
            onClick={() => onNavigate('vendita')}
            className="mt-8 inline-flex items-center gap-2 ps-6 pe-5 py-3.5 rounded-full bg-ink text-white font-semibold hover:bg-ink-soft transition-colors duration-150"
          >
            {t('home_discover_products')}
            <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2} absoluteStrokeWidth />
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
          {models.map((model, index) => (
            <button
              key={model.name}
              onClick={() => onNavigate('vendita')}
              className={`group relative rounded-[24px] bg-gradient-to-b from-white to-sand-deep overflow-hidden text-left ${
                index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={model.image}
                alt={`Sea-Doo ${model.name} 2026`}
                className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4 scale-[1.15] transition-transform duration-300 ease-out group-hover:scale-[1.19]"
              />
              <span className="absolute left-4 bottom-3 sm:left-5 sm:bottom-4 font-heading text-lg sm:text-xl font-semibold tracking-tight text-ink">
                {model.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Chi siamo */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-stretch">
          {/* Su desktop la foto segue l'altezza della colonna di testo */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px] rounded-[24px] overflow-hidden bg-sand-deep">
            <img
              src="/jet-ski.jpg"
              alt="Sea Doo Moto d'acqua"
              className="img-outline absolute inset-0 w-full h-full object-cover rounded-[24px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              {t('home_about_title')}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted max-w-[52ch]">
              <p>{t('home_about_short_1')}</p>
              <p>{t('home_about_short_2')}</p>
            </div>

            {/* Loghi Partner */}
            <div className="mt-10 pt-8 border-t border-ink/10 flex flex-wrap items-center gap-8 sm:gap-12">
              <img
                src="/loghi/logo-rotax.png"
                alt="Rotax"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <img
                src="/loghi/logoseadoo.jpg"
                alt="Sea-Doo"
                className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invito al contatto */}
      <section className="px-2 sm:px-3 pt-2 sm:pt-3 pb-12 sm:pb-16">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-ink text-white">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">{t('home_cta_title')}</h2>
              <p className="mt-4 text-lg text-white/70">{t('home_cta_desc')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+393278992159"
                className="inline-flex items-center gap-2 ps-5 pe-6 py-3.5 rounded-full bg-primary text-ink font-semibold hover:bg-primary-light transition-colors duration-150"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={2} absoluteStrokeWidth />
                327 899 2159
              </a>
              <a
                href="https://wa.me/393278992159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ps-5 pe-6 py-3.5 rounded-full bg-white/10 text-white font-semibold shadow-[inset_0_0_0_1px_oklch(1_0_0/0.2)] hover:bg-white/15 transition-colors duration-150"
              >
                <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2} absoluteStrokeWidth />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
