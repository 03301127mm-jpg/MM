import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroIntro from "./components/HeroIntro";
import KeywordCloud from "./components/KeywordCloud";
import ProjectSection from "./components/ProjectSection";
import ValueSection from "./components/ValueSection";
import LifeSection from "./components/LifeSection";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

function HomePage() {
  return (
    <>
      <Header />
      <HeroIntro />
      <KeywordCloud />
      <ProjectSection />
      <ValueSection />
      <LifeSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
        </Routes>
      </HashRouter>
    </main>
  );
}
