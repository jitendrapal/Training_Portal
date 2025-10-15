import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import UrgencyBanner from "./components/UrgencyBanner";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import EnrollPage from "./pages/EnrollPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <UrgencyBanner />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
