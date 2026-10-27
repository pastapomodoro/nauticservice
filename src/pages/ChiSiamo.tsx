import { Award, Users, Target, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

export default function ChiSiamo() {
  return (
    <>
      <SEO
        title="Chi Siamo | Nautic Service - Dal 2003 sul Lago di Garda"
        description="Nautic Service: oltre 20 anni di esperienza nella riparazione moto d'acqua e assistenza nautica sul Lago di Garda. Officina specializzata con tecnici certificati Sea-Doo. Affidabilità, competenza e passione per la nautica. Castelnuovo del Garda."
        keywords="Nautic Service storia, officina nautica Lago di Garda, tecnici Sea Doo certificati, assistenza barche Verona, chi siamo, esperienza nautica"
        url="/chi-siamo"
      />
      <div>
      <PageHero
        eyebrow="Nautic Service"
        title="Chi Siamo"
        subtitle="La nostra storia, i nostri valori"
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-ink mb-6">La Nostra Storia</h2>
            <p className="text-lg text-ink mb-4 leading-relaxed">
              Nautic Service nasce nel 2010 dalla passione per il mare e dalla volontà di
              offrire un servizio completo e professionale nel settore nautico. Quello che è
              iniziato come un piccolo punto vendita è cresciuto fino a diventare un punto di
              riferimento nella zona.
            </p>
            <p className="text-lg text-ink mb-4 leading-relaxed">
              Nel corso degli anni abbiamo ampliato la nostra offerta, includendo vendita,
              assistenza tecnica e una vasta gamma di accessori. Il nostro successo
              si basa sulla fiducia che i nostri clienti ripongono in noi, anno dopo anno.
            </p>
            <p className="text-lg text-ink leading-relaxed">
              Oggi siamo orgogliosi di essere partner ufficiali dei migliori marchi del
              settore e di contare su un team di professionisti appassionati e competenti.
            </p>
          </div>

          <div
            className="h-[500px] bg-cover bg-center rounded-[24px] surface"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/2506900/pexels-photo-2506900.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          ></div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-ink mb-12">
            I Nostri Valori
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-[#2cd5c4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-ink" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">Qualità</h3>
              <p className="text-ink">
                Selezioniamo solo i migliori prodotti e offriamo servizi di alta qualità.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-[#2cd5c4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-ink" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">Professionalità</h3>
              <p className="text-ink">
                Un team esperto e sempre aggiornato, pronto ad assisterti in ogni esigenza.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-[#2cd5c4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-ink" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">Trasparenza</h3>
              <p className="text-ink">
                Chiarezza nei prezzi e nelle condizioni, per un rapporto basato sulla fiducia.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-[#2cd5c4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-ink" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">Passione</h3>
              <p className="text-ink">
                Amiamo il nostro lavoro e mettiamo il cuore in tutto ciò che facciamo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] surface p-12">
          <h2 className="text-4xl font-bold text-center text-ink mb-8">Il Nostro Team</h2>
          <p className="text-lg text-ink text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Il nostro punto di forza è il team: professionisti qualificati con anni di
            esperienza nel settore nautico, sempre pronti ad offrire consulenza personalizzata
            e assistenza completa. Dalla vendita alla post-vendita, ci prendiamo cura di te e
            della tua imbarcazione.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto bg-cover bg-center rounded-full mb-4 shadow-lg"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400)',
                }}
              ></div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Marco Rossi</h3>
              <p className="text-ink-muted">Fondatore & CEO</p>
            </div>

            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto bg-cover bg-center rounded-full mb-4 shadow-lg"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400)',
                }}
              ></div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Laura Bianchi</h3>
              <p className="text-ink-muted">Responsabile Vendite</p>
            </div>

            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto bg-cover bg-center rounded-full mb-4 shadow-lg"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/2092390/pexels-photo-2092390.jpeg?auto=compress&cs=tinysrgb&w=400)',
                }}
              ></div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Giuseppe Verdi</h3>
              <p className="text-ink-muted">Responsabile Tecnico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
