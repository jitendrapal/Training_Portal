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
import PythonLanding from "./pages/PythonLanding";
import JavaLanding from "./pages/JavaLanding";
import DotNetLanding from "./pages/DotNetLanding";
import PythonWagholi from "./pages/PythonWagholi";
import FullStackWagholi from "./pages/FullStackWagholi";
import AIMLWagholi from "./pages/AIMLWagholi";
import CyberSecurityWagholi from "./pages/CyberSecurityWagholi";
import GermanyAusbildungPage from "./pages/GermanyAusbildungPage";

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
            <Route
              path="/germany-placement"
              element={<GermanyAusbildungPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/python-full-stack" element={<PythonLanding />} />
            <Route path="/java-full-stack" element={<JavaLanding />} />
            <Route path="/dotnet-full-stack" element={<DotNetLanding />} />
            <Route
              path="/python-training-wagholi"
              element={<PythonWagholi />}
            />
            <Route
              path="/full-stack-course-wagholi"
              element={<FullStackWagholi />}
            />
            <Route path="/ai-ml-course-wagholi" element={<AIMLWagholi />} />
            <Route
              path="/cyber-security-course-wagholi"
              element={<CyberSecurityWagholi />}
            />
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
