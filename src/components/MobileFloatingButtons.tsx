import { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function MobileFloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/393278992159?text=Ciao!%20Vorrei%20informazioni%20sui%20vostri%20servizi."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg active:scale-95 transition-transform animate-slideIn"
            style={{ animationDelay: '0ms' }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold whitespace-nowrap">WhatsApp</span>
          </a>
          
          {/* Phone Button */}
          <a
            href="tel:+393278992159"
            className="flex items-center gap-3 bg-[#2cd5c4] text-white pl-4 pr-5 py-3 rounded-full shadow-lg active:scale-95 transition-transform animate-slideIn"
            style={{ animationDelay: '50ms' }}
          >
            <Phone className="w-6 h-6" />
            <span className="font-semibold whitespace-nowrap">Chiama</span>
          </a>
        </div>
      )}
      
      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95 ${
          isExpanded 
            ? 'bg-gray-700 rotate-0' 
            : 'bg-[#25D366] animate-pulse-subtle'
        }`}
        aria-label={isExpanded ? 'Chiudi menu contatti' : 'Apri menu contatti'}
      >
        {isExpanded ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
      
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.2s ease-out forwards;
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(37, 211, 102, 0);
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

