import { Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/**
 * Footer component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About section */}
            <div>
              <h3 className="text-white mb-4">Portfolio</h3>
              <p className="text-gray-400">
                Junior Software Developer passionate about technology and always ready to learn new
                things.
              </p>
            </div>

            {/* Quick Links section*/}
            <div>
              <h3 className="text-white mb-4">Rapid links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contacts
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white mb-4">Follow me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AleDevSharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alessio-giacché-276138343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:ale.giacc.dev@gmail.com?subject=Contact%20from%20Portfolio%20Website&body=Hello,%20I'm%20contacting%20you%20from%20your%20portfolio..."
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} Portfolio. Created with <Heart size={16} className="text-red-500" />{' '}
              and passion for code.
            </p>
            <p className="text-gray-400">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
