import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Analytics from "./components/Analytics";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import WorkshopPage from "./pages/WorkshopPage";
import CoursesPage from "./pages/CoursesPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
