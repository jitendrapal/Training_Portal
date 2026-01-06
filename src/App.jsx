import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Analytics from "./components/Analytics";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import InternshipPage from "./pages/InternshipPage";
import ResourcesPage from "./pages/ResourcesPage";
import JavaTutorialPage from "./pages/JavaTutorialPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/enroll" element={<EnrollPage />} />
              <Route path="/internship" element={<InternshipPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/java" element={<JavaTutorialPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
