import { Menu, X, ChevronRight, ChevronDown, Home, Ship, RotateCcw, Settings, Newspaper, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';
import { FEATURES } from '../config/features';

type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

const flags: Record<Language, { flag: string; label: string }> = {
  it: { flag: '🇮🇹', label: 'Italiano' },
  en: { flag: '🇬🇧', label: 'English' },
  de: { flag: '🇩🇪', label: 'Deutsch' },
};

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Blocca scroll quando menu mobile è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Linea di separazione solo quando la pagina scorre sotto la barra
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav_home'), icon: Home },
    { id: 'vendita', label: t('nav_vendita'), icon: Ship },
    ...(FEATURES.USATO_ENABLED ? [{ id: 'usato', label: t('nav_usato'), icon: RotateCcw }] : []),
    ...(FEATURES.RICAMBI_ENABLED ? [{ id: 'ricambi', label: t('nav_ricambi'), icon: Settings }] : []),
    { id: 'news', label: t('nav_news'), icon: Newspaper },
    { id: 'contatti', label: t('nav_contatti'), icon: Phone },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-sand/80 backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-150 ${
          isScrolled || isMenuOpen ? 'shadow-[0_1px_0_0_oklch(0_0_0/0.08)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            {/* Logo */}
            <button
              type="button"
              className="flex items-center -ml-1 px-1"
              onClick={() => handleNavigate('home')}
              aria-label="Nautic Service - Home"
            >
              <img
                src="/nautic.png"
                alt="Nautic Service Logo"
                // Il PNG è quadrato con molto margine: object-cover ritaglia la sola scritta
                className="h-10 w-[110px] md:h-12 md:w-[132px] object-cover"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  className={`px-3.5 py-2 rounded-full text-[15px] font-semibold transition-colors duration-150 ${
                    currentPage === item.id
                      ? 'bg-ink/[0.06] text-ink'
                      : 'text-ink/60 hover:text-ink hover:bg-ink/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Selector Desktop */}
              <div className="relative ml-1">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  aria-expanded={isLangMenuOpen}
                  aria-label={t('nav_language')}
                  className="flex items-center gap-1 ps-3 pe-2.5 py-2 rounded-full text-ink/70 hover:text-ink hover:bg-ink/[0.04] transition-colors duration-150"
                >
                  <span className="text-lg leading-none">{flags[language].flag}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ease-out ${isLangMenuOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2}
                    absoluteStrokeWidth
                  />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 p-1.5 bg-white rounded-2xl shadow-float z-50 origin-top-right lang-menu-enter">
                    {(Object.keys(flags) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-left transition-colors duration-150 ${
                          language === lang ? 'bg-primary/10 text-teal-ink' : 'text-ink/80 hover:bg-ink/[0.04]'
                        }`}
                      >
                        <span className="text-lg leading-none">{flags[lang].flag}</span>
                        <span className="text-sm font-semibold">{flags[lang].label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:+393278992159"
                className="ml-2 inline-flex items-center gap-2 ps-4 pe-3.5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-ink-soft transition-colors duration-150"
              >
                <Phone className="w-4 h-4" strokeWidth={2} absoluteStrokeWidth />
                {t('common_call')}
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center justify-center w-11 h-11 rounded-full active:bg-ink/[0.06] transition-colors"
                aria-label="Cambia lingua"
              >
                <span className="text-xl leading-none">{flags[language].flag}</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-11 h-11 text-ink rounded-full active:bg-ink/[0.06] transition-colors"
                aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" strokeWidth={2} absoluteStrokeWidth />
                ) : (
                  <Menu className="h-6 w-6" strokeWidth={2} absoluteStrokeWidth />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-ink/40 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-sand z-40 md:hidden transform transition-transform duration-300 ease-drawer ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto overscroll-contain px-4">
          {/* Navigation Items */}
          <div className="pt-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                aria-current={currentPage === item.id ? 'page' : undefined}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold transition-colors active:bg-ink/[0.06] ${
                  currentPage === item.id ? 'bg-white shadow-line text-ink' : 'text-ink/80'
                }`}
                style={{
                  animation: isMenuOpen ? `slideInRight 250ms var(--ease-out) ${index * 40}ms both` : 'none'
                }}
              >
                <span className="flex items-center gap-4">
                  <item.icon
                    className={`w-5 h-5 ${currentPage === item.id ? 'text-teal-ink' : 'text-ink/50'}`}
                    strokeWidth={2}
                    absoluteStrokeWidth
                  />
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-ink/30" strokeWidth={2} absoluteStrokeWidth />
              </button>
            ))}
          </div>

          {/* Language Selection */}
          <div className="pt-6">
            <p className="eyebrow text-ink/50 mb-3 px-1">
              {t('nav_language') || 'Lingua'}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(flags) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  aria-pressed={language === lang}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-2xl transition-colors ${
                    language === lang
                      ? 'bg-ink text-white'
                      : 'bg-white shadow-line text-ink/80'
                  }`}
                >
                  <span className="text-2xl leading-none">{flags[lang].flag}</span>
                  <span className="text-xs font-semibold">{flags[lang].label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Quick Actions */}
          <div className="pt-6">
            <p className="eyebrow text-ink/50 mb-3 px-1">
              {t('contatti_title') || 'Contatti'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+393278992159"
                className="flex flex-col gap-3 p-4 bg-ink text-white rounded-2xl"
              >
                <Phone className="w-5 h-5" strokeWidth={2} absoluteStrokeWidth />
                <span>
                  <span className="block font-semibold">{t('common_call')}</span>
                  <span className="block text-sm text-white/70">327 899 2159</span>
                </span>
              </a>
              <a
                href="https://wa.me/393278992159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-4 bg-[#25D366] text-ink rounded-2xl"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} absoluteStrokeWidth />
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="block text-sm text-ink/70">Chat</span>
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Padding for safe area */}
          <div className="h-24" />
        </div>
      </div>

      {/* Language Menu Dropdown (for mobile when menu is closed) */}
      {isLangMenuOpen && !isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsLangMenuOpen(false)}
          />
          <div className="fixed top-[60px] right-4 w-48 p-1.5 bg-white rounded-2xl shadow-float z-50 md:hidden origin-top-right lang-menu-enter">
            {(Object.keys(flags) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-[10px] text-left active:bg-ink/[0.06] transition-colors ${
                  language === lang ? 'bg-primary/10 text-teal-ink' : 'text-ink/80'
                }`}
              >
                <span className="text-xl leading-none">{flags[lang].flag}</span>
                <span className="text-base font-semibold">{flags[lang].label}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Click outside to close language menu on desktop */}
      {isLangMenuOpen && (
        <div
          className="fixed inset-0 z-30 hidden md:block"
          onClick={() => setIsLangMenuOpen(false)}
        />
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
        }

        @keyframes langMenuIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-4px);
          }
        }

        .lang-menu-enter {
          animation: langMenuIn 150ms var(--ease-out);
        }
      `}</style>
    </>
  );
}
