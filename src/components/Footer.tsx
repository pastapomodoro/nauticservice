import { Mail, Phone, MapPin } from 'lucide-react';

type FooterProps = {
  onNavigate?: (page: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0088AA] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-200">
              Il tuo partner di fiducia per barche, moto d'acqua e servizi nautici.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
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
                <a href="mailto:info@nautic-service.it" className="hover:underline">info@nautic-service.it</a>
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
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-sm">
              <li>Vendita Barche</li>
              <li>Noleggio</li>
              <li>Ricambi</li>
              <li>Manutenzione</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Orari</h3>
            <ul className="space-y-2 text-sm">
              <li>Lun - Sab: 8.30 - 12.30 e 14 - 18</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00D9CC] mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">&copy; 2025 Nautic Service. Tutti i diritti riservati.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate?.('privacy')}
                className="text-sm text-gray-300 hover:text-[#00D9CC] transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('cookie-settings-open'))}
                className="text-sm text-gray-300 hover:text-[#00D9CC] transition-colors"
              >
                Impostazioni cookie
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
