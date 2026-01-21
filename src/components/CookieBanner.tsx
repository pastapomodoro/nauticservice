import { useEffect, useMemo, useState } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const STORAGE_KEY = 'cookieConsentV2';
  const CONSENT_VERSION = 1;

  type ConsentState = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    version: number;
    timestamp: string;
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isPrefsOpen, setIsPrefsOpen] = useState(false);
  const [prefs, setPrefs] = useState<{ analytics: boolean; marketing: boolean }>({
    analytics: false,
    marketing: false,
  });

  const consent: ConsentState | null = useMemo(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as ConsentState;
      if (!parsed || parsed.necessary !== true) return null;
      return parsed;
    } catch {
      return null;
    }
  }, [isVisible]); // recompute after saving/closing

  const saveConsent = (next: Omit<ConsentState, 'timestamp'>) => {
    const payload: ConsentState = {
      ...next,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    // Notifica il resto dell'app (se in futuro aggiungi analytics/ads)
    window.dispatchEvent(
      new CustomEvent('cookie-consent-changed', { detail: payload })
    );
  };

  useEffect(() => {
    // Migrazione da vecchia chiave (cookieConsent)
    const legacy = localStorage.getItem('cookieConsent');
    const current = localStorage.getItem(STORAGE_KEY);

    if (!current && legacy) {
      if (legacy === 'accepted') {
        saveConsent({
          necessary: true,
          analytics: true,
          marketing: true,
          version: CONSENT_VERSION,
        });
      } else if (legacy === 'rejected') {
        saveConsent({
          necessary: true,
          analytics: false,
          marketing: false,
          version: CONSENT_VERSION,
        });
      }
    }

    // Mostra banner solo se non c'è consenso salvato
    const hasConsent = !!localStorage.getItem(STORAGE_KEY);
    if (!hasConsent) setIsVisible(true);

    // Apri preferenze su richiesta (dal footer)
    const onOpenSettings = () => {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as ConsentState;
          setPrefs({
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          });
        } catch {
          // ignore
        }
      }
      setIsVisible(true);
      setIsPrefsOpen(true);
    };

    window.addEventListener('cookie-settings-open', onOpenSettings as EventListener);
    return () => {
      window.removeEventListener('cookie-settings-open', onOpenSettings as EventListener);
    };
  }, []);

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      version: CONSENT_VERSION,
    });
    setIsVisible(false);
    setIsPrefsOpen(false);
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
    });
    setIsVisible(false);
    setIsPrefsOpen(false);
  };

  const handleSavePrefs = () => {
    saveConsent({
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      version: CONSENT_VERSION,
    });
    setIsVisible(false);
    setIsPrefsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Banner minimale */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-5 w-5 text-[#2cd5c4] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Usiamo cookie tecnici e, con il tuo consenso, cookie di analisi/marketing.{' '}
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'privacy' }));
                  }}
                  className="text-[#2cd5c4] hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => setIsPrefsOpen(true)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition-colors"
              >
                Preferenze
              </button>
              <button
                onClick={handleRejectAll}
                className="px-3 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-lg text-sm font-medium transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-3 py-2 bg-[#2cd5c4] hover:bg-[#00D9CC] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal preferenze */}
      {isPrefsOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsPrefsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900">Preferenze cookie</h3>
              <button
                onClick={() => setIsPrefsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Chiudi"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-sm text-gray-600">
                I cookie tecnici sono sempre attivi. Puoi scegliere se abilitare cookie di analisi e marketing.
              </p>

              <div className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Tecnici (necessari)</p>
                  <p className="text-xs text-gray-600">Sempre attivi</p>
                </div>
                <input type="checkbox" checked readOnly className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Analisi</p>
                  <p className="text-xs text-gray-600">Misurazione traffico e performance</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  className="h-4 w-4 accent-[#2cd5c4]"
                />
              </div>

              <div className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Marketing</p>
                  <p className="text-xs text-gray-600">Personalizzazione e contenuti promozionali</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  className="h-4 w-4 accent-[#2cd5c4]"
                />
              </div>
            </div>

            <div className="px-5 py-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-lg text-sm font-medium transition-colors"
              >
                Rifiuta tutti
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-[#2cd5c4] hover:bg-[#00D9CC] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Accetta tutti
              </button>
              <button
                onClick={handleSavePrefs}
                className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
