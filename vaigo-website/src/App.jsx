import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { VaigoCenter } from "./components/VaigoCenter";
import { SolutionDetail } from "./components/SolutionDetail";
import { IndustryDetail } from "./components/IndustryDetail";
import { FranchisePage } from "./components/FranchisePage";
import industrySpecific from "./data/industrySpecificSolutions.json";
import { PartnershipPage } from './components/PartnershipPage';
import WhatsAppButton from "./components/WhatsAppButton";
import FirstVisitPopup from "./components/FirstVisitPopup";

import { ParallaxProvider } from "react-scroll-parallax";

import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  return (
    <ParallaxProvider>
      <Router>
        <ScrollToTop />
        <MainLayout />
      </Router>
    </ParallaxProvider>
  );
}

// Separate layout so we can use useLocation()
function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      <FirstVisitPopup />
      <main className="overflow-hidden">
        {/* Global page transition wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/vaigo-center" element={<VaigoCenter />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />
              <Route path="/industry/:name" element={<IndustryDetail industrySpecific={industrySpecific} />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/markets" element={<MarketsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/schedule-call" element={<ScheduleCallPage />} />
              <Route path="/franchisee" element={<FranchisePage />} />
              <Route path="/partnership" element={<PartnershipPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
