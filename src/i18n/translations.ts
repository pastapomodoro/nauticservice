export type Language = 'it' | 'en' | 'de';

export type TranslationKeys = {
  // Navbar
  nav_home: string;
  nav_vendita: string;
  nav_usato: string;
  nav_ricambi: string;
  nav_news: string;
  nav_contatti: string;
  nav_chi_siamo: string;
  nav_noleggio: string;
  nav_accessori: string;
  nav_language: string;
  
  // Home
  home_discover_products: string;
  home_our_services: string;
  home_vendita_title: string;
  home_vendita_desc: string;
  home_ricambi_title: string;
  home_ricambi_desc: string;
  home_usato_title: string;
  home_usato_desc: string;
  home_noleggio_title: string;
  home_noleggio_desc: string;
  home_about_1: string;
  home_about_2: string;
  home_about_3: string;
  home_about_4: string;
  home_about_5: string;
  
  // Vendita
  vendita_title: string;
  vendita_subtitle: string;
  vendita_category_fun: string;
  vendita_category_fun_desc: string;
  vendita_category_touring: string;
  vendita_category_touring_desc: string;
  vendita_category_performance: string;
  vendita_category_performance_desc: string;
  vendita_category_tow: string;
  vendita_category_tow_desc: string;
  vendita_category_fishing: string;
  vendita_category_fishing_desc: string;
  vendita_category_entry: string;
  vendita_category_entry_desc: string;
  vendita_request_quote: string;
  vendita_view_details: string;
  vendita_not_found_title: string;
  vendita_not_found_desc: string;
  
  // Usato
  usato_title: string;
  usato_subtitle: string;
  usato_condition: string;
  usato_year: string;
  usato_contact_whatsapp: string;
  
  // Ricambi
  ricambi_title: string;
  ricambi_subtitle: string;
  ricambi_search: string;
  ricambi_filters: string;
  ricambi_all_categories: string;
  ricambi_all_brands: string;
  ricambi_in_stock: string;
  ricambi_out_of_stock: string;
  ricambi_add_to_cart: string;
  ricambi_no_results: string;
  
  // News
  news_title: string;
  news_subtitle: string;
  news_read_more: string;
  news_back: string;
  news_published: string;
  
  // Contatti
  contatti_title: string;
  contatti_subtitle: string;
  contatti_contact_us: string;
  contatti_contact_desc: string;
  contatti_sede: string;
  contatti_referente: string;
  contatti_email: string;
  contatti_telefono: string;
  contatti_orari: string;
  contatti_orari_feriali: string;
  contatti_orari_domenica: string;
  contatti_whatsapp_title: string;
  contatti_whatsapp_desc: string;
  contatti_social_title: string;
  contatti_info: string;
  contatti_preventivo: string;
  contatti_fisso: string;
  
  // Noleggio
  noleggio_title: string;
  noleggio_subtitle: string;
  noleggio_main_title: string;
  noleggio_desc_1: string;
  noleggio_desc_2: string;
  noleggio_cta: string;
  
  // Chi Siamo
  chi_siamo_title: string;
  chi_siamo_subtitle: string;
  chi_siamo_storia_title: string;
  chi_siamo_storia_1: string;
  chi_siamo_storia_2: string;
  chi_siamo_mission_title: string;
  chi_siamo_mission_desc: string;
  chi_siamo_value_quality: string;
  chi_siamo_value_quality_desc: string;
  chi_siamo_value_team: string;
  chi_siamo_value_team_desc: string;
  chi_siamo_value_goal: string;
  chi_siamo_value_goal_desc: string;
  chi_siamo_value_passion: string;
  chi_siamo_value_passion_desc: string;
  
  // Footer
  footer_desc: string;
  footer_contatti: string;
  footer_servizi: string;
  footer_orari: string;
  footer_privacy: string;
  footer_rights: string;
  footer_vendita_barche: string;
  footer_ricambi: string;
  footer_manutenzione: string;
  
  // Accessori
  accessori_title: string;
  accessori_subtitle: string;
  
  // Common
  common_price: string;
  common_from: string;
  common_close: string;
  common_loading: string;
  common_error: string;
  product_description: string;
};

