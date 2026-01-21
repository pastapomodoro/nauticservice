import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShopifyBuyButton from './ShopifyBuyButton';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getProductTranslation } from '../i18n/productTranslations';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  in_stock: boolean;
  shopify_product_id?: string | number;
  handle?: string | null;
};

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

// Componente per gestire il caricamento delle immagini con fallback per prefissi numerici
// Usa SOLO immagini dalla cartella ricambi-images o moto, senza fallback a Shopify
const LocalImageWithFallback = ({ shopifyUrl, alt, className }: { shopifyUrl: string; alt: string; className: string }) => {
  // Se il percorso è già locale (ricambi-images o moto), usalo direttamente
  if (shopifyUrl && (shopifyUrl.startsWith('/ricambi-images/') || shopifyUrl.startsWith('/moto/'))) {
    return (
      <img
        src={shopifyUrl}
        alt={alt}
        className={className}
        style={{ 
          background: 'transparent', 
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          filter: 'none',
          isolation: 'isolate',
          mixBlendMode: 'normal'
        }}
      />
    );
  }

  // Altrimenti, estrai il nome del file dall'URL Shopify e cerca nella cartella locale
  const extractFileName = (url: string): string => {
    if (!url) return '';
    
    // Se è già un percorso locale
    if (url.startsWith('/ricambi-images/')) {
      return url.replace('/ricambi-images/', '');
    }
    
    // Estrai da URL Shopify
    const urlMatch = url.match(/\/files\/[^\/]+\/([^?]+)/);
    if (urlMatch) {
      return urlMatch[1];
    }
    
    // Fallback: prendi l'ultima parte dell'URL
    const fileName = url.split('/').pop()?.split('?')[0] || '';
    return fileName;
  };

  const fileName = extractFileName(shopifyUrl);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [attempt, setAttempt] = useState<number>(0);
  const maxAttempts = 300;

  // Calcola il percorso dell'immagine basato sul tentativo corrente
  const getImagePath = React.useCallback((currentAttempt: number): string => {
    if (!fileName) return '';
    
    if (currentAttempt === 0) {
      return `/ricambi-images/${fileName}`;
    } else if (currentAttempt <= maxAttempts) {
      return `/ricambi-images/${currentAttempt}-${fileName}`;
    }
    return '';
  }, [fileName, maxAttempts]);

  // Inizializza con il primo tentativo
  useEffect(() => {
    if (fileName) {
      const initialPath = getImagePath(0);
      setCurrentSrc(initialPath);
      setAttempt(0);
    }
  }, [fileName, getImagePath]);

  const handleError = () => {
    const nextAttempt = attempt + 1;
    if (nextAttempt <= maxAttempts) {
      const nextPath = getImagePath(nextAttempt);
      setCurrentSrc(nextPath);
      setAttempt(nextAttempt);
    }
  };

  if (!fileName || !currentSrc) {
    return null;
  }

  return (
    <img
      key={`img-${fileName}-${attempt}`}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      style={{ 
        background: 'transparent', 
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        filter: 'none',
        isolation: 'isolate',
        mixBlendMode: 'normal'
      }}
    />
  );
};

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const { language, t } = useLanguage();
  
  // Ottieni la traduzione del prodotto se disponibile
  const productTrans = product ? getProductTranslation(product.id, language) : null;
  const displayName = productTrans?.name || product?.name || '';
  const displayDescription = productTrans?.description || product?.description || '';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image_url: product.image_url,
      shopify_product_id: product.shopify_product_id,
      handle: product.handle,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0E0E0E] pr-2 line-clamp-2">
                  {displayName.replace(/\d{6,}/g, '').replace(/\s{2,}/g, ' ').trim() || displayName}
                </h2>
                <button
                  onClick={onClose}
                  className="text-[#6B6F72] hover:text-[#0E0E0E] active:text-[#0E0E0E] transition-colors flex-shrink-0 touch-manipulation"
                  aria-label={t('common_close')}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div 
                    className="bg-[#F4F7F6]"
                    style={{
                      backgroundColor: '#F4F7F6',
                      background: '#F4F7F6',
                      backgroundImage: 'none'
                    }}
                  >
                    <LocalImageWithFallback
                      shopifyUrl={product.image_url}
                      alt={displayName}
                      className="w-full h-auto rounded-lg object-contain max-h-[500px]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                      <span className="inline-block bg-[#2cd5c4] text-[#0E0E0E] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {product.category?.startsWith('Ricambi - ') 
                          ? product.category.replace('Ricambi - ', '')
                          : product.category}
                      </span>
                      {product.in_stock && (
                        <span className="inline-block bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {t('ricambi_in_stock')}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <p className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-3 sm:mb-4">
                        €{product.price.toLocaleString()}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold text-[#0E0E0E] mb-2">{t('product_description')}</h3>
                      <p className="text-sm sm:text-base text-[#0E0E0E] leading-relaxed whitespace-pre-line">
                        {displayDescription}
                      </p>
                    </div>

                    <div className="mt-auto space-y-2 sm:space-y-3">
                      {(product.shopify_product_id || product.handle) ? (
                        <div onClick={(e) => e.stopPropagation()}>
                          <ShopifyBuyButton
                            productId={product.shopify_product_id}
                            productHandle={product.handle}
                            className="w-full"
                          />
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `mailto:preventivo@nautic-service.it?subject=Richiesta Preventivo - ${displayName}&body=Salve,%0D%0A%0D%0AVorrei ricevere un preventivo per: ${displayName}%0D%0APrezzo indicativo: €${product.price.toLocaleString()}%0D%0A%0D%0ACordiali saluti`;
                          }}
                          className="w-full bg-[#2cd5c4] hover:bg-[#00D9CC] active:bg-[#00D9CC] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors touch-manipulation"
                        >
                          {t('vendita_request_quote')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

