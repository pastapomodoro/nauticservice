import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
};

const BASE_KEYWORDS = 'Lago di Garda, Peschiera del Garda, Desenzano, Sirmione, Lazise, Bardolino, Garda, Salò, Riva del Garda, Castelnuovo del Garda, Verona, Brescia';

export default function SEO({
  title = 'Nautic Service SRL | Riparazione Moto d\'Acqua, Vendita Barche e Ricambi Nautici - Lago di Garda',
  description = 'Nautic Service SRL: riparazione e assistenza moto d\'acqua Sea Doo, vendita barche nuove e usate, ricambi originali, accessori nautici. Officina mobile su tutto il lago. Dal 2003.',
  keywords = 'riparazione moto d\'acqua, assistenza Sea Doo, vendita barche, ricambi nautici, officina nautica, jet ski, noleggio moto d\'acqua, manutenzione barche',
  image = 'https://www.nautic-service.it/nautic.png',
  url = 'https://www.nautic-service.it',
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes('Nautic Service') ? title.replace('Nautic Service', 'Nautic Service SRL').replace('SRL SRL', 'SRL') : `${title} | Nautic Service SRL`;
  const fullUrl = url.startsWith('http') ? url : `https://www.nautic-service.it${url}`;
  const fullImage = image.startsWith('http') ? image : `https://www.nautic-service.it${image}`;
  const fullKeywords = `${keywords}, ${BASE_KEYWORDS}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="Nautic Service SRL" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
