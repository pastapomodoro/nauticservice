import { useState, useEffect } from 'react';
import ProductModal from '../components/ProductModal';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { useLanguage } from '../contexts/LanguageContext';
import { getProductTranslation, getCategoryTranslation, venditaCategoryLabels } from '../i18n/productTranslations';

type Product = {
  id: string;
  name: string;
  year: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

// Funzione per ottenere il nome del file immagine basato sul nome del prodotto
const getImagePath = (productName: string): string => {
  const imageMap: Record<string, string> = {
    'Spark': 'spark.avif',
    'Spark Trixx': 'spark trixx.avif',
    'GTI': 'gti.avif',
    'GTI SE': 'gti se.avif',
    'GTX': 'gtx.avif',
    'GTX Limited': 'gtx limited.avif',
    'Explorer Pro': 'explorer pro.avif',
    'GTR': 'gtr.avif',
    'RXT-X': 'rxt-x.avif',
    'RXP-X': 'rxp-x.avif',
    'GTR-X': 'gtr-x.avif',
    'Wake Pro': 'wake pro.avif',
    'FishPro Sport': 'fish pro sport.avif'
  };
  
  return `/moto/${imageMap[productName] || 'spark.avif'}`;
};

// Funzione per ottenere il link Sea-Doo basato sul nome del prodotto
const getSeaDooLink = (productName: string): string => {
  const linkMap: Record<string, string> = {
    'Spark': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/rec-lite/spark.html',
    'Spark Trixx': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/rec-lite/spark-trixx.html',
    'GTI': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/divertimento/gti.html',
    'GTI SE': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/divertimento/gti-se.html',
    'GTX': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/turismo/gtx.html',
    'GTX Limited': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/turismo/gtx-limited.html',
    'Explorer Pro': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/turismo/explorer-pro.html',
    'GTR': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/prestazioni/gtr.html',
    'RXT-X': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/prestazioni/rxt-x.html',
    'RXP-X': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/prestazioni/rxp-x.html',
    'GTR-X': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/prestazioni/gtr-x.html',
    'Wake Pro': 'https://sea-doo.brp.com/it/it/modello/motos-d-acqua/sport-da-traino/wake-pro.html',
    'FishPro Sport': 'https://sea-doo.brp.com/it/it/modello.html' // Link generico se non trovato
  };
  
  return linkMap[productName] || 'https://sea-doo.brp.com/it/it/modello.html';
};

type Category = {
  id: string;
  name: string;
  description: string;
};

type VenditaProps = {
  onNavigate: (page: string) => void;
};

const categories: Category[] = [
  {
    id: 'divertimento',
    name: 'Divertimento',
    description: 'PWC versatili ed efficienti, altamente adattabili a qualsiasi avventura. Il modo perfetto per far divertire tutto l\'equipaggio con una serie di intrattenimenti in acqua. Tantissimo spazio per riporre i bagagli e accessoriarsi facilmente per gli sport da traino e per il divertimento di tutto il giorno.'
  },
  {
    id: 'turismo',
    name: 'Turismo',
    description: 'Espandi i tuoi orizzonti. Le moto d\'acqua Sea-Doo Touring offrono una stabilità leader del settore abbinata a comfort e comodità. È l\'imbarcazione da crociera per 2-3 persone, ideale per le avventure di tutto il giorno.'
  },
  {
    id: 'prestazioni',
    name: 'Prestazioni',
    description: 'Scopri le caratteristiche ispirate alle gare per dominare un giro di boa, nonché la tecnologia avanzata e la convenienza per le esplorazioni in mare aperto. Ciascun modello Performance offre opzioni di motori Rotax dinamici per aggiungere una dose extra di adrenalina.'
  },
  {
    id: 'sport-da-traino',
    name: 'Sport da traino',
    description: 'I modello Sea-Doo Wake Pro sono costruiti appositamente per i tuoi sport da traino preferiti. Dotate di porta tavola, pilone per gli sci e funzioni esclusive come la modalità Sci, sono l\'anima della festa con tanta potenza.'
  },
  {
    id: 'pesca-sportiva',
    name: 'Pesca sportiva',
    description: 'Costruita pensando agli appassionati di pesca, la famiglia di moto d\'acqua Sea-Doo Fish Pro ti permette di essere più vicino che mai all\'azione e include refrigeratori per il pescato, portacanne, Garmin Fish Finder e molto altro.'
  }
];

const products: Product[] = [
  // Divertimento
  {
    id: 'spark-2026',
    name: 'Spark',
    year: '2026',
    description: 'Leggera, divertente e perfetta per gite spontanee. Spark è facile da trainare ed è costruita per portare divertimento ogni volta che si entra in acqua.',
    price: '8.999',
    category: 'divertimento',
    image: getImagePath('Spark')
  },
  {
    id: 'spark-trixx-2026',
    name: 'Spark Trixx',
    year: '2026',
    description: 'Per gli amanti del brivido che vogliono distinguersi, Spark Trixx 2026 porta il divertimento a un livello superiore. Attiva la modalità Trixx e mostra le tue acrobazie acquatiche come un professionista. Basta provarla per capire l\'entusiasmo.',
    price: '11.699',
    category: 'divertimento',
    image: getImagePath('Spark Trixx')
  },
  // Turismo
  {
    id: 'gti-2026',
    name: 'GTI',
    year: '2026',
    description: 'La piattaforma GTI 2026 apre un mondo di possibilità sull\'acqua. Sia che tu cerchi azione, relax o una via di mezzo fra i due, GTI ti regala ogni volta giornate indimenticabili.',
    price: '15.199',
    category: 'turismo',
    image: getImagePath('GTI')
  },
  {
    id: 'gti-se-2026',
    name: 'GTI SE',
    year: '2026',
    description: 'Con la piattaforma da bagno più grande del settore, 2026 GTI SE è pronta per ogni destinazione del tuo viaggio. Comfort e avventura vanno di pari passo ovunque l\'acqua ti conduca.',
    price: '17.899',
    category: 'turismo',
    image: getImagePath('GTI SE')
  },
  {
    id: 'gtx-2026',
    name: 'GTX',
    year: '2026',
    description: 'Per il 2026, GTX continua a mantenere la propria reputazione: comfort di alto livello, prestazioni raffinate e uno stile audace che rende ogni uscita una fuga nel fine settimana.',
    price: '19.799',
    category: 'turismo',
    image: getImagePath('GTX')
  },
  {
    id: 'gtx-limited-2026',
    name: 'GTX Limited',
    year: '2026',
    description: 'Ridefinizione del lusso in acqua. 2026 GTX Limited unisce 325 hp, funzioni intelligenti e comfort di alto livello per offrire un\'esperienza di PWC touring di altissimo livello.',
    price: '30.999',
    category: 'turismo',
    image: getImagePath('GTX Limited')
  },
  {
    id: 'explorer-pro-2026',
    name: 'Explorer Pro',
    year: '2026',
    description: 'La prima PWC del settore veramente creata per l\'avventura. Piattaforma incredibilmente stabile e possibilità di scegliere tra un motore da 170 o 230 hp con capacità di lunga percorrenza. Le caratteristiche pensate per l\'avventura sono create attorno a comodità, comfort e tranquillità per ogni spedizione.',
    price: '24.899',
    category: 'turismo',
    image: getImagePath('Explorer Pro')
  },
  // Prestazioni
  {
    id: 'gtr-2026',
    name: 'GTR',
    year: '2026',
    description: 'Potenza straordinaria e valore eccezionale. La 2026 GTR offre un\'accelerazione sovralimentata e un controllo divertente a un prezzo che rende la guida performante più accessibile che mai.',
    price: '19.499',
    category: 'prestazioni',
    image: getImagePath('GTR')
  },
  {
    id: 'rxt-x-2026',
    name: 'RXT-X',
    year: '2026',
    description: 'RXT-X 2026 unisce prestazioni adrenaliniche alla sicurezza e alla praticità di tutti i giorni. È la migliore moto d\'acqua offshore per piloti che desiderano velocità e controllo in tutte le condizioni',
    price: '29.499',
    category: 'prestazioni',
    image: getImagePath('RXT-X')
  },
  {
    id: 'rxp-x-2026',
    name: 'RXP-X',
    year: '2026',
    description: 'Creata per i piloti alla ricerca delle massime prestazioni. RXP-X 2026 offre potenza collaudata in gara e controllo precisissimo per superare i tuoi limiti a ogni uscita.',
    price: '27.199',
    category: 'prestazioni',
    image: getImagePath('RXP-X')
  },
  {
    id: 'gtr-x-2026',
    name: 'GTR-X',
    year: '2026',
    description: 'GTR-X 300 è una vera e propria PWC ad alte prestazioni creata per i piloti che desiderano potenza, precisione e controllo. Con 300 hp di potenza Rotax sovralimentata e una posizione di guida da competizione, trasforma ogni uscita in un\'esperienza adrenalinica.',
    price: '23.599',
    category: 'prestazioni',
    image: getImagePath('GTR-X')
  },
  // Sport da traino
  {
    id: 'wake-pro-2026',
    name: 'Wake Pro',
    year: '2026',
    description: 'Il modello Wake Pro offre la guida più stabile del settore per gli sport da traino. Con la massima potenza e spazio extra per preparare la tua uscita successiva, questo modello garantisce un\'esperienza senza pari per gli sport acquatici.',
    price: '24.799',
    category: 'sport-da-traino',
    image: getImagePath('Wake Pro')
  },
  // Pesca sportiva
  {
    id: 'fishpro-sport-2026',
    name: 'FishPro Sport',
    year: '2026',
    description: 'Una combinazione di entusiasmo, versatilità e passione in un unico pacchetto. Esplora posti prima irraggiungibili per le tradizionali imbarcazioni da pesca e goditi l\'adattabilità di una delle imbarcazioni più versatili al mondo.',
    price: '22.299',
    category: 'pesca-sportiva',
    image: getImagePath('FishPro Sport')
  }
];

const categoryIds = ['divertimento', 'turismo', 'prestazioni', 'sport-da-traino', 'pesca-sportiva'];

export default function Vendita({ onNavigate }: VenditaProps) {
  const { language, t } = useLanguage();
  
  // Categorie tradotte
  const venditaCategories = categoryIds.map(id => ({
    id,
    label: venditaCategoryLabels[id]?.[language] || id
  }));
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('divertimento');

  const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.category === categoryId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Rileva quale categoria è visibile durante lo scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset per il menu sticky

      for (let i = venditaCategories.length - 1; i >= 0; i--) {
        const element = document.getElementById(`category-${venditaCategories[i].id}`);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveCategory(venditaCategories[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chiama una volta all'inizio per impostare la categoria iniziale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Vendita Moto d'Acqua Sea-Doo e Barche | Dealer Autorizzato Lago di Garda"
        description="Dealer autorizzato Sea-Doo sul Lago di Garda. Vendita moto d'acqua nuove: Spark, GTI, GTX, GTR, RXP-X, RXT-X, Wake Pro, FishPro. Barche Joker Boat e Saver. Finanziamenti, permute e garanzia. Consegna a Peschiera, Desenzano, Sirmione, Lazise e tutto il lago."
        keywords="vendita moto d'acqua Sea Doo, dealer Sea Doo Italia, comprare jet ski, Spark Sea Doo prezzo, GTI Sea Doo, GTX Limited, RXP-X 325, vendita barche nuove, Joker Boat, Saver, PWC vendita, moto d'acqua prezzi"
        url="/vendita"
      />
      <div className="min-h-screen">
      <PageHero
        eyebrow="Sea-Doo 2026"
        title={t('vendita_title')}
        subtitle={t('vendita_subtitle')}
        image="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        {/* Menu delle categorie - scrollabile su mobile */}
        <div className="sticky top-16 md:top-[72px] z-40 mb-8 sm:mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="bg-sand/80 backdrop-blur-xl backdrop-saturate-150">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex px-4 sm:px-6 lg:px-8 py-3 gap-2 min-w-max sm:min-w-0">
                {venditaCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    aria-current={activeCategory === category.id ? 'true' : undefined}
                    className={`px-4 py-2 text-sm font-semibold transition-colors duration-150 whitespace-nowrap rounded-full ${
                      activeCategory === category.id
                        ? 'bg-ink text-white'
                        : 'bg-white shadow-line text-ink/70 hover:text-ink'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.id);
          const categoryTrans = getCategoryTranslation(category.id, language);
          
          return (
            <div key={category.id} id={`category-${category.id}`} className="mb-14 md:mb-20 scroll-mt-32 md:scroll-mt-36">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{categoryTrans.name}</h2>
              <p className="mt-3 mb-8 text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl">
                {categoryTrans.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categoryProducts.map((product) => {
                  const productTrans = getProductTranslation(product.id, language);
                  
                  return (
                    <div
                      key={product.id}
                      className="group surface surface-interactive bg-white rounded-[28px] p-2 flex flex-col cursor-pointer"
                      onClick={() => {
                        const seaDooLink = getSeaDooLink(product.name);
                        window.open(seaDooLink, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <div className="h-56 sm:h-60 rounded-[20px] bg-gradient-to-b from-sand to-sand-deep overflow-hidden flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={`${productTrans.name} ${product.year}`}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800';
                          }}
                        />
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <div className="mb-3">
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-ink">{productTrans.name}</h3>
                            <span className="text-sm text-ink-muted tabular-nums">{product.year}</span>
                          </div>
                          <div className="mt-1 flex items-center justify-between gap-3">
                            <span className="text-ink tabular-nums"><span className="text-ink-muted">{t('common_from')}</span> <span className="font-semibold">{product.price} €</span></span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProduct(product);
                                setIsModalOpen(true);
                              }}
                              className="min-h-0 px-3 py-1.5 rounded-full bg-ink/[0.05] text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors duration-150"
                            >
                              {t('vendita_view_details')}
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-ink-muted leading-relaxed flex-grow line-clamp-3">
                          {productTrans.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="relative overflow-hidden bg-ink rounded-[28px] px-6 py-10 sm:p-14 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative max-w-xl">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">{t('vendita_not_found_title')}</h3>
            <p className="mt-3 text-white/70">{t('vendita_not_found_desc')}</p>
          </div>
          <button
            onClick={() => onNavigate('contatti')}
            className="relative self-start md:self-auto px-6 py-3.5 rounded-full bg-primary text-ink font-semibold hover:bg-primary-light transition-colors duration-150"
          >
            {t('nav_contatti')}
          </button>
        </div>
      </div>
      
      {selectedProduct && (
        <ProductModal
          product={{
            id: selectedProduct.id,
            name: `${selectedProduct.name} ${selectedProduct.year}`,
            description: selectedProduct.description,
            price: parseFloat(selectedProduct.price.replace('.', '')),
            image_url: selectedProduct.image,
            category: selectedProduct.category,
            in_stock: true
          }}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
    </>
  );
}
