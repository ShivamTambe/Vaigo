import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';;
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'markets':
        return <MarketsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {/* {renderPage()} */}
        <HomePage />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}