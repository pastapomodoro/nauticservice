import { Ship, Settings, RotateCcw, Anchor, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { FEATURES } from '../config/features';

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

  const services = [
    {
      id: 'vendita',
      icon: Ship,
      title: t('home_vendita_title'),
      desc: t('home_vendita_desc'),
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200',
      enabled: true,
    },
    {
      id: 'ricambi',
      icon: Settings,
      title: t('home_ricambi_title'),
      desc: t('home_ricambi_desc'),
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1200',
      enabled: FEATURES.RICAMBI_ENABLED,
    },
    {
      id: 'usato',
      icon: RotateCcw,
      title: t('home_usato_title'),
      desc: t('home_usato_desc'),
      image: '/jet-ski.jpg',
      enabled: FEATURES.USATO_ENABLED,
    },
    {
      id: 'noleggio',
      icon: Anchor,
      title: t('home_noleggio_title'),
      desc: t('home_noleggio_desc'),
      image: 'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1200',
      enabled: FEATURES.NOLEGGIO_ENABLED,
    },
  ].filter((s) => s.enabled);

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

      {/* Servizi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <p className="eyebrow text-teal-ink">{t('home_services_eyebrow')}</p>
        <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
          {t('home_our_services')}
        </h2>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onNavigate(service.id)}
              className="group text-left surface surface-interactive bg-white rounded-[28px] p-2 flex flex-col"
            >
              {/* 28px = 20px interno + 8px di padding */}
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-sand-deep">
                <img
                  src={service.image}
                  alt=""
                  className="img-outline w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-ink">
                  <service.icon className="w-5 h-5" strokeWidth={2} absoluteStrokeWidth />
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 p-4 sm:p-5">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-1.5 text-ink-muted leading-relaxed">{service.desc}</p>
                </div>
                <span className="shrink-0 w-11 h-11 rounded-full bg-ink/[0.05] text-ink flex items-center justify-center transition-colors duration-150 group-hover:bg-ink group-hover:text-white">
                  <ArrowRight className="w-5 h-5" strokeWidth={2} absoluteStrokeWidth />
                  <span className="sr-only">{t('home_learn_more')}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Chi siamo */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <img
                src="/jet-ski.jpg"
                alt="Sea Doo Moto d'acqua"
                className="img-outline w-full aspect-[4/5] object-cover rounded-[24px]"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow text-teal-ink">{t('home_about_eyebrow')}</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              {t('home_about_title')}
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink">
              {t('home_about_1')}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted max-w-[65ch]">
              <p>{t('home_about_2')}</p>
              <p>{t('home_about_3')}</p>
              <p>{t('home_about_4')}</p>
              <p className="text-ink font-semibold">{t('home_about_5')}</p>
            </div>

            {/* Loghi Partner */}
            <div className="mt-10 pt-8 border-t border-ink/10 flex items-center gap-8 sm:gap-12">
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
