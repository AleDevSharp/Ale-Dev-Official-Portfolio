import { FaGithub } from 'react-icons/fa';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { ImageWithFallback } from '../shared/components/ImageWithFallback';
// Images
import FGymAppImage from '../assets/images/f-gymapp.png';
import NasdaqMasterImage from '../assets/images/nasdaq-master.png';
import PortfolioImage from '../assets/images/portfolio.png';
import SoupImage from '../assets/images/soup.png';
import SpLibImage from '../assets/images/sp-lib.png';

/**
 * Projects component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Projects() {
  const projects = [
    {
      title: 'Soup Software',
      description:
        'SOUP is a web application that enables users to create an Event Knowledge Graph (EKG) from their own event logs. Built as a university project and shared as open-source.',
      image: SoupImage,
      technologies: ['Angular', 'Python', 'Memgraph'],
      github: 'https://github.com/soup-ocpm/soup',
    },
    {
      title: 'NasdaqMaster',
      description:
        'NasdaqMaster is a passion project that unifies charts, orders, and AI tools to simplify trading and learning — built purely for personal exploration and innovation.',
      image: NasdaqMasterImage,
      technologies: ['Angular', 'Python', 'MetaTrader5'],
      github: '',
    },
    {
      title: 'Official Portfolio',
      description:
        'This portfolio is a modern React application built with TypeScript. It showcases my work through reusable UI components, offering a clean, fast, and responsive user experience.',
      image: PortfolioImage,
      technologies: ['Angular', 'npm'],
      github: 'https://github.com/AleDevSharp/Ale-Dev-Official-Portfolio',
    },
    {
      title: 'Sp-Lib Angular Library',
      description:
        'Sp-lib is a lightweight Angular library developed using TypeScript. It provides a collection of standalone UI components, designed for simplicity and easy integration.',
      image: SpLibImage,
      technologies: ['Angular', 'npm'],
      github: 'https://github.com/AleDevSharp/Npm-Sp-Angular-Lib',
    },
    {
      title: 'F-GymApp',
      description:
        'Hybrid App developed in Flutter and allows you to mark the training schedules within it, in such a way as to be able to keep and update all the Gym training schedules quickly and easily.',
      image: FGymAppImage,
      technologies: ['Flutter'],
      github: 'https://github.com/AleDevSharp/F_GymApp',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Projects</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A selection of personal projects I have created to learn and experiment with different
              technologies and programming concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="mb-2 text-gray-900" style={{ fontWeight: 'bold' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {project.github ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <FaGithub size={16} className="mr-2" />
                        View Code
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full opacity-70"
                        disabled
                        style={{ cursor: 'not-allowed' }}
                      >
                        <FaGithub size={16} className="mr-2" />
                        Private Repository
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
