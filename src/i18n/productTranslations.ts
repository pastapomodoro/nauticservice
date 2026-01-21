import { Language } from './translations';

export type ProductTranslation = {
  name: string;
  description: string;
};

export type CategoryTranslation = {
  name: string;
  description: string;
};

// Traduzioni delle categorie
export const categoryTranslations: Record<string, Record<Language, CategoryTranslation>> = {
  'divertimento': {
    it: {
      name: 'Divertimento',
      description: 'PWC versatili ed efficienti, altamente adattabili a qualsiasi avventura. Il modo perfetto per far divertire tutto l\'equipaggio con una serie di intrattenimenti in acqua. Tantissimo spazio per riporre i bagagli e accessoriarsi facilmente per gli sport da traino e per il divertimento di tutto il giorno.'
    },
    en: {
      name: 'Fun',
      description: 'Versatile and efficient PWCs, highly adaptable to any adventure. The perfect way to entertain the whole crew with a range of water activities. Plenty of storage space and easy to accessorize for tow sports and all-day fun.'
    },
    de: {
      name: 'Spaß',
      description: 'Vielseitige und effiziente PWCs, hochgradig anpassbar an jedes Abenteuer. Der perfekte Weg, die ganze Crew mit einer Reihe von Wasseraktivitäten zu unterhalten. Viel Stauraum und einfach zu zubehören für Schleppaktivitäten und ganztägigen Spaß.'
    }
  },
  'turismo': {
    it: {
      name: 'Turismo',
      description: 'Espandi i tuoi orizzonti. Le moto d\'acqua Sea-Doo Touring offrono una stabilità leader del settore abbinata a comfort e comodità. È l\'imbarcazione da crociera per 2-3 persone, ideale per le avventure di tutto il giorno.'
    },
    en: {
      name: 'Touring',
      description: 'Expand your horizons. Sea-Doo Touring jet skis offer industry-leading stability combined with comfort and convenience. It\'s the cruising vessel for 2-3 people, ideal for all-day adventures.'
    },
    de: {
      name: 'Touring',
      description: 'Erweitern Sie Ihren Horizont. Sea-Doo Touring Jetskis bieten branchenführende Stabilität kombiniert mit Komfort und Bequemlichkeit. Es ist das Kreuzfahrtfahrzeug für 2-3 Personen, ideal für ganztägige Abenteuer.'
    }
  },
  'prestazioni': {
    it: {
      name: 'Prestazioni',
      description: 'Scopri le caratteristiche ispirate alle gare per dominare un giro di boa, nonché la tecnologia avanzata e la convenienza per le esplorazioni in mare aperto. Ciascun modello Performance offre opzioni di motori Rotax dinamici per aggiungere una dose extra di adrenalina.'
    },
    en: {
      name: 'Performance',
      description: 'Discover race-inspired features to dominate a buoy turn, as well as advanced technology and convenience for open water exploration. Each Performance model offers dynamic Rotax engine options to add an extra dose of adrenaline.'
    },
    de: {
      name: 'Leistung',
      description: 'Entdecken Sie von Rennen inspirierte Funktionen, um eine Bojenwendung zu dominieren, sowie fortschrittliche Technologie und Komfort für die Erkundung offener Gewässer. Jedes Performance-Modell bietet dynamische Rotax-Motoroptionen für eine extra Dosis Adrenalin.'
    }
  },
  'sport-da-traino': {
    it: {
      name: 'Sport da traino',
      description: 'I modello Sea-Doo Wake Pro sono costruiti appositamente per i tuoi sport da traino preferiti. Dotate di porta tavola, pilone per gli sci e funzioni esclusive come la modalità Sci, sono l\'anima della festa con tanta potenza.'
    },
    en: {
      name: 'Tow Sports',
      description: 'Sea-Doo Wake Pro models are purpose-built for your favorite tow sports. Equipped with board rack, ski pylon and exclusive features like Ski mode, they\'re the life of the party with plenty of power.'
    },
    de: {
      name: 'Wassersport',
      description: 'Sea-Doo Wake Pro Modelle sind speziell für Ihre bevorzugten Schleppaktivitäten gebaut. Ausgestattet mit Boardhalter, Ski-Pylon und exklusiven Funktionen wie dem Ski-Modus, sind sie der Mittelpunkt der Party mit viel Power.'
    }
  },
  'pesca-sportiva': {
    it: {
      name: 'Pesca sportiva',
      description: 'Costruita pensando agli appassionati di pesca, la famiglia di moto d\'acqua Sea-Doo Fish Pro ti permette di essere più vicino che mai all\'azione e include refrigeratori per il pescato, portacanne, Garmin Fish Finder e molto altro.'
    },
    en: {
      name: 'Fishing',
      description: 'Built with fishing enthusiasts in mind, the Sea-Doo Fish Pro family of jet skis lets you get closer to the action than ever and includes fish coolers, rod holders, Garmin Fish Finder and much more.'
    },
    de: {
      name: 'Angeln',
      description: 'Mit Blick auf Angelbegeisterte gebaut, ermöglicht die Sea-Doo Fish Pro Familie von Jetskis, der Action näher als je zuvor zu kommen, und beinhaltet Fischkühler, Rutenhalter, Garmin Fish Finder und vieles mehr.'
    }
  }
};

