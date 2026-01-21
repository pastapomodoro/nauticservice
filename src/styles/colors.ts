/**
 * Palette colori Nautic Service
 * 
 * Schema colori definitivo
 */

export const colors = {
  // Colore primario - Ciano/Turchese
  primary: {
    DEFAULT: '#2cd5c4',      // Ciano principale (elementi principali, navbar)
    light: '#00D9CC',        // Versione più brillante
    dark: '#1A5F7A',         // Blu ciano scuro (footer)
  },
  
  // Colore accento - Verde lime per CTA e gradienti
  accent: {
    DEFAULT: '#9BE870',      // Verde lime
    light: '#B5F090',
    dark: '#7AC050',
  },
  
  // Gradienti
  gradients: {
    // Gradiente CTA principale
    cta: 'linear-gradient(135deg, #2cd5c4 0%, #00D9CC 50%, #9BE870 100%)',
    // Gradiente bottoni
    button: 'linear-gradient(135deg, #00D9CC 0%, #1FA9A0 50%, #9BE870 100%)',
  },
  
  // Background e testo
  bg: '#F4F7F6',
  text: '#0E0E0E',
  
  // Footer
  footer: '#1A5F7A',  // Blu ciano scuro che contrasta con il logo
};
