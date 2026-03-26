import { Wrench, Phone, MessageCircle, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

export default function RicambiMaintenance() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Ricambi - In Manutenzione | Nautic Service SRL"
        description="La sezione ricambi è temporaneamente in manutenzione. Contattaci direttamente per qualsiasi necessità di ricambi nautici."
        url="/ricambi"
      />
      <div className="bg-[#F4F7F6] min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="bg-gradient-to-br from-[#2cd5c4] to-[#00D9CC] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Wrench className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-4">
              {t('ricambi_maintenance_title')}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('ricambi_maintenance_desc')}
            </p>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500 mb-5">
                {t('ricambi_maintenance_contact')}
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+393278992159"
                  className="flex items-center justify-center gap-3 bg-[#2cd5c4] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  +39 327.8992159
                </a>
                <a
                  href="https://wa.me/393278992159?text=Ciao!%20Vorrei%20informazioni%20sui%20ricambi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:manuel@nautic-service.it"
                  className="flex items-center justify-center gap-3 bg-[#1A5F7A] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5" />
                  manuel@nautic-service.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
