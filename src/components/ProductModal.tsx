import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShopifyBuyButton from './ShopifyBuyButton';
import { useCart } from '../contexts/CartContext';

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

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem } = useCart();

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
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-[#006A71]">{product.name}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-auto rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block bg-[#9ACBD0] text-[#006A71] px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                      {product.in_stock && (
                        <span className="ml-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Disponibile
                        </span>
                      )}
                    </div>

                    <div className="mb-6">
                      <p className="text-3xl font-bold text-[#006A71] mb-4">
                        €{product.price.toLocaleString()}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Descrizione</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-3">
                      {(product.shopify_product_id || product.handle) ? (
                        <ShopifyBuyButton
                          productId={product.shopify_product_id}
                          productHandle={product.handle}
                          className="w-full"
                        />
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleAddToCart}
                          className="w-full bg-[#006A71] hover:bg-[#48A6A7] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Aggiungi al Carrello
                        </motion.button>
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

