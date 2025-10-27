import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProductsPage } from './components/ProductsPage';
import { SolutionsPage } from './components/SolutionsPage';
import { TechnologyPage } from './components/TechnologyPage';
import { MarketsPage } from './components/MarketsPage';
import { ContactPage } from './components/ContactPage';
import { ScheduleCallPage } from "./components/ScheduleCallPage";
import { VaigoCenter} from "./components/VaigoCenter";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vaigo-center" element={<VaigoCenter />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule-call" element={<ScheduleCallPage />} />

            {/* Future pages */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
