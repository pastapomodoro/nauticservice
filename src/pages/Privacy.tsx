export default function Privacy() {
  return (
    <div className="bg-[#F4F7F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E0E0E] mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Titolare del trattamento dei dati è:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-[#0E0E0E]">Nautic Service</p>
              <p className="text-gray-700">Via Venezia 9</p>
              <p className="text-gray-700">Castelnuovo del Garda (VR)</p>
              <p className="text-gray-700">P.IVA: 04616350239</p>
              <p className="text-gray-700">Email: info@nautic-service.it</p>
              <p className="text-gray-700">Tel: +39 327.8992159</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">2. Dati Raccolti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali che raccogliamo includono:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Dati di contatto (nome, cognome, email, telefono)</li>
              <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              <li>Dati forniti volontariamente tramite form di contatto</li>
              <li>Dati relativi agli ordini e alle transazioni</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Erogazione dei servizi richiesti</li>
              <li>Gestione delle richieste di informazioni e preventivi</li>
              <li>Comunicazioni commerciali e marketing (con consenso)</li>
              <li>Adempimento degli obblighi di legge</li>
              <li>Miglioramento dei servizi e dell'esperienza utente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">4. Base Giuridica</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il trattamento dei dati personali si basa su:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Consenso dell'interessato</li>
              <li>Esecuzione di un contratto o di misure precontrattuali</li>
              <li>Adempimento di un obbligo di legge</li>
              <li>Legittimo interesse del titolare</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">5. Modalità di Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati vengono trattati mediante strumenti informatici e telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i dati personali contro accessi non autorizzati, alterazioni, divulgazioni o distruzioni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">6. Conservazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali vengono conservati per il tempo necessario al perseguimento delle finalità per le quali sono stati raccolti, nel rispetto dei termini di legge applicabili.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Per i dati di marketing, la conservazione avviene fino alla revoca del consenso o alla richiesta di cancellazione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">7. Comunicazione e Diffusione</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali non vengono diffusi. Possono essere comunicati a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Fornitori di servizi tecnici (hosting, email, analytics)</li>
              <li>Autorità competenti quando richiesto dalla legge</li>
              <li>Partner commerciali solo con consenso esplicito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">8. Trasferimento Dati all'Estero</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali possono essere trasferiti in paesi dell'Unione Europea o in paesi terzi per i quali la Commissione Europea ha adottato una decisione di adeguatezza, oppure mediante garanzie appropriate come le clausole contrattuali standard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">9. Diritti dell'Interessato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ai sensi del Regolamento UE 2016/679 (GDPR), l'interessato ha il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Accesso:</strong> ottenere conferma dell'esistenza dei propri dati e accedervi</li>
              <li><strong>Rettifica:</strong> ottenere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione:</strong> ottenere la cancellazione dei dati quando non più necessari</li>
              <li><strong>Limitazione:</strong> ottenere la limitazione del trattamento in determinate circostanze</li>
              <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione:</strong> opporsi al trattamento per motivi legittimi</li>
              <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
              <li><strong>Reclamo:</strong> proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Per esercitare i propri diritti, l'interessato può contattare il Titolare all'indirizzo email: <a href="mailto:info@nautic-service.it" className="text-[#2cd5c4] hover:underline">info@nautic-service.it</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">10. Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questo sito utilizza cookie tecnici necessari per il funzionamento del sito. Con il consenso dell’utente, possono essere attivati anche cookie di analisi e/o marketing (anche di terze parti).
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong>Cookie tecnici (necessari):</strong> sempre attivi, indispensabili per il corretto funzionamento del sito.</li>
              <li><strong>Cookie di analisi:</strong> ci aiutano a capire come viene usato il sito (statistiche aggregate) e a migliorarlo.</li>
              <li><strong>Cookie di marketing:</strong> utilizzati per contenuti promozionali e personalizzazione (se presenti).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Puoi gestire e modificare le tue preferenze in qualsiasi momento tramite il link <strong>“Impostazioni cookie”</strong> nel footer, oppure tramite le impostazioni del browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">11. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Il Titolare si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-4">Contatti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per qualsiasi domanda o richiesta relativa al trattamento dei dati personali, è possibile contattare:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-[#0E0E0E]">Nautic Service</p>
              <p className="text-gray-700">P.IVA: 04616350239</p>
              <p className="text-gray-700">Email: <a href="mailto:info@nautic-service.it" className="text-[#2cd5c4] hover:underline">info@nautic-service.it</a></p>
              <p className="text-gray-700">Tel: <a href="tel:+393278992159" className="text-[#2cd5c4] hover:underline">+39 327.8992159</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
