import { Ship, Settings, RotateCcw, Anchor } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { FEATURES } from '../config/features';

type HomeProps = {
  onNavigate: (page: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageHeight, setImageHeight] = useState<string>('auto');
  const { t } = useLanguage();

  useEffect(() => {
    const updateImageHeight = () => {
      if (textContainerRef.current && imageRef.current) {
        const textHeight = textContainerRef.current.offsetHeight;
        setImageHeight(`${textHeight}px`);
      }
    };

    const timer = setTimeout(() => {
      updateImageHeight();
    }, 100);

    window.addEventListener('resize', updateImageHeight);
    
    // Forza il video a partire dopo un breve delay
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error('Errore riproduzione video:', err);
        });
      }
    };
    
    // Prova a far partire il video dopo che è caricato
    setTimeout(playVideo, 500);
    setTimeout(playVideo, 1000);
    setTimeout(playVideo, 2000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);
  
  return (
    <>
      <SEO
        title="Nautic Service SRL | Riparazione Moto d'Acqua, Vendita Barche e Ricambi - Lago di Garda"
        description="Nautic Service SRL: il tuo punto di riferimento per riparazione moto d'acqua Sea Doo, vendita barche nuove e usate, ricambi originali e accessori nautici. Officina mobile su tutto il lago. Serviamo Peschiera, Desenzano, Sirmione, Lazise, Bardolino, Salò e Riva del Garda. Dal 2003."
        keywords="riparazione moto d'acqua, assistenza Sea Doo, vendita barche, ricambi nautici, officina nautica, jet ski, meccanico barche, manutenzione motori marini, noleggio moto d'acqua, accessori nautici, barche usate, PWC service"
        url="/"
      />
      <div className="bg-[#F4F7F6]">
      <div className="relative h-[500px] sm:h-[700px] md:h-[900px] overflow-hidden bg-black">
        {/* Video di sfondo con fallback immagine */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minWidth: '100%', minHeight: '100%' }}
          onError={(e) => {
            console.error('Errore caricamento video:', e);
            const target = e.currentTarget;
            console.error('Video error code:', target.error?.code);
            console.error('Video error message:', target.error?.message);
          }}
          onLoadedMetadata={() => {
            console.log('Video metadata caricata');
            if (videoRef.current) {
              videoRef.current.play().catch((err) => {
                console.error('Errore play video:', err);
              });
            }
          }}
          onCanPlay={() => {
            console.log('Video può essere riprodotto');
            if (videoRef.current) {
              videoRef.current.play().catch((err) => {
                console.error('Errore play video:', err);
              });
            }
          }}
        >
          <source src="/landing.mp4" type="video/mp4" />
          <source src="/landing.webm" type="video/webm" />
          <source src="/landing.mov" type="video/quicktime" />
        </video>
        
        {/* Contenuto */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 animate-[fadeIn_1.5s_ease-out_forwards] opacity-0 px-4" style={{ animationDelay: '0.3s' }}>
            <img
              src="/nautic.png"
              alt="Nautic Service Logo"
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Bottone in basso */}
        <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center pb-8 sm:pb-12 md:pb-16 z-10">
          <div className="animate-[fadeIn_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => onNavigate('vendita')}
              className="group relative text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 touch-manipulation overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #2cd5c4 0%, #00D9CC 50%, #9BE870 100%)',
                backgroundSize: '200% 200%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = '100% 50%';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = '0% 50%';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('home_discover_products')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9BE870]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0E0E0E] mb-6 sm:mb-8 md:mb-12">
          {t('home_our_services')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div
            onClick={() => onNavigate('vendita')}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl active:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer touch-manipulation overflow-hidden border-2 border-[#2cd5c4]/20 hover:border-[#2cd5c4] hover:-translate-y-1 transform"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2cd5c4]/20 to-transparent rounded-full blur-3xl group-hover:from-[#2cd5c4]/40 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#2cd5c4] to-[#00D9CC] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#2cd5c4]/60 transition-all duration-300">
                <Ship className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-3 group-hover:text-[#2cd5c4] transition-colors duration-300">{t('home_vendita_title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {t('home_vendita_desc')}
              </p>
              <div className="flex items-center text-[#2cd5c4] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm sm:text-base">Scopri di più</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2cd5c4] via-[#00D9CC] to-[#9BE870] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          <div
            onClick={() => onNavigate('ricambi')}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl active:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer touch-manipulation overflow-hidden border-2 border-[#2cd5c4]/20 hover:border-[#2cd5c4] hover:-translate-y-1 transform"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2cd5c4]/20 to-transparent rounded-full blur-3xl group-hover:from-[#2cd5c4]/40 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#2cd5c4] to-[#00D9CC] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#2cd5c4]/60 transition-all duration-300">
                <Settings className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-3 group-hover:text-[#2cd5c4] transition-colors duration-300">{t('home_ricambi_title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {t('home_ricambi_desc')}
              </p>
              <div className="flex items-center text-[#2cd5c4] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm sm:text-base">Scopri di più</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2cd5c4] via-[#00D9CC] to-[#9BE870] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          {/* Kill switch: Usato - riattivare in features.ts */}
          {FEATURES.USATO_ENABLED && (
            <div
              onClick={() => onNavigate('usato')}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl active:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer touch-manipulation overflow-hidden border-2 border-[#2cd5c4]/20 hover:border-[#2cd5c4] hover:-translate-y-1 transform"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2cd5c4]/20 to-transparent rounded-full blur-3xl group-hover:from-[#2cd5c4]/40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#2cd5c4] to-[#00D9CC] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#2cd5c4]/60 transition-all duration-300">
                  <RotateCcw className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-3 group-hover:text-[#2cd5c4] transition-colors duration-300">{t('home_usato_title')}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {t('home_usato_desc')}
                </p>
                <div className="flex items-center text-[#2cd5c4] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm sm:text-base">Scopri di più</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2cd5c4] via-[#00D9CC] to-[#9BE870] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          )}

          <div
            onClick={() => onNavigate('noleggio')}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl active:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer touch-manipulation overflow-hidden border-2 border-[#2cd5c4]/20 hover:border-[#2cd5c4] hover:-translate-y-1 transform"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2cd5c4]/20 to-transparent rounded-full blur-3xl group-hover:from-[#2cd5c4]/40 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#2cd5c4] to-[#00D9CC] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#2cd5c4]/60 transition-all duration-300">
                <Anchor className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-3 group-hover:text-[#2cd5c4] transition-colors duration-300">{t('home_noleggio_title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {t('home_noleggio_desc')}
              </p>
              <div className="flex items-center text-[#2cd5c4] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm sm:text-base">Scopri di più</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2cd5c4] via-[#00D9CC] to-[#9BE870] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="w-full order-1 lg:order-1">
              <img 
                ref={imageRef}
                src="/jet-ski.jpg" 
                alt="Sea Doo Moto d'acqua" 
                className="w-full h-auto object-cover rounded-xl shadow-xl aspect-[4/3] md:aspect-[3/2]"
              />
            </div>
            <div ref={textContainerRef} className="order-2 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                {t('home_about_1')}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                {t('home_about_2')}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                {t('home_about_3')}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                {t('home_about_4')}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E] mb-6">
                {t('home_about_5')}
              </p>
              
              {/* Loghi Partner */}
              <div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-8 mt-6 flex-nowrap overflow-x-auto">
                <img
                  src="/loghi/logo-rotax.png"
                  alt="Rotax Logo"
                  className="h-10 sm:h-14 md:h-18 w-auto object-contain flex-shrink-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]"
                  onError={(e) => {
                    console.error('Errore caricamento logo Rotax');
                  }}
                />
                <img
                  src="/loghi/logoseadoo.jpg"
                  alt="Sea-Doo Logo"
                  className="h-10 sm:h-14 md:h-18 w-auto object-contain flex-shrink-0 max-w-[120px] sm:max-w-[160px] md:max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
