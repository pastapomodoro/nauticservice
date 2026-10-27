import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
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
      <div className="min-h-screen">
      <PageHero
        eyebrow="Lago di Garda"
        title={t('noleggio_title')}
        subtitle={t('noleggio_subtitle')}
        image="https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="surface bg-white rounded-[28px] p-6 sm:p-10 md:p-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-8">
            {t('noleggio_main_title')}
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-base sm:text-lg md:text-xl text-ink leading-relaxed">
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
            
            <div className="bg-anchor/10 p-4 sm:p-6 rounded-2xl">
              <p className="text-base sm:text-lg text-ink leading-relaxed">
                <strong className="font-bold text-ink">CODICE SCONTO: MANUEL</strong> - 5% discount
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-ink leading-relaxed">
              {t('noleggio_desc_2')}
            </p>
          </div>
          
          <div className="mt-8">
            <a
              href="https://www.rentbooking.it/it/prenota/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 rounded-full bg-ink text-white text-lg font-semibold hover:bg-ink-soft transition-colors duration-150"
            >
              {t('noleggio_cta')}
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
