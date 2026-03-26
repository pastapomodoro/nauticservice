import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type FooterProps = {
  onNavigate?: (page: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#1A5F7A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-sm text-gray-200">
              {t('footer_desc')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contatti')}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+393278992159" className="hover:underline">+39 327.8992159</a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+393478239844" className="hover:underline">+39 347.8239844</a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:manuel@nautic-service.it" className="hover:underline">manuel@nautic-service.it</a>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Via Venezia 9, Castelnuovo del Garda (VR)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-gray-300">P.IVA: 04616350239</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_servizi')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('footer_vendita_barche')}</li>
              <li>{t('footer_ricambi')}</li>
              <li>{t('footer_manutenzione')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_orari')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('contatti_orari_feriali')}</li>
              <li>{t('contatti_orari_domenica')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2cd5c4]/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Nautic Service SRL. {t('footer_rights')}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate?.('privacy')}
                className="text-sm text-gray-300 hover:text-[#2cd5c4] transition-colors"
              >
                {t('footer_privacy')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
