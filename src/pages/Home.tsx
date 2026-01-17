import { Ship, Settings, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type HomeProps = {
  onNavigate: (page: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<string>('auto');

  useEffect(() => {
    const updateImageHeight = () => {
      if (textContainerRef.current && imageRef.current) {
        const textHeight = textContainerRef.current.offsetHeight;
        // Usa minHeight invece di height per non restringere l'immagine
        setImageHeight(`${textHeight}px`);
      }
    };

    // Aspetta che il DOM sia completamente renderizzato
    const timer = setTimeout(() => {
      updateImageHeight();
    }, 100);

    window.addEventListener('resize', updateImageHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);
  return (
    <div className="bg-[#F4F7F6]">
      <div className="relative h-[500px] sm:h-[700px] md:h-[900px] overflow-hidden">
        {/* Video di sfondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/landing.mp4" type="video/mp4" />
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
                background: 'linear-gradient(135deg, #00D9CC 0%, #1FA9A0 50%, #FFD700 100%)',
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
                Scopri i Nostri Prodotti
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0E0E0E] mb-6 sm:mb-8 md:mb-12">
          I Nostri Servizi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div
            onClick={() => onNavigate('vendita')}
            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl active:shadow-lg transition-all duration-300 cursor-pointer touch-manipulation overflow-hidden border-2 border-transparent hover:border-[#00D9CC]/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D9CC]/10 to-transparent rounded-full blur-2xl group-hover:from-[#00D9CC]/20 transition-all duration-300"></div>
            <div className="relative z-10 bg-gradient-to-br from-[#00D9CC] to-[#1FA9A0] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-[#00D9CC]/50 transition-all duration-300">
              <Ship className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E0E] mb-2 sm:mb-3 group-hover:text-[#00D9CC] transition-colors duration-300">Vendita</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Ampia selezione di barche nuove e moto d'acqua delle migliori marche.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9CC] via-[#1FA9A0] to-[#00D9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          <div
            onClick={() => onNavigate('ricambi')}
            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl active:shadow-lg transition-all duration-300 cursor-pointer touch-manipulation overflow-hidden border-2 border-transparent hover:border-[#00D9CC]/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D9CC]/10 to-transparent rounded-full blur-2xl group-hover:from-[#00D9CC]/20 transition-all duration-300"></div>
            <div className="relative z-10 bg-gradient-to-br from-[#00D9CC] to-[#1FA9A0] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-[#00D9CC]/50 transition-all duration-300">
              <Settings className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E0E] mb-2 sm:mb-3 group-hover:text-[#00D9CC] transition-colors duration-300">Ricambi</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Ricambi originali e di qualità per la tua imbarcazione.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9CC] via-[#1FA9A0] to-[#00D9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          <div
            onClick={() => onNavigate('usato')}
            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl active:shadow-lg transition-all duration-300 cursor-pointer touch-manipulation overflow-hidden border-2 border-transparent hover:border-[#00D9CC]/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00D9CC]/10 to-transparent rounded-full blur-2xl group-hover:from-[#00D9CC]/20 transition-all duration-300"></div>
            <div className="relative z-10 bg-gradient-to-br from-[#00D9CC] to-[#1FA9A0] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-[#00D9CC]/50 transition-all duration-300">
              <RotateCcw className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E0E] mb-2 sm:mb-3 group-hover:text-[#00D9CC] transition-colors duration-300">Usato</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Trattiamo anche barche e moto d'acqua usate, garantite e controllate.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9CC] via-[#1FA9A0] to-[#00D9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="w-full order-1 md:order-1">
              <img 
                ref={imageRef}
                src="/jet-ski.jpg" 
                alt="Sea Doo Moto d'acqua" 
                className="w-full h-auto object-contain rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>
            <div ref={textContainerRef} className="order-2 md:order-2 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                La Nautic Service nasce nel 2003 e ha come obiettivo principale la fornitura di servizi Nautici, riparazione e vendita di Natanti, accessori, ricambi delle migliori marche.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                La nostra azienda dispone di una rilevante struttura operativa, un furgone come officina mobile per fare assistenza dovunque, con sedi dotate di attrezzature specifiche. Si avvale di elevate risorse tecnico-strumentali e occupa un organico medio di 2 unità altamente specializzate che le consente di ottenere risultati di riparazione superiori alla media delle dirette concorrenti, con quotazioni competitive ed opera su tutto il territorio del Lago di Garda.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                La caratteristica principale che ci contraddistingue è sicuramente l'affidabilità e la correttezza nello svolgere la nostra attività. La qualità è garantita con l'impiego di soluzioni e prodotti all'avanguardia che consentono di ottenere lavori sicuri e funzionali.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E]">
                Alla competenza professionale si aggiunge un'adeguata conoscenza ed esperienza in tema normativo, garantendo i più elevati standard di qualità richiesti nella riparazione di ogni tipo di battello e motori.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#0E0E0E] mb-6">
                Rappresentiamo i marchi principali del settore: Evinrude, Selva, Sea Doo, Joker Boat e Saver.
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
  );
}
