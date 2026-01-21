import { Menu, X, ChevronRight } from 'lucide-react';
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

  const navItems = [
    { id: 'home', label: t('nav_home'), icon: '🏠' },
    { id: 'vendita', label: t('nav_vendita'), icon: '🚤' },
    ...(FEATURES.USATO_ENABLED ? [{ id: 'usato', label: t('nav_usato'), icon: '🔄' }] : []),
    { id: 'ricambi', label: t('nav_ricambi'), icon: '⚙️' },
    { id: 'news', label: t('nav_news'), icon: '📰' },
    { id: 'contatti', label: t('nav_contatti'), icon: '📞' },
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
      <nav className="bg-[#2cd5c4] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer active:scale-95 transition-transform"
              onClick={() => handleNavigate('home')}
            >
              <img
                src="/nautic.png"
                alt="Nautic Service Logo"
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-sm lg:text-base font-medium transition-all duration-200 py-2 px-1 ${
                    currentPage === item.id
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/90 hover:text-white hover:border-b-2 hover:border-white/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Selector Desktop */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 text-white/90 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 active:bg-white/20"
                >
                  <span className="text-xl">{flags[language].flag}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100">
                    {(Object.keys(flags) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          language === lang ? 'bg-[#2cd5c4]/10 text-[#2cd5c4]' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-xl">{flags[lang].flag}</span>
                        <span className="text-sm font-medium">{flags[lang].label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-1">
              {/* Language Selector Mobile */}
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center justify-center w-11 h-11 text-white rounded-lg active:bg-white/20 transition-colors"
                aria-label="Cambia lingua"
              >
                <span className="text-2xl">{flags[language].flag}</span>
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-11 h-11 text-white rounded-lg active:bg-white/20 transition-colors"
                aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" strokeWidth={2.5} />
                ) : (
                  <Menu className="h-7 w-7" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto overscroll-contain">
          {/* Navigation Items */}
          <div className="py-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full flex items-center justify-between px-6 py-4 text-lg font-medium transition-all active:bg-gray-100 ${
                  currentPage === item.id
                    ? 'bg-[#2cd5c4]/10 text-[#2cd5c4] border-l-4 border-[#2cd5c4]'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-colors ${
                  currentPage === item.id ? 'text-[#2cd5c4]' : 'text-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-6 border-t border-gray-200" />

          {/* Language Selection */}
          <div className="py-4 px-6">
            <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
              {t('nav_language') || 'Lingua'}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(flags) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl transition-all active:scale-95 ${
                    language === lang 
                      ? 'bg-[#2cd5c4] text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-3xl">{flags[lang].flag}</span>
                  <span className="text-xs font-medium">{flags[lang].label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Quick Actions */}
          <div className="py-4 px-6">
            <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
              {t('contatti_title') || 'Contatti'}
            </p>
            <div className="space-y-3">
              <a
                href="tel:+393278992159"
                className="flex items-center gap-4 py-4 px-4 bg-[#2cd5c4] text-white rounded-xl active:scale-98 transition-transform shadow-lg"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Chiamaci</p>
                  <p className="text-sm opacity-90">+39 327.8992159</p>
                </div>
              </a>
              <a
                href="https://wa.me/393278992159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 px-4 bg-[#25D366] text-white rounded-xl active:scale-98 transition-transform shadow-lg"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-90">Scrivici ora</p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Padding for safe area */}
          <div className="h-20" />
        </div>
      </div>

      {/* Language Menu Dropdown (for mobile when menu is closed) */}
      {isLangMenuOpen && !isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsLangMenuOpen(false)}
          />
          <div className="fixed top-16 right-4 w-44 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100 md:hidden">
            {(Object.keys(flags) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-4 text-left active:bg-gray-100 transition-colors ${
                  language === lang ? 'bg-[#2cd5c4]/10 text-[#2cd5c4]' : 'text-gray-700'
                }`}
              >
                <span className="text-2xl">{flags[lang].flag}</span>
                <span className="text-base font-medium">{flags[lang].label}</span>
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
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
