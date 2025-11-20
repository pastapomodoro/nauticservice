# Configurazione Vercel

## Variabili d'ambiente richieste

Per far funzionare correttamente il sito su Vercel, devi configurare le seguenti variabili d'ambiente:

### 1. Vai su Vercel Dashboard
- Accedi a https://vercel.com
- Seleziona il tuo progetto `nauticservice`

### 2. Vai su Settings > Environment Variables

### 3. Aggiungi le seguenti variabili:

#### VITE_SUPABASE_URL
- **Value**: Il tuo URL del progetto Supabase
- **Example**: `https://xxxxxxxxxxxxx.supabase.co`
- **Environments**: Production, Preview, Development

#### VITE_SUPABASE_ANON_KEY
- **Value**: La tua chiave anon pubblica di Supabase
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Environments**: Production, Preview, Development

### 4. Come ottenere i valori da Supabase:

1. Vai su https://supabase.com
2. Accedi al tuo account
3. Seleziona il progetto (o creane uno nuovo)
4. Vai su **Settings** > **API**
5. Copia:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

### 5. Dopo aver aggiunto le variabili:

- Vai su **Deployments**
- Clicca sui tre puntini (...) dell'ultimo deployment
- Seleziona **Redeploy**
- Il sito verrà ricostruito con le nuove variabili d'ambiente

## Nota

Se non configuri Supabase, il sito funzionerà comunque usando i file JSON locali (`public/ricambi.json`, `public/products.json`) come fallback.

