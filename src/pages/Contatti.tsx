import { MapPin, Phone, Mail, Clock, User, Facebook, Instagram, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contatti() {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO
        title="Contatti e Dove Siamo | Nautic Service - Castelnuovo del Garda"
        description="Contatta Nautic Service per riparazione moto d'acqua, preventivi e informazioni. Via Venezia 9, Castelnuovo del Garda (VR). Tel: +39 327.8992159. WhatsApp disponibile. Orari: Lun-Ven 9-12.30 e 14-18, Sab 9-12.30. Raggiungi facilmente da Peschiera, Lazise, Verona."
        keywords="contatti Nautic Service, telefono officina nautica, dove siamo, come raggiungerci, WhatsApp Nautic Service, indirizzo Castelnuovo del Garda, orari apertura, preventivo riparazione moto d'acqua"
        url="/contatti"
      />
      <div>
      <PageHero
        eyebrow="Castelnuovo del Garda"
        title={t('contatti_title')}
        subtitle={t('contatti_subtitle')}
        image="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">{t('contatti_contact_us')}</h2>
            <p className="text-lg text-ink-muted mb-10 leading-relaxed max-w-[60ch]">
              {t('contatti_contact_desc')}
            </p>

            <div className="divide-y divide-ink/10 border-y border-ink/10">
              <div className="flex items-start gap-4 py-5">
                <div className="bg-primary/15 text-teal-ink w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div>
                  <h3 className="eyebrow text-ink-muted mb-1.5">{t('contatti_sede')}</h3>
                  <p className="text-ink">
                    Via Venezia 9<br />
                    Castelnuovo del Garda (Vr)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="bg-primary/15 text-teal-ink w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div>
                  <h3 className="eyebrow text-ink-muted mb-1.5">{t('contatti_referente')}</h3>
                  <p className="text-ink">
                    <a href="mailto:manuel@nautic-service.it" className="hover:underline">manuel@nautic-service.it</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="bg-primary/15 text-teal-ink w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div>
                  <h3 className="eyebrow text-ink-muted mb-1.5">{t('contatti_email')}</h3>
                  <p className="text-ink mb-2">
                    <a href="mailto:manuel@nautic-service.it" className="hover:underline">manuel@nautic-service.it</a>
                    <span className="text-ink-muted text-sm block mt-1">{t('contatti_info')}</span>
                  </p>
                  <p className="text-ink">
                    <a href="mailto:manuel@nautic-service.it" className="hover:underline">manuel@nautic-service.it</a>
                    <span className="text-ink-muted text-sm block mt-1">{t('contatti_preventivo')}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="bg-primary/15 text-teal-ink w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div>
                  <h3 className="eyebrow text-ink-muted mb-1.5">{t('contatti_telefono')}</h3>
                  <p className="text-ink mb-2">
                    <a href="tel:+390456450847" className="hover:underline">045 645 0847</a>
                    <span className="text-ink-muted text-sm block mt-1">{t('contatti_fisso')}</span>
                  </p>
                  <p className="text-ink">
                    <a href="tel:+393278992159" className="hover:underline">+39 327.8992159</a>
                    <span className="text-ink-muted text-sm block mt-1">Manuel</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="bg-primary/15 text-teal-ink w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div>
                  <h3 className="eyebrow text-ink-muted mb-1.5">{t('contatti_orari')}</h3>
                  <div className="text-ink space-y-1">
                    <p>{t('contatti_orari_feriali')}</p>
                    <p>{t('contatti_orari_sabato')}</p>
                    <p>{t('contatti_orari_domenica')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden bg-ink text-white rounded-[28px] p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#25D366]/20 blur-3xl" />
              <div className="relative">
                <span className="w-12 h-12 rounded-full bg-[#25D366] text-ink flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" strokeWidth={2} absoluteStrokeWidth />
                </span>
                <h3 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">{t('contatti_whatsapp_title')}</h3>
                <p className="mt-2 text-white/70">
                  {t('contatti_whatsapp_desc')}
                </p>
                <a
                  href="https://wa.me/393278992159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 ps-5 pe-6 py-3.5 rounded-full bg-[#25D366] text-ink font-semibold hover:bg-[#3ee07a] transition-colors duration-150"
                >
                  <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} absoluteStrokeWidth />
                  Chat WhatsApp
                </a>
              </div>
            </div>

            <div className="surface bg-white rounded-[28px] p-8 flex items-center justify-between gap-6">
              <h3 className="text-xl font-semibold tracking-tight text-ink">{t('contatti_social_title')}</h3>
              <div className="flex gap-3 items-center">
                <a
                  href="https://www.facebook.com/nauticservicelagodigarda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita la nostra pagina Facebook"
                  className="bg-[#1877F2] hover:bg-[#166FE5] active:bg-[#166FE5] text-white p-3 rounded-full transition-colors duration-150"
                >
                  <Facebook className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </a>
                <a
                  href="https://www.instagram.com/nauticservice_/?hl=it"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita il nostro profilo Instagram"
                  className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-90 active:opacity-90 text-white p-3 rounded-full transition-colors duration-150"
                >
                  <Instagram className="h-5 w-5" strokeWidth={2} absoluteStrokeWidth />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="surface bg-white rounded-[28px] p-2">
          <div className="w-full h-96 rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Via+Venezia+9,+37014+Cavalcaselle+VR&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Mappa - Via Venezia 9, Castelnuovo del Garda"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
