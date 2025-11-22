import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MyPhoto from '../assets/images/profile-photo.jpg';
import { Button } from '../components/button';

/**
 * Hero component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Hero() {
  /**
   * Scroll to contact function
   */
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Scroll to project
   */
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{
        background: 'linear-gradient(135deg, #FFB74D 0%, #FF9933 50%, #FF7043 100%)',
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={MyPhoto} alt="Foto personale" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="mb-6 text-white text-2xl font-bold" style={{ fontWeight: 'bold' }}>
            Alessio Giacché - Software Developer
          </h1>

          <p className="mb-8 text-white max-w-2xl mx-auto">
            Passionate about technology and software development. Always looking for new challenges
            to grow professionally and contribute to innovative projects with clean code and
            creative solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button onClick={scrollToProjects} size="lg" style={{ cursor: 'pointer' }}>
              See Projects
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              style={{ cursor: 'pointer' }}
            >
              Contact me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/AleDevSharp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 text-gray-700 hover:text-orange-600"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alessio-giacché-276138343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 text-gray-700 hover:text-orange-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:ale.giacc.dev@gmail.com?subject=Contact%20from%20Portfolio%20Website&body=Hello,%20I'm%20contacting%20you%20from%20your%20portfolio..."
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 text-gray-700 hover:text-orange-600"
              aria-label="Send email"
              title="Send email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
