import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

export default function Noleggio() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Noleggio Moto d'Acqua e Barche | Lago di Garda per Turisti e Residenti"
        description="Noleggio moto d'acqua Sea-Doo e barche sul Lago di Garda. Ideale per turisti e residenti. Noleggio giornaliero o settimanale. Partenze da Peschiera, Lazise, Bardolino. Prenota su WhatsApp!"
        keywords="noleggio moto d'acqua Lago di Garda, affitto jet ski, noleggio barche Peschiera, noleggio barche Desenzano, noleggio moto d'acqua Sirmione, rent jet ski Garda, boat rental Lake Garda"
        url="/noleggio"
      />
      <div className="bg-[#F4F7F6] min-h-screen">
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">{t('noleggio_title')}</h1>
            <p className="text-xl md:text-2xl mt-4">
              {t('noleggio_subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E0E0E] mb-8 text-center">
            {t('noleggio_main_title')}
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-[#0E0E0E] leading-relaxed">
              {t('noleggio_desc_1')}
            </p>
            
            <div className="flex justify-center my-8">
              <img
                src="/rent-booking.png"
                alt="Rent Booking"
                className="max-w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="bg-[#2cd5c4]/10 border-l-4 border-[#2cd5c4] p-4 sm:p-6 rounded-lg">
              <p className="text-base sm:text-lg text-[#0E0E0E] leading-relaxed">
                <strong className="font-bold text-[#2cd5c4]">CODICE SCONTO: MANUEL</strong> - 5% discount
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-[#0E0E0E] leading-relaxed">
              {t('noleggio_desc_2')}
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <a
              href="https://www.rentbooking.it/it/prenota/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#2cd5c4] hover:bg-[#00D9CC] active:bg-[#00D9CC] text-[#0E0E0E] px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-manipulation">
                {t('noleggio_cta')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