// Traduzioni dei prodotti
export const productTranslations: Record<string, Record<Language, ProductTranslation>> = {
  'spark-2026': {
    it: {
      name: 'Spark',
      description: 'Leggera, divertente e perfetta per gite spontanee. Spark è facile da trainare ed è costruita per portare divertimento ogni volta che si entra in acqua.'
    },
    en: {
      name: 'Spark',
      description: 'Light, fun and perfect for spontaneous outings. Spark is easy to tow and built to bring fun every time you hit the water.'
    },
    de: {
      name: 'Spark',
      description: 'Leicht, spaßig und perfekt für spontane Ausflüge. Spark ist einfach zu ziehen und dafür gebaut, jedes Mal Spaß zu bringen, wenn Sie aufs Wasser gehen.'
    }
  },
  'spark-trixx-2026': {
    it: {
      name: 'Spark Trixx',
      description: 'Per gli amanti del brivido che vogliono distinguersi, Spark Trixx 2026 porta il divertimento a un livello superiore. Attiva la modalità Trixx e mostra le tue acrobazie acquatiche come un professionista.'
    },
    en: {
      name: 'Spark Trixx',
      description: 'For thrill-seekers who want to stand out, Spark Trixx 2026 takes fun to the next level. Activate Trixx mode and show off your water tricks like a pro.'
    },
    de: {
      name: 'Spark Trixx',
      description: 'Für Abenteuerlustige, die auffallen wollen, bringt Spark Trixx 2026 den Spaß auf die nächste Stufe. Aktivieren Sie den Trixx-Modus und zeigen Sie Ihre Wassertricks wie ein Profi.'
    }
  },
  'gti-2026': {
    it: {
      name: 'GTI',
      description: 'La piattaforma GTI 2026 apre un mondo di possibilità sull\'acqua. Sia che tu cerchi azione, relax o una via di mezzo fra i due, GTI ti regala ogni volta giornate indimenticabili.'
    },
    en: {
      name: 'GTI',
      description: 'The 2026 GTI platform opens a world of possibilities on the water. Whether you\'re looking for action, relaxation or something in between, GTI delivers unforgettable days every time.'
    },
    de: {
      name: 'GTI',
      description: 'Die GTI 2026 Plattform eröffnet eine Welt von Möglichkeiten auf dem Wasser. Ob Sie Action, Entspannung oder etwas dazwischen suchen, GTI liefert jedes Mal unvergessliche Tage.'
    }
  },
  'gti-se-2026': {
    it: {
      name: 'GTI SE',
      description: 'Con la piattaforma da bagno più grande del settore, 2026 GTI SE è pronta per ogni destinazione del tuo viaggio. Comfort e avventura vanno di pari passo ovunque l\'acqua ti conduca.'
    },
    en: {
      name: 'GTI SE',
      description: 'With the industry\'s largest swim platform, 2026 GTI SE is ready for any destination on your journey. Comfort and adventure go hand in hand wherever the water takes you.'
    },
    de: {
      name: 'GTI SE',
      description: 'Mit der branchenweit größten Badeplattform ist der 2026 GTI SE für jedes Reiseziel bereit. Komfort und Abenteuer gehen Hand in Hand, wohin das Wasser Sie auch führt.'
    }
  },
  'gtx-2026': {
    it: {
      name: 'GTX',
      description: 'Per il 2026, GTX continua a mantenere la propria reputazione: comfort di alto livello, prestazioni raffinate e uno stile audace che rende ogni uscita una fuga nel fine settimana.'
    },
    en: {
      name: 'GTX',
      description: 'For 2026, GTX continues to uphold its reputation: premium comfort, refined performance and bold styling that makes every outing a weekend getaway.'
    },
    de: {
      name: 'GTX',
      description: 'Für 2026 hält GTX weiterhin seinen Ruf: Premium-Komfort, raffinierte Leistung und mutiges Styling, das jeden Ausflug zu einem Wochenendtrip macht.'
    }
  },
  'gtx-limited-2026': {
    it: {
      name: 'GTX Limited',
      description: 'Ridefinizione del lusso in acqua. 2026 GTX Limited unisce 325 hp, funzioni intelligenti e comfort di alto livello per offrire un\'esperienza di PWC touring di altissimo livello.'
    },
    en: {
      name: 'GTX Limited',
      description: 'Redefining luxury on water. 2026 GTX Limited combines 325 hp, smart features and premium comfort to deliver the ultimate PWC touring experience.'
    },
    de: {
      name: 'GTX Limited',
      description: 'Neudefinition von Luxus auf dem Wasser. Der 2026 GTX Limited kombiniert 325 PS, intelligente Funktionen und Premium-Komfort für das ultimative PWC-Touring-Erlebnis.'
    }
  },
  'explorer-pro-2026': {
    it: {
      name: 'Explorer Pro',
      description: 'La prima PWC del settore veramente creata per l\'avventura. Piattaforma incredibilmente stabile e possibilità di scegliere tra un motore da 170 o 230 hp con capacità di lunga percorrenza.'
    },
    en: {
      name: 'Explorer Pro',
      description: 'The industry\'s first PWC truly built for adventure. Incredibly stable platform with choice of 170 or 230 hp engine with long-range capability.'
    },
    de: {
      name: 'Explorer Pro',
      description: 'Das erste PWC der Branche, das wirklich für Abenteuer gebaut wurde. Unglaublich stabile Plattform mit Wahl zwischen 170 oder 230 PS Motor mit Langstreckenfähigkeit.'
    }
  },
  'gtr-2026': {
    it: {
      name: 'GTR',
      description: 'Potenza straordinaria e valore eccezionale. La 2026 GTR offre un\'accelerazione sovralimentata e un controllo divertente a un prezzo che rende la guida performante più accessibile che mai.'
    },
    en: {
      name: 'GTR',
      description: 'Extraordinary power and exceptional value. The 2026 GTR delivers supercharged acceleration and fun handling at a price that makes performance riding more accessible than ever.'
    },
    de: {
      name: 'GTR',
      description: 'Außergewöhnliche Kraft und außergewöhnlicher Wert. Der 2026 GTR liefert aufgeladene Beschleunigung und spaßiges Handling zu einem Preis, der Performance-Fahren zugänglicher macht als je zuvor.'
    }
  },
  'rxt-x-2026': {
    it: {
      name: 'RXT-X',
      description: 'RXT-X 2026 unisce prestazioni adrenaliniche alla sicurezza e alla praticità di tutti i giorni. È la migliore moto d\'acqua offshore per piloti che desiderano velocità e controllo in tutte le condizioni.'
    },
    en: {
      name: 'RXT-X',
      description: 'RXT-X 2026 combines adrenaline-pumping performance with everyday safety and convenience. It\'s the ultimate offshore PWC for riders who want speed and control in all conditions.'
    },
    de: {
      name: 'RXT-X',
      description: 'RXT-X 2026 kombiniert adrenalingeladene Leistung mit alltäglicher Sicherheit und Komfort. Es ist das ultimative Offshore-PWC für Fahrer, die Geschwindigkeit und Kontrolle unter allen Bedingungen wollen.'
    }
  },
  'rxp-x-2026': {
    it: {
      name: 'RXP-X',
      description: 'Creata per i piloti alla ricerca delle massime prestazioni. RXP-X 2026 offre potenza collaudata in gara e controllo precisissimo per superare i tuoi limiti a ogni uscita.'
    },
    en: {
      name: 'RXP-X',
      description: 'Built for riders seeking maximum performance. RXP-X 2026 delivers race-proven power and precise control to push your limits on every outing.'
    },
    de: {
      name: 'RXP-X',
      description: 'Gebaut für Fahrer, die maximale Leistung suchen. RXP-X 2026 liefert rennerprobte Power und präzise Kontrolle, um Ihre Grenzen bei jedem Ausflug zu überschreiten.'
    }
  },
  'gtr-x-2026': {
    it: {
      name: 'GTR-X',
      description: 'GTR-X 300 è una vera e propria PWC ad alte prestazioni creata per i piloti che desiderano potenza, precisione e controllo. Con 300 hp di potenza Rotax sovralimentata.'
    },
    en: {
      name: 'GTR-X',
      description: 'GTR-X 300 is a true high-performance PWC built for riders who want power, precision and control. With 300 hp of supercharged Rotax power.'
    },
    de: {
      name: 'GTR-X',
      description: 'GTR-X 300 ist ein echtes Hochleistungs-PWC, gebaut für Fahrer, die Power, Präzision und Kontrolle wollen. Mit 300 PS aufgeladener Rotax-Power.'
    }
  },
  'wake-pro-2026': {
    it: {
      name: 'Wake Pro',
      description: 'Il modello Wake Pro offre la guida più stabile del settore per gli sport da traino. Con la massima potenza e spazio extra per preparare la tua uscita successiva.'
    },
    en: {
      name: 'Wake Pro',
      description: 'The Wake Pro model offers the most stable ride in the industry for tow sports. With maximum power and extra space to prepare for your next outing.'
    },
    de: {
      name: 'Wake Pro',
      description: 'Das Wake Pro Modell bietet die stabilste Fahrt der Branche für Schleppaktivitäten. Mit maximaler Power und extra Platz zur Vorbereitung auf Ihren nächsten Ausflug.'
    }
  },
  'fishpro-sport-2026': {
    it: {
      name: 'FishPro Sport',
      description: 'Una combinazione di entusiasmo, versatilità e passione in un unico pacchetto. Esplora posti prima irraggiungibili per le tradizionali imbarcazioni da pesca.'
    },
    en: {
      name: 'FishPro Sport',
      description: 'A combination of excitement, versatility and passion in one package. Explore places previously unreachable for traditional fishing boats.'
    },
    de: {
      name: 'FishPro Sport',
      description: 'Eine Kombination aus Begeisterung, Vielseitigkeit und Leidenschaft in einem Paket. Erkunden Sie Orte, die für traditionelle Angelboote unerreichbar waren.'
    }
  }
};

// Funzione helper per ottenere la traduzione di un prodotto
export const getProductTranslation = (productId: string, language: Language): ProductTranslation => {
  return productTranslations[productId]?.[language] || productTranslations[productId]?.it || { name: '', description: '' };
};

// Funzione helper per ottenere la traduzione di una categoria
export const getCategoryTranslation = (categoryId: string, language: Language): CategoryTranslation => {
  return categoryTranslations[categoryId]?.[language] || categoryTranslations[categoryId]?.it || { name: '', description: '' };
};

// Traduzioni per il menu delle categorie nella pagina Vendita
export const venditaCategoryLabels: Record<string, Record<Language, string>> = {
  'divertimento': { it: 'Divertimento', en: 'Fun', de: 'Spaß' },
  'turismo': { it: 'Turismo', en: 'Touring', de: 'Touring' },
  'prestazioni': { it: 'Prestazioni', en: 'Performance', de: 'Leistung' },
  'sport-da-traino': { it: 'Sport da traino', en: 'Tow Sports', de: 'Wassersport' },
  'pesca-sportiva': { it: 'Pesca sportiva', en: 'Fishing', de: 'Angeln' }
};

