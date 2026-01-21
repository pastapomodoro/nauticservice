import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

type UsatoProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  year: string;
  condition: string;
  images: string[];
};

const usatoProducts: UsatoProduct[] = [
  {
    id: '1',
    name: 'Sea-Doo GTX Limited 2020',
    description: 'Moto d\'acqua in ottime condizioni, sempre tenuta in garage. Manutenzione regolare effettuata. Pronta all\'uso.',
    price: 18500,
    year: '2020',
    condition: 'Ottime condizioni',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Sea-Doo Spark 2021',
    description: 'Moto d\'acqua compatta e agile, perfetta per il divertimento. Poche ore di utilizzo.',
    price: 8500,
    year: '2021',
    condition: 'Eccellenti condizioni',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Sea-Doo RXT-X 2019',
    description: 'Modello ad alte prestazioni, sempre manutenuto con cura. Documentazione completa disponibile.',
    price: 22000,
    year: '2019',
    condition: 'Ottime condizioni',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'Sea-Doo GTI SE 2022',
    description: 'Moto d\'acqua versatile con molte funzionalità. Praticamente nuova, venduta per cambio modello.',
    price: 12500,
    year: '2022',
    condition: 'Eccellenti condizioni',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'Sea-Doo Wake Pro 2020',
    description: 'Perfetta per gli sport da traino. Equipaggiata con accessori originali. Ottimo stato generale.',
    price: 19500,
    year: '2020',
    condition: 'Ottime condizioni',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'Sea-Doo Explorer Pro 2019',
    description: 'Modello turistico spazioso, ideale per escursioni. Manutenzione sempre effettuata in officina autorizzata.',
    price: 16500,
    year: '2019',
    condition: 'Buone condizioni',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '7',
    name: 'Sea-Doo GTR 2021',
    description: 'Modello sportivo con prestazioni elevate. Sempre tenuto al coperto e manutenuto regolarmente.',
    price: 14500,
    year: '2021',
    condition: 'Eccellenti condizioni',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '8',
    name: 'Sea-Doo GTX 2018',
    description: 'Moto d\'acqua turistica confortevole. Ottimo rapporto qualità-prezzo. Pronta all\'uso.',
    price: 11500,
    year: '2018',
    condition: 'Buone condizioni',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '9',
    name: 'Sea-Doo Spark Trixx 2022',
    description: 'Versione acrobatica dello Spark. Perfetta per chi ama le acrobazie. Poche ore di utilizzo.',
    price: 9500,
    year: '2022',
    condition: 'Eccellenti condizioni',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '10',
    name: 'Sea-Doo FishPro Sport 2020',
    description: 'Modello dedicato alla pesca sportiva. Equipaggiata con accessori per la pesca. Ottimo stato.',
    price: 17500,
    year: '2020',
    condition: 'Ottime condizioni',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    ]
  }
];

// Componente Card Prodotto Usato con Carosello
function UsatoProductCard({ product }: { product: UsatoProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Ciao, sono interessato a: ${product.name} (${product.year}) - €${product.price.toLocaleString()}`);
    window.open(`https://wa.me/393278992159?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Card Prodotto */}
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#2cd5c4] group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Immagine principale */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
            }}
          />
          {/* Badge anno */}
          <div className="absolute top-3 left-3 bg-[#2cd5c4] text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.year}
          </div>
          {/* Badge condizione */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
            {product.condition}
          </div>
          {/* Indicatore multiple immagini */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
              {product.images.length} foto
            </div>
          )}
        </div>

        {/* Contenuto card */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2cd5c4]">
              €{product.price.toLocaleString()}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="px-4 py-2 bg-[#2cd5c4] hover:bg-[#00D9CC] text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Dettagli
            </button>
          </div>
        </div>
      </div>

      {/* Modal con Carosello */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header Modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Carosello Immagini */}
                <div className="relative">
                  <div className="relative h-80 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - Immagine ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
                      }}
                    />
                    
                    {/* Navigazione carosello */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Indicatori immagini */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-2 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {product.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? 'border-[#2cd5c4]'
                              : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Informazioni Prodotto */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#2cd5c4] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {product.year}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.condition}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-[#2cd5c4]">
                        €{product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contatta su WhatsApp
                    </button>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full mt-3 bg-[#2cd5c4] hover:bg-[#00D9CC] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      Più Informazioni
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Usato() {
  return (
    <>
      <SEO
        title="Moto d'Acqua e Barche Usate Garantite | Lago di Garda"
        description="Moto d'acqua Sea-Doo usate garantite e revisionate. Barche usate controllate con storico manutenzione. Permute accettate, finanziamenti disponibili. Ampia scelta a Castelnuovo del Garda. Consegna su tutto il Lago di Garda."
        keywords="moto d'acqua usate, Sea Doo usato prezzo, jet ski usati, barche usate Lago di Garda, PWC seconda mano, GTX usato, Spark usato, barche usate Verona, barche usate Brescia"
        url="/usato"
      />
      <div className="bg-[#F4F7F6] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">Usato</h1>
            <p className="text-xl md:text-2xl mt-4">
              Barche e moto d'acqua usate garantite e controllate
            </p>
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Seleziona accurata di barche e moto d'acqua usate, tutte controllate e garantite. 
            Ogni prodotto è stato verificato dal nostro team di esperti per assicurarti qualità e affidabilità.
          </p>
        </div>

        {/* Griglia Prodotti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {usatoProducts.map((product) => (
            <UsatoProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
