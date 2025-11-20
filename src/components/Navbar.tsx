import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'vendita', label: 'Vendita' },
    { id: 'noleggio', label: 'Noleggio' },
    { id: 'ricambi', label: 'Ricambi' },
    { id: 'news', label: 'News' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/nautic.png" 
              alt="Nautic Service Logo" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#006A71] border-b-2 border-[#006A71]'
                    : 'text-gray-700 hover:text-[#48A6A7]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('checkout')}
              className="relative p-2 text-[#006A71] hover:text-[#48A6A7] transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => onNavigate('checkout')}
              className="relative p-2 text-[#006A71]"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#006A71]" />
              ) : (
                <Menu className="h-6 w-6 text-[#006A71]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-[#9ACBD0] text-[#006A71]'
                    : 'text-gray-700 hover:bg-[#F2EFE7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
