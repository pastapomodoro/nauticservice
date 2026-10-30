import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type FooterProps = {
  onNavigate?: (page: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const links = [
    { id: 'home', label: t('nav_home') },
    { id: 'vendita', label: t('nav_vendita') },
    { id: 'news', label: t('nav_news') },
    { id: 'contatti', label: t('nav_contatti') },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="font-heading text-2xl font-semibold tracking-tight">
              Nautic Service<span className="text-anchor">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
              {t('footer_desc')}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-white/40 mb-4">{t('footer_nav')}</h3>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate?.(link.id)}
                    className="min-h-0 min-w-0 text-white/80 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white/40 mb-4">{t('footer_contatti')}</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} absoluteStrokeWidth />
                <a href="tel:+393278992159" className="hover:text-white transition-colors duration-150">+39 327.8992159</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} absoluteStrokeWidth />
                <a href="mailto:manuel@nautic-service.it" className="hover:text-white transition-colors duration-150">manuel@nautic-service.it</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={1.5} absoluteStrokeWidth />
                <span>Via Venezia 9, Castelnuovo del Garda (VR)</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white/40 mb-4">{t('footer_orari')}</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>{t('contatti_orari_feriali')}</li>
              <li>{t('contatti_orari_sabato')}</li>
              <li>{t('contatti_orari_domenica')}</li>
            </ul>
            <h3 className="eyebrow text-white/40 mt-8 mb-4">{t('footer_servizi')}</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>{t('footer_vendita_barche')}</li>
              <li>{t('footer_ricambi')}</li>
              <li>{t('footer_manutenzione')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Nautic Service SRL · P.IVA 04616350239 · {t('footer_rights')}
          </p>
          <button
            onClick={() => onNavigate?.('privacy')}
            className="hover:text-white transition-colors duration-150"
          >
            {t('footer_privacy')}
          </button>
        </div>
      </div>
    </footer>
  );
}
