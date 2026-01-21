import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import MobileFloatingButtons from './components/MobileFloatingButtons';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Vendita from './pages/Vendita';
// Kill switch: Usato - riattivare in features.ts
import Usato from './pages/Usato';
import Ricambi from './pages/Ricambi';
import News from './pages/News';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import Contatti from './pages/Contatti';
import Privacy from './pages/Privacy';
import { FEATURES } from './config/features';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Gestione navigazione da eventi custom (es. link Privacy nel cookie banner)
  useEffect(() => {
    const handleNavigateEvent = (event: CustomEvent<string>) => {
      handleNavigate(event.detail);
    };

    window.addEventListener('navigate' as any, handleNavigateEvent as EventListener);
    return () => {
      window.removeEventListener('navigate' as any, handleNavigateEvent as EventListener);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'chi-siamo':
        return <ChiSiamo />;
      case 'vendita':
        return <Vendita onNavigate={handleNavigate} />;
      // Kill switch: Usato - riattivare in features.ts
      case 'usato':
        return FEATURES.USATO_ENABLED ? <Usato /> : <Home onNavigate={handleNavigate} />;
      case 'ricambi':
        return <Ricambi />;
      case 'news':
        return <News />;
      case 'contatti':
        return <Contatti />;
      case 'privacy':
        return <Privacy />;
      case 'payment':
        return <Payment onNavigate={handleNavigate} />;
      case 'checkout':
        return <Checkout onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F6]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <CookieBanner />
      <MobileFloatingButtons />
    </div>
  );
}

export default App;
