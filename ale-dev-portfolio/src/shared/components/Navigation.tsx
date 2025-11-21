import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../components/button';

/**
 * Navigation component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Navigation() {
  // Open flag
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Scroll to specific section
   * @param sectionId
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
            className="text-gray-900 transition-colors hover:text-orange-600"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              style={{ cursor: 'pointer' }}
              className="text-gray-600 transition-colors hover:text-orange-600"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              style={{ cursor: 'pointer' }}
              className="text-gray-600 transition-colors hover:text-orange-600"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              style={{ cursor: 'pointer' }}
              className="text-gray-600 transition-colors hover:text-orange-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              style={{ cursor: 'pointer' }}
              className="text-gray-600 transition-colors hover:text-orange-600"
            >
              Skills
            </button>
            <Button onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
              Contact me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 transition-colors hover:text-orange-600 text-left"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 transition-colors hover:text-orange-600 text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 transition-colors hover:text-orange-600 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 transition-colors hover:text-orange-600 text-left"
            >
              Skills
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Contact me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
