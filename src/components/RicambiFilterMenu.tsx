import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  category: string;
  [key: string]: any;
};

type RicambiFilterMenuProps = {
  products: Product[];
  onFilterChange: (category: string | null, brand: string | null) => void;
  onCategorySelect?: (category: string | null, brands: string[]) => void;
};

// Lista dei brand comuni da cercare nei nomi (ordinati dalla stringa più lunga alla più corta)
const BRAND_KEYWORDS = [
  'SEA DOO',
  'SEA-DOO',
  'MERCURISER',
  'EVINRUDE',
  'KAWASAKI',
  'YAMAHA',
  'JOHNSON',
  'TOHATSU',
  'CHAMPION',
  'MERCURY',
  'CUMMINS',
  'YANMAR',
  'SUZUKI',
  'RECMAR',
  'HONDA',
  'VOLVO',
  'BRP',
  'NGK',
];

// Funzione per estrarre i brand dal nome del prodotto
const extractBrands = (productName: string): string[] => {
  const upperName = productName.toUpperCase();
  const foundBrands: string[] = [];

  BRAND_KEYWORDS.forEach((brand) => {
    if (upperName.includes(brand)) {
      // Normalizza i brand (es. SEA DOO e SEA-DOO sono lo stesso)
      const normalizedBrand = brand === 'SEA-DOO' ? 'SEA DOO' : brand;
      if (!foundBrands.includes(normalizedBrand)) {
        foundBrands.push(normalizedBrand);
      }
    }
  });

  return foundBrands;
};

export default function RicambiFilterMenu({ products, onFilterChange, onCategorySelect }: RicambiFilterMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showBrands, setShowBrands] = useState(false);

  // Estrai categorie uniche e rimuovi prefisso "Ricambi - "
  const getDisplayCategory = (category: string) => {
    if (!category) return 'Altri';
    if (category.startsWith('Ricambi - ')) {
      return category.replace('Ricambi - ', '');
    }
    if (category === 'Ricambi') {
      return 'Altri';
    }
    return category;
  };

  const categories = Array.from(
    new Set(products.map((p) => getDisplayCategory(p.category || 'Altri')))
  ).sort();

  // Estrai brand per categoria selezionata
  const getBrandsForCategory = (category: string | null): string[] => {
    if (!category) return [];
    
    const categoryProducts = products.filter(
      (p) => getDisplayCategory(p.category || 'Altri') === category
    );
    
    const brandSet = new Set<string>();
    categoryProducts.forEach((product) => {
      const brands = extractBrands(product.name);
      brands.forEach((brand) => brandSet.add(brand));
    });
    
    return Array.from(brandSet).sort();
  };

  const availableBrands = getBrandsForCategory(selectedCategory);

  // Notifica i cambiamenti al parent
  useEffect(() => {
    // Converti la categoria display in categoria originale per il filtro
    const originalCategory = selectedCategory 
      ? products.find(p => getDisplayCategory(p.category || 'Altri') === selectedCategory)?.category || null
      : null;
    onFilterChange(originalCategory, null);
    
    // Notifica i brand disponibili quando cambia categoria
    if (onCategorySelect && selectedCategory) {
      onCategorySelect(selectedCategory, availableBrands);
    }
  }, [selectedCategory, onFilterChange, products, availableBrands, onCategorySelect]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowBrands(true); // Mostra i brand quando selezioni una categoria
  };

  const handleBrandSelect = (brand: string) => {
    // Converti la categoria display in categoria originale per il filtro
    const originalCategory = selectedCategory 
      ? products.find(p => getDisplayCategory(p.category || 'Altri') === selectedCategory)?.category || null
      : null;
    onFilterChange(originalCategory, brand);
  };

  const handleBack = () => {
    setShowBrands(false);
    setSelectedCategory(null);
    onFilterChange(null, null);
    if (onCategorySelect) {
      onCategorySelect(null, []);
    }
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setShowBrands(false);
    onFilterChange(null, null);
    if (onCategorySelect) {
      onCategorySelect(null, []);
    }
  };

  return (
    <div className="w-full md:w-64 lg:w-72 bg-white rounded-lg shadow-md border-2 border-gray-200 h-fit sticky top-24">
      {/* Header */}
      <div className="bg-[#00D9CC] text-[#0E0E0E] p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          {showBrands ? (
            <>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  className="p-1 hover:bg-[#00D9CC]/20 rounded transition-colors"
                  aria-label="Torna indietro"
                >
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
                <h2 className="text-lg font-bold">Seleziona Brand</h2>
              </div>
              <button
                onClick={handleReset}
                className="text-sm font-medium hover:underline"
                aria-label="Reset filtri"
              >
                Reset
              </button>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold">Filtri</h2>
              {selectedCategory && (
                <button
                  onClick={handleReset}
                  className="text-sm font-medium hover:underline"
                  aria-label="Reset filtri"
                >
                  Reset
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="p-4 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {showBrands ? (
          /* Sezione Brand - Mostrata quando una categoria è selezionata */
          <div>
            <div className="mb-3">
              <p className="text-sm text-gray-600 mb-1">Categoria selezionata:</p>
              <p className="text-base font-semibold text-[#0E0E0E]">{selectedCategory}</p>
            </div>
            <h3 className="text-base font-semibold text-[#0E0E0E] mb-3">
              Seleziona un Brand
            </h3>
            {availableBrands.length > 0 ? (
              <div className="space-y-2">
                {availableBrands.map((brand) => {
                  return (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className="w-full text-left px-3 py-2 rounded-lg transition-all text-sm bg-gray-50 hover:bg-[#00D9CC]/30 text-[#0E0E0E] hover:font-semibold"
                    >
                      {brand}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-[#6B6F72] text-xs">
                  Nessun brand disponibile per questa categoria
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Sezione Categorie - Vista iniziale */
          <div>
            <h3 className="text-base font-semibold text-[#0E0E0E] mb-3">
              Tipo di Ricambio
            </h3>
            <div className="space-y-2">
              {categories.map((category) => {
                return (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between text-sm bg-gray-50 hover:bg-[#00D9CC]/30 text-[#0E0E0E]"
                  >
                    <span>{category}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
