import { Toaster } from 'sonner';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Hero } from './pages/Hero';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Footer } from './shared/components/Footer';
import { Navigation } from './shared/components/Navigation';

/**
 * App component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
