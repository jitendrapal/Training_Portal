import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import InternshipPage from "./pages/InternshipPage";
import ResourcesPage from "./pages/ResourcesPage";
import JavaTutorialPage from "./pages/JavaTutorialPage";
import PythonTutorialPage from "./pages/PythonTutorialPage";
import AngularTutorialPage from "./pages/AngularTutorialPage";
import ReactTutorialPage from "./pages/ReactTutorialPage";
import DotNetTutorialPage from "./pages/DotNetTutorialPage";
import CTutorialPage from "./pages/CTutorialPage";
import CppTutorialPage from "./pages/CppTutorialPage";
import AIMLTutorialPage from "./pages/AIMLTutorialPage";
import MobileTutorialPage from "./pages/MobileTutorialPage";

function App() {
  return (
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
            <Route path="/resources/python" element={<PythonTutorialPage />} />
            <Route
              path="/resources/angular"
              element={<AngularTutorialPage />}
            />
            <Route path="/resources/react" element={<ReactTutorialPage />} />
            <Route path="/resources/dotnet" element={<DotNetTutorialPage />} />
            <Route path="/resources/c" element={<CTutorialPage />} />
            <Route path="/resources/cpp" element={<CppTutorialPage />} />
            <Route path="/resources/aiml" element={<AIMLTutorialPage />} />
            <Route path="/resources/mobile" element={<MobileTutorialPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
