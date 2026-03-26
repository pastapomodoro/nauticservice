/**
 * Feature Flags / Kill Switches
 * 
 * Usa queste variabili per abilitare/disabilitare sezioni del sito.
 * Per riattivare una sezione, cambia il valore da false a true.
 */

export const FEATURES = {
  /**
   * Sezione USATO - Barche e moto d'acqua usate
   * Impostare a true per riattivare la sezione
   */
  USATO_ENABLED: false,
  
  /**
   * Sezione RICAMBI - Ricambi e accessori
   * Impostare a true per riattivare la sezione
   */
  RICAMBI_ENABLED: false,

  /**
   * Sezione NOLEGGIO
   */
  NOLEGGIO_ENABLED: true,
  
  /**
   * Sezione NEWS
   */
  NEWS_ENABLED: true,
  
  /**
   * Sezione ACCESSORI
   */
  ACCESSORI_ENABLED: true,
};