export const translations: Record<Language, TranslationKeys> = {
  it: {
    // Navbar
    nav_home: 'Home',
    nav_vendita: 'Vendita',
    nav_usato: 'Usato',
    nav_ricambi: 'Ricambi',
    nav_news: 'News',
    nav_contatti: 'Contatti',
    nav_chi_siamo: 'Chi Siamo',
    nav_noleggio: 'Noleggio',
    nav_accessori: 'Accessori',
    nav_language: 'Lingua',
    
    // Home
    home_discover_products: 'Scopri i Nostri Prodotti',
    home_our_services: 'I Nostri Servizi',
    home_vendita_title: 'Vendita',
    home_vendita_desc: 'Ampia selezione di barche nuove e moto d\'acqua delle migliori marche.',
    home_ricambi_title: 'Ricambi',
    home_ricambi_desc: 'Ricambi originali e di qualità per la tua imbarcazione.',
    home_usato_title: 'Usato',
    home_usato_desc: 'Trattiamo anche barche e moto d\'acqua usate, garantite e controllate.',
    home_noleggio_title: 'Noleggi',
    home_noleggio_desc: 'Noleggio di barche e moto d\'acqua per vivere il lago di Garda.',
    home_about_1: 'La Nautic Service nasce nel 2003 e ha come obiettivo principale la fornitura di servizi Nautici, riparazione e vendita di Natanti, accessori, ricambi delle migliori marche.',
    home_about_2: 'La nostra azienda dispone di una rilevante struttura operativa, un furgone come officina mobile per fare assistenza dovunque, con sedi dotate di attrezzature specifiche. Si avvale di elevate risorse tecnico-strumentali e occupa un organico medio di 2 unità altamente specializzate che le consente di ottenere risultati di riparazione superiori alla media delle dirette concorrenti, con quotazioni competitive ed opera su tutto il territorio del Lago di Garda.',
    home_about_3: 'La caratteristica principale che ci contraddistingue è sicuramente l\'affidabilità e la correttezza nello svolgere la nostra attività. La qualità è garantita con l\'impiego di soluzioni e prodotti all\'avanguardia che consentono di ottenere lavori sicuri e funzionali.',
    home_about_4: 'Alla competenza professionale si aggiunge un\'adeguata conoscenza ed esperienza in tema normativo, garantendo i più elevati standard di qualità richiesti nella riparazione di ogni tipo di battello e motori.',
    home_about_5: 'Rappresentiamo i marchi principali del settore: Evinrude, Selva, Sea Doo, Joker Boat e Saver.',
    
    // Vendita
    vendita_title: 'Vendita',
    vendita_subtitle: 'Scopri la nostra gamma di moto d\'acqua Sea-Doo',
    vendita_category_fun: 'Divertimento',
    vendita_category_fun_desc: 'PWC versatili ed efficienti, altamente adattabili a qualsiasi avventura. Il modo perfetto per far divertire tutto l\'equipaggio con una serie di intrattenimenti in acqua. Tantissimo spazio per riporre i bagagli e accessoriarsi facilmente per gli sport da traino e per il divertimento di tutto il giorno.',
    vendita_category_touring: 'Turismo',
    vendita_category_touring_desc: 'Espandi i tuoi orizzonti. Le moto d\'acqua Sea-Doo Touring offrono una stabilità leader del settore abbinata a comfort e comodità. È l\'imbarcazione da crociera per 2-3 persone, ideale per le avventure di tutto il giorno.',
    vendita_category_performance: 'Prestazioni',
    vendita_category_performance_desc: 'Velocità ed emozioni pure. Le moto d\'acqua Sea-Doo Performance sono progettate per chi cerca il massimo delle prestazioni e dell\'adrenalina sull\'acqua.',
    vendita_category_tow: 'Sport da Traino',
    vendita_category_tow_desc: 'Perfette per gli sport acquatici. Le moto d\'acqua Sea-Doo Tow Sports sono progettate per il wakeboard, sci nautico e tutte le attività di traino.',
    vendita_category_fishing: 'Pesca',
    vendita_category_fishing_desc: 'Per gli amanti della pesca. Le moto d\'acqua Sea-Doo Fishing sono equipaggiate con tutto il necessario per una giornata di pesca perfetta.',
    vendita_category_entry: 'Entry Level',
    vendita_category_entry_desc: 'Il modo più accessibile per iniziare. Le moto d\'acqua Sea-Doo Entry Level offrono divertimento e facilità d\'uso a un prezzo competitivo.',
    vendita_request_quote: 'Richiedi Preventivo',
    vendita_view_details: 'Vedi Dettagli',
    vendita_not_found_title: 'Non Trovi Quello che Cerchi?',
    vendita_not_found_desc: 'Contattaci per una consulenza personalizzata o per ordini speciali',
    
    // Usato
    usato_title: 'Usato',
    usato_subtitle: 'Moto d\'acqua e barche usate garantite',
    usato_condition: 'Condizione',
    usato_year: 'Anno',
    usato_contact_whatsapp: 'Contatta su WhatsApp',
    
    // Ricambi
    ricambi_title: 'Ricambi',
    ricambi_subtitle: 'Ricambi originali per la tua imbarcazione',
    ricambi_search: 'Cerca ricambi...',
    ricambi_filters: 'Filtri',
    ricambi_all_categories: 'Tutte le categorie',
    ricambi_all_brands: 'Tutti i brand',
    ricambi_in_stock: 'Disponibile',
    ricambi_out_of_stock: 'Non disponibile',
    ricambi_add_to_cart: 'Aggiungi al carrello',
    ricambi_no_results: 'Nessun risultato trovato',
    
    // News
    news_title: 'News',
    news_subtitle: 'Le ultime novità dal mondo nautico',
    news_read_more: 'Leggi di più',
    news_back: 'Torna alle news',
    news_published: 'Pubblicato il',
    
    // Contatti
    contatti_title: 'Contatti',
    contatti_subtitle: 'Siamo qui per aiutarti',
    contatti_contact_us: 'Contattaci',
    contatti_contact_desc: 'Hai domande sui nostri prodotti o servizi? Hai bisogno di assistenza tecnica? Non esitare a contattarci. Il nostro team è sempre pronto ad aiutarti con professionalità e competenza.',
    contatti_sede: 'Sede',
    contatti_referente: 'Referente',
    contatti_email: 'Email',
    contatti_telefono: 'Telefono',
    contatti_orari: 'Orari di Apertura',
    contatti_orari_feriali: 'Lunedì – Sabato: 8.30 – 12.30 e 14 – 18',
    contatti_orari_domenica: 'Domenica: Chiuso',
    contatti_whatsapp_title: 'Contattaci su WhatsApp',
    contatti_whatsapp_desc: 'Scrivici direttamente su WhatsApp per una risposta rapida',
    contatti_social_title: 'Seguici sui Social',
    contatti_info: 'Informazioni',
    contatti_preventivo: 'Richiedi Preventivo',
    contatti_fisso: 'Fisso',
    
    // Noleggio
    noleggio_title: 'Noleggio',
    noleggio_subtitle: 'Vivi il mare con le nostre imbarcazioni a noleggio',
    noleggio_main_title: 'Noleggio Barche Lago di Garda',
    noleggio_desc_1: 'Vuoi vivere un\'esperienza indimenticabile sul Lago di Garda? Noleggia una delle nostre moto d\'acqua o barche e scopri le bellezze del lago in totale libertà.',
    noleggio_desc_2: 'Offriamo noleggio giornaliero e settimanale con assistenza completa. Tutte le nostre imbarcazioni sono regolarmente manutenute e pronte per offrirti il massimo del divertimento in sicurezza.',
    noleggio_cta: 'Clicca qui per noleggiare',
    
    // Chi Siamo
    chi_siamo_title: 'Chi Siamo',
    chi_siamo_subtitle: 'La nostra storia, i nostri valori',
    chi_siamo_storia_title: 'La Nostra Storia',
    chi_siamo_storia_1: 'Nautic Service nasce nel 2010 dalla passione per il mare e dalla volontà di offrire un servizio completo e professionale nel settore nautico. Quello che è iniziato come un piccolo punto vendita è cresciuto fino a diventare un punto di riferimento nella zona.',
    chi_siamo_storia_2: 'Oggi siamo orgogliosi di offrire una gamma completa di servizi: dalla vendita di imbarcazioni nuove e usate, alla fornitura di ricambi originali, fino alla manutenzione e riparazione professionale.',
    chi_siamo_mission_title: 'La Nostra Missione',
    chi_siamo_mission_desc: 'Offrire ai nostri clienti un servizio eccellente, prodotti di qualità e competenza tecnica per rendere ogni esperienza in mare indimenticabile.',
    chi_siamo_value_quality: 'Qualità',
    chi_siamo_value_quality_desc: 'Solo prodotti delle migliori marche',
    chi_siamo_value_team: 'Team Esperto',
    chi_siamo_value_team_desc: 'Personale qualificato e appassionato',
    chi_siamo_value_goal: 'Obiettivo Cliente',
    chi_siamo_value_goal_desc: 'Le tue esigenze sono la nostra priorità',
    chi_siamo_value_passion: 'Passione',
    chi_siamo_value_passion_desc: 'Amiamo quello che facciamo',
    
    // Footer
    footer_desc: 'Il tuo partner di fiducia per barche, moto d\'acqua e servizi nautici.',
    footer_contatti: 'Contatti',
    footer_servizi: 'Servizi',
    footer_orari: 'Orari',
    footer_privacy: 'Privacy Policy',
    footer_rights: 'Tutti i diritti riservati.',
    footer_vendita_barche: 'Vendita Barche',
    footer_ricambi: 'Ricambi',
    footer_manutenzione: 'Manutenzione',
    
    // Accessori
    accessori_title: 'Accessori',
    accessori_subtitle: 'Accessori nautici per ogni esigenza',
    
    // Common
    common_price: 'Prezzo',
    common_from: 'Da',
    common_close: 'Chiudi',
    common_loading: 'Caricamento...',
    common_error: 'Errore',
    product_description: 'Descrizione',
  },
  
  en: {
    // Navbar
    nav_home: 'Home',
    nav_vendita: 'Sales',
    nav_usato: 'Used',
    nav_ricambi: 'Spare Parts',
    nav_news: 'News',
    nav_contatti: 'Contact',
    nav_chi_siamo: 'About Us',
    nav_noleggio: 'Rental',
    nav_accessori: 'Accessories',
    nav_language: 'Language',
    
    // Home
    home_discover_products: 'Discover Our Products',
    home_our_services: 'Our Services',
    home_vendita_title: 'Sales',
    home_vendita_desc: 'Wide selection of new boats and jet skis from the best brands.',
    home_ricambi_title: 'Spare Parts',
    home_ricambi_desc: 'Original and quality spare parts for your boat.',
    home_usato_title: 'Used',
    home_usato_desc: 'We also deal with used boats and jet skis, guaranteed and inspected.',
    home_noleggio_title: 'Rental',
    home_noleggio_desc: 'Boat and jet ski rental to experience Lake Garda.',
    home_about_1: 'Nautic Service was founded in 2003 with the main objective of providing nautical services, repair and sale of boats, accessories, and spare parts from the best brands.',
    home_about_2: 'Our company has a significant operational structure, a van as a mobile workshop to provide assistance anywhere, with facilities equipped with specific tools. It uses high technical-instrumental resources and employs an average of 2 highly specialized units that allow it to achieve repair results above the average of direct competitors, with competitive prices and operates throughout the Lake Garda area.',
    home_about_3: 'The main characteristic that distinguishes us is certainly reliability and fairness in carrying out our business. Quality is guaranteed with the use of cutting-edge solutions and products that allow us to obtain safe and functional work.',
    home_about_4: 'In addition to professional competence, there is adequate knowledge and experience in regulatory matters, guaranteeing the highest quality standards required in the repair of all types of boats and engines.',
    home_about_5: 'We represent the main brands in the sector: Evinrude, Selva, Sea Doo, Joker Boat and Saver.',
    
    // Vendita
    vendita_title: 'Sales',
    vendita_subtitle: 'Discover our range of Sea-Doo jet skis',
    vendita_category_fun: 'Fun',
    vendita_category_fun_desc: 'Versatile and efficient PWCs, highly adaptable to any adventure. The perfect way to entertain the whole crew with a range of water activities. Plenty of storage space and easy to accessorize for tow sports and all-day fun.',
    vendita_category_touring: 'Touring',
    vendita_category_touring_desc: 'Expand your horizons. Sea-Doo Touring jet skis offer industry-leading stability combined with comfort and convenience. It\'s the cruising vessel for 2-3 people, ideal for all-day adventures.',
    vendita_category_performance: 'Performance',
    vendita_category_performance_desc: 'Pure speed and thrills. Sea-Doo Performance jet skis are designed for those seeking maximum performance and adrenaline on the water.',
    vendita_category_tow: 'Tow Sports',
    vendita_category_tow_desc: 'Perfect for water sports. Sea-Doo Tow Sports jet skis are designed for wakeboarding, water skiing and all towing activities.',
    vendita_category_fishing: 'Fishing',
    vendita_category_fishing_desc: 'For fishing enthusiasts. Sea-Doo Fishing jet skis are equipped with everything needed for a perfect fishing day.',
    vendita_category_entry: 'Entry Level',
    vendita_category_entry_desc: 'The most accessible way to start. Sea-Doo Entry Level jet skis offer fun and ease of use at a competitive price.',
    vendita_request_quote: 'Request Quote',
    vendita_view_details: 'View Details',
    vendita_not_found_title: 'Can\'t Find What You\'re Looking For?',
    vendita_not_found_desc: 'Contact us for personalized advice or special orders',
    
    // Usato
    usato_title: 'Used',
    usato_subtitle: 'Guaranteed used jet skis and boats',
    usato_condition: 'Condition',
    usato_year: 'Year',
    usato_contact_whatsapp: 'Contact on WhatsApp',
    
    // Ricambi
    ricambi_title: 'Spare Parts',
    ricambi_subtitle: 'Original spare parts for your boat',
    ricambi_search: 'Search spare parts...',
    ricambi_filters: 'Filters',
    ricambi_all_categories: 'All categories',
    ricambi_all_brands: 'All brands',
    ricambi_in_stock: 'In Stock',
    ricambi_out_of_stock: 'Out of Stock',
    ricambi_add_to_cart: 'Add to Cart',
    ricambi_no_results: 'No results found',
    
    // News
    news_title: 'News',
    news_subtitle: 'Latest news from the nautical world',
    news_read_more: 'Read more',
    news_back: 'Back to news',
    news_published: 'Published on',
    
    // Contatti
    contatti_title: 'Contact',
    contatti_subtitle: 'We are here to help you',
    contatti_contact_us: 'Contact Us',
    contatti_contact_desc: 'Do you have questions about our products or services? Do you need technical assistance? Don\'t hesitate to contact us. Our team is always ready to help you with professionalism and competence.',
    contatti_sede: 'Location',
    contatti_referente: 'Contact Person',
    contatti_email: 'Email',
    contatti_telefono: 'Phone',
    contatti_orari: 'Opening Hours',
    contatti_orari_feriali: 'Monday – Saturday: 8.30 – 12.30 and 14 – 18',
    contatti_orari_domenica: 'Sunday: Closed',
    contatti_whatsapp_title: 'Contact us on WhatsApp',
    contatti_whatsapp_desc: 'Write to us directly on WhatsApp for a quick response',
    contatti_social_title: 'Follow us on Social Media',
    contatti_info: 'Information',
    contatti_preventivo: 'Request Quote',
    contatti_fisso: 'Landline',
    
    // Noleggio
    noleggio_title: 'Rental',
    noleggio_subtitle: 'Experience the sea with our rental boats',
    noleggio_main_title: 'Boat Rental Lake Garda',
    noleggio_desc_1: 'Do you want to have an unforgettable experience on Lake Garda? Rent one of our jet skis or boats and discover the beauties of the lake in complete freedom.',
    noleggio_desc_2: 'We offer daily and weekly rentals with full assistance. All our boats are regularly maintained and ready to offer you maximum fun in safety.',
    noleggio_cta: 'Click here to rent',
    
    // Chi Siamo
    chi_siamo_title: 'About Us',
    chi_siamo_subtitle: 'Our history, our values',
    chi_siamo_storia_title: 'Our History',
    chi_siamo_storia_1: 'Nautic Service was born in 2010 from a passion for the sea and the desire to offer a complete and professional service in the nautical sector. What started as a small retail outlet has grown to become a reference point in the area.',
    chi_siamo_storia_2: 'Today we are proud to offer a complete range of services: from the sale of new and used boats, to the supply of original spare parts, to professional maintenance and repair.',
    chi_siamo_mission_title: 'Our Mission',
    chi_siamo_mission_desc: 'To offer our customers excellent service, quality products and technical expertise to make every sea experience unforgettable.',
    chi_siamo_value_quality: 'Quality',
    chi_siamo_value_quality_desc: 'Only products from the best brands',
    chi_siamo_value_team: 'Expert Team',
    chi_siamo_value_team_desc: 'Qualified and passionate staff',
    chi_siamo_value_goal: 'Customer Focus',
    chi_siamo_value_goal_desc: 'Your needs are our priority',
    chi_siamo_value_passion: 'Passion',
    chi_siamo_value_passion_desc: 'We love what we do',
    
    // Footer
    footer_desc: 'Your trusted partner for boats, jet skis and nautical services.',
    footer_contatti: 'Contact',
    footer_servizi: 'Services',
    footer_orari: 'Hours',
    footer_privacy: 'Privacy Policy',
    footer_rights: 'All rights reserved.',
    footer_vendita_barche: 'Boat Sales',
    footer_ricambi: 'Spare Parts',
    footer_manutenzione: 'Maintenance',
    
    // Accessori
    accessori_title: 'Accessories',
    accessori_subtitle: 'Nautical accessories for every need',
    
    // Common
    common_price: 'Price',
    common_from: 'From',
    common_close: 'Close',
    common_loading: 'Loading...',
    common_error: 'Error',
    product_description: 'Description',
  },
  
  de: {
    // Navbar
    nav_home: 'Startseite',
    nav_vendita: 'Verkauf',
    nav_usato: 'Gebraucht',
    nav_ricambi: 'Ersatzteile',
    nav_news: 'Neuigkeiten',
    nav_contatti: 'Kontakt',
    nav_chi_siamo: 'Über Uns',
    nav_noleggio: 'Verleih',
    nav_accessori: 'Zubehör',
    nav_language: 'Sprache',
    
    // Home
    home_discover_products: 'Entdecken Sie unsere Produkte',
    home_our_services: 'Unsere Dienstleistungen',
    home_vendita_title: 'Verkauf',
    home_vendita_desc: 'Große Auswahl an neuen Booten und Jetskis der besten Marken.',
    home_ricambi_title: 'Ersatzteile',
    home_ricambi_desc: 'Original- und Qualitätsersatzteile für Ihr Boot.',
    home_usato_title: 'Gebraucht',
    home_usato_desc: 'Wir handeln auch mit gebrauchten Booten und Jetskis, garantiert und geprüft.',
    home_noleggio_title: 'Verleih',
    home_noleggio_desc: 'Boot- und Jetski-Verleih, um den Gardasee zu erleben.',
    home_about_1: 'Nautic Service wurde 2003 mit dem Hauptziel gegründet, nautische Dienstleistungen, Reparatur und Verkauf von Booten, Zubehör und Ersatzteilen der besten Marken anzubieten.',
    home_about_2: 'Unser Unternehmen verfügt über eine bedeutende Betriebsstruktur, einen Lieferwagen als mobile Werkstatt für Hilfe überall, mit Einrichtungen, die mit spezifischen Werkzeugen ausgestattet sind. Es nutzt hohe technisch-instrumentelle Ressourcen und beschäftigt durchschnittlich 2 hochspezialisierte Einheiten, die es ermöglichen, Reparaturergebnisse über dem Durchschnitt der direkten Wettbewerber zu erzielen, mit wettbewerbsfähigen Preisen und ist im gesamten Gardasee-Gebiet tätig.',
    home_about_3: 'Das Hauptmerkmal, das uns auszeichnet, ist sicherlich Zuverlässigkeit und Fairness bei der Ausübung unserer Geschäftstätigkeit. Qualität wird durch den Einsatz modernster Lösungen und Produkte garantiert, die sichere und funktionale Arbeit ermöglichen.',
    home_about_4: 'Neben der fachlichen Kompetenz gibt es angemessene Kenntnisse und Erfahrungen in regulatorischen Fragen, die die höchsten Qualitätsstandards bei der Reparatur aller Arten von Booten und Motoren garantieren.',
    home_about_5: 'Wir vertreten die wichtigsten Marken der Branche: Evinrude, Selva, Sea Doo, Joker Boat und Saver.',
    
    // Vendita
    vendita_title: 'Verkauf',
    vendita_subtitle: 'Entdecken Sie unser Sortiment an Sea-Doo Jetskis',
    vendita_category_fun: 'Spaß',
    vendita_category_fun_desc: 'Vielseitige und effiziente PWCs, hochgradig anpassbar an jedes Abenteuer. Der perfekte Weg, die ganze Crew mit einer Reihe von Wasseraktivitäten zu unterhalten. Viel Stauraum und einfach zu zubehören für Wassersport und ganztägigen Spaß.',
    vendita_category_touring: 'Touring',
    vendita_category_touring_desc: 'Erweitern Sie Ihren Horizont. Sea-Doo Touring Jetskis bieten branchenführende Stabilität kombiniert mit Komfort und Bequemlichkeit. Es ist das Kreuzfahrtfahrzeug für 2-3 Personen, ideal für ganztägige Abenteuer.',
    vendita_category_performance: 'Leistung',
    vendita_category_performance_desc: 'Pure Geschwindigkeit und Nervenkitzel. Sea-Doo Performance Jetskis sind für diejenigen konzipiert, die maximale Leistung und Adrenalin auf dem Wasser suchen.',
    vendita_category_tow: 'Wassersport',
    vendita_category_tow_desc: 'Perfekt für Wassersport. Sea-Doo Tow Sports Jetskis sind für Wakeboarden, Wasserski und alle Schleppaktivitäten konzipiert.',
    vendita_category_fishing: 'Angeln',
    vendita_category_fishing_desc: 'Für Angelbegeisterte. Sea-Doo Fishing Jetskis sind mit allem ausgestattet, was für einen perfekten Angeltag benötigt wird.',
    vendita_category_entry: 'Einsteiger',
    vendita_category_entry_desc: 'Der zugänglichste Einstieg. Sea-Doo Einsteiger-Jetskis bieten Spaß und Benutzerfreundlichkeit zu einem wettbewerbsfähigen Preis.',
    vendita_request_quote: 'Angebot anfordern',
    vendita_view_details: 'Details anzeigen',
    vendita_not_found_title: 'Nicht gefunden, was Sie suchen?',
    vendita_not_found_desc: 'Kontaktieren Sie uns für eine persönliche Beratung oder Sonderbestellungen',
    
    // Usato
    usato_title: 'Gebraucht',
    usato_subtitle: 'Garantierte gebrauchte Jetskis und Boote',
    usato_condition: 'Zustand',
    usato_year: 'Jahr',
    usato_contact_whatsapp: 'Kontakt über WhatsApp',
    
    // Ricambi
    ricambi_title: 'Ersatzteile',
    ricambi_subtitle: 'Original-Ersatzteile für Ihr Boot',
    ricambi_search: 'Ersatzteile suchen...',
    ricambi_filters: 'Filter',
    ricambi_all_categories: 'Alle Kategorien',
    ricambi_all_brands: 'Alle Marken',
    ricambi_in_stock: 'Auf Lager',
    ricambi_out_of_stock: 'Nicht verfügbar',
    ricambi_add_to_cart: 'In den Warenkorb',
    ricambi_no_results: 'Keine Ergebnisse gefunden',
    
    // News
    news_title: 'Neuigkeiten',
    news_subtitle: 'Aktuelle Nachrichten aus der Nautikwelt',
    news_read_more: 'Mehr lesen',
    news_back: 'Zurück zu den Neuigkeiten',
    news_published: 'Veröffentlicht am',
    
    // Contatti
    contatti_title: 'Kontakt',
    contatti_subtitle: 'Wir sind hier, um Ihnen zu helfen',
    contatti_contact_us: 'Kontaktieren Sie uns',
    contatti_contact_desc: 'Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Benötigen Sie technische Unterstützung? Zögern Sie nicht, uns zu kontaktieren. Unser Team ist immer bereit, Ihnen mit Professionalität und Kompetenz zu helfen.',
    contatti_sede: 'Standort',
    contatti_referente: 'Ansprechpartner',
    contatti_email: 'E-Mail',
    contatti_telefono: 'Telefon',
    contatti_orari: 'Öffnungszeiten',
    contatti_orari_feriali: 'Montag – Samstag: 8.30 – 12.30 und 14 – 18',
    contatti_orari_domenica: 'Sonntag: Geschlossen',
    contatti_whatsapp_title: 'Kontaktieren Sie uns über WhatsApp',
    contatti_whatsapp_desc: 'Schreiben Sie uns direkt auf WhatsApp für eine schnelle Antwort',
    contatti_social_title: 'Folgen Sie uns in den sozialen Medien',
    contatti_info: 'Informationen',
    contatti_preventivo: 'Angebot anfordern',
    contatti_fisso: 'Festnetz',
    
    // Noleggio
    noleggio_title: 'Verleih',
    noleggio_subtitle: 'Erleben Sie das Meer mit unseren Mietbooten',
    noleggio_main_title: 'Bootsverleih Gardasee',
    noleggio_desc_1: 'Möchten Sie ein unvergessliches Erlebnis am Gardasee haben? Mieten Sie einen unserer Jetskis oder Boote und entdecken Sie die Schönheit des Sees in völliger Freiheit.',
    noleggio_desc_2: 'Wir bieten tägliche und wöchentliche Vermietung mit vollständiger Unterstützung. Alle unsere Boote werden regelmäßig gewartet und sind bereit, Ihnen maximalen Spaß in Sicherheit zu bieten.',
    noleggio_cta: 'Hier klicken zum Mieten',
    
    // Chi Siamo
    chi_siamo_title: 'Über Uns',
    chi_siamo_subtitle: 'Unsere Geschichte, unsere Werte',
    chi_siamo_storia_title: 'Unsere Geschichte',
    chi_siamo_storia_1: 'Nautic Service wurde 2010 aus der Leidenschaft für das Meer und dem Wunsch geboren, einen vollständigen und professionellen Service im Nautikbereich anzubieten. Was als kleines Einzelhandelsgeschäft begann, ist zu einem Bezugspunkt in der Region geworden.',
    chi_siamo_storia_2: 'Heute sind wir stolz darauf, ein komplettes Serviceangebot anzubieten: vom Verkauf neuer und gebrauchter Boote über die Lieferung von Original-Ersatzteilen bis hin zur professionellen Wartung und Reparatur.',
    chi_siamo_mission_title: 'Unsere Mission',
    chi_siamo_mission_desc: 'Unseren Kunden exzellenten Service, Qualitätsprodukte und technisches Fachwissen zu bieten, um jedes Meereserlebnis unvergesslich zu machen.',
    chi_siamo_value_quality: 'Qualität',
    chi_siamo_value_quality_desc: 'Nur Produkte der besten Marken',
    chi_siamo_value_team: 'Expertenteam',
    chi_siamo_value_team_desc: 'Qualifiziertes und leidenschaftliches Personal',
    chi_siamo_value_goal: 'Kundenorientierung',
    chi_siamo_value_goal_desc: 'Ihre Bedürfnisse sind unsere Priorität',
    chi_siamo_value_passion: 'Leidenschaft',
    chi_siamo_value_passion_desc: 'Wir lieben, was wir tun',
    
    // Footer
    footer_desc: 'Ihr vertrauenswürdiger Partner für Boote, Jetskis und nautische Dienstleistungen.',
    footer_contatti: 'Kontakt',
    footer_servizi: 'Dienstleistungen',
    footer_orari: 'Öffnungszeiten',
    footer_privacy: 'Datenschutzrichtlinie',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_vendita_barche: 'Bootsverkauf',
    footer_ricambi: 'Ersatzteile',
    footer_manutenzione: 'Wartung',
    
    // Accessori
    accessori_title: 'Zubehör',
    accessori_subtitle: 'Nautisches Zubehör für jeden Bedarf',
    
    // Common
    common_price: 'Preis',
    common_from: 'Ab',
    common_close: 'Schließen',
    common_loading: 'Laden...',
    common_error: 'Fehler',
    product_description: 'Beschreibung',
  },
};

