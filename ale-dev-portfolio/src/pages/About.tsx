import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card } from '../components/card';

/**
 * About component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function About() {
  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'I am committed to writing readable and maintainable code following best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Always curious and motivated to learn new technologies and methodologies.',
    },
    {
      icon: Rocket,
      title: 'Problem Solving',
      description: 'I enjoy tackling complex problems and finding effective solutions.',
    },
    {
      icon: Users,
      title: 'Team Work',
      description: 'I work well in a team and believe in the importance of communication.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I am a motivated Junior Software Developer with a passion for technology. I enjoy
              continuous learning and taking on new challenges to improve my software development
              skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="mb-4 text-gray-900">My Journey</h3>
              <p className="text-gray-600 mb-4">
                I began my journey in software development driven by curiosity and a passion for
                technology. Through university, personal projects and self-study, I have acquired
                skills in various modern technologies.
              </p>
              <p className="text-gray-600">
                Every project is an opportunity to learn something new and improve my
                problem-solving and code-writing skills.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-gray-900">Objectives</h3>
              <p className="text-gray-600 mb-4">
                My goal is to continue growing as a developer, work on interesting projects, and
                contribute to development teams where I can learn from the experiences of others and
                share my knowledge.
              </p>
              <p className="text-gray-600">
                I am always open to constructive feedback and new learning opportunities in the
                world of software development.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon className="text-orange-600" size={32} />
                  </div>
                  <h3 className="mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
