import { useState } from 'react';
import { BackgroundMesh } from './components/BackgroundMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Events } from './components/Events';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-purple-600/30 selection:text-purple-200 relative">
      {/* Background visual accents */}
      <BackgroundMesh />

      {/* Fixed Navigation Bar */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        <Hero onResumeClick={handleOpenResume} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Events />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onResumeClick={handleOpenResume} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default App;
