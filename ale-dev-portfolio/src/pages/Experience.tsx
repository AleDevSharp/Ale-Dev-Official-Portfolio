import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { Card } from '../components/card';

/**
 * Experience component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Experience() {
  // Define education
  const education = [
    {
      degree: "Master's Degree in Computer Science – Software Development & Technologies",
      institution: 'University of Camerino (UNICAM)',
      location: 'Camerino, Italy',
      period: 'Sept 2024 - Present',
      description:
        "Master's program focusing on advanced software development, software architecture, Agile methodologies, and emerging technologies like blockchain.",
      achievements: [
        'Specialized in software architecture, Agile practices, and advanced programming',
        'Working on sophisticated projects and research in software engineering',
        'Deepening expertise in full-stack development, modern technologies, and best practices',
      ],
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: 'University of Camerino (UNICAM)',
      location: 'Camerino, Italy',
      period: 'Sept 2020 - Apr 2024',
      description:
        "Bachelor's degree in Computer Science covering programming, operating systems, databases, networks, and software fundamentals.",
      achievements: [
        'Completed projects spanning software development, databases, and network applications',
        'Gained a well-rounded understanding of computer science principles',
        'Participated in team projects and collaborative coding exercises',
      ],
    },
    {
      degree: 'Diploma from ITIS “A. Meucci” – Information Technology and Telecommunications',
      institution: "ITIS 'A. Meucci'",
      location: 'Castelfidardo, Italy',
      period: 'Sept 2015 - June 2020',
      description: 'High school diploma focused on computer science and telecommunications.',
      achievements: [
        'Studied programming, networking, and computer systems',
        'Participated in mathematics and informatics competitions',
      ],
    },
  ];

  // Define work experiences
  const workExperiences = [
    {
      title: 'Junior Software Developer',
      company: 'Antos Srl',
      location: 'Marche, Italy',
      period: 'Sep 2023 - Oct 2025',
      description:
        'I worked on the Bravo Manufacturing development team, handling both the frontend and backend of web applications using Angular, .NET Core, and C#. I also managed interaction with SQL databases, contributing to the design and implementation of new features.',
      achievements: [
        'Full-stack web application development with Angular, .NET Core, and C#',
        'SQL database design and management',
        'Effective collaboration within an agile development team',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Education & Experience</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              My professional and educational background that led me to become a software developer.
            </p>
          </div>

          {/* Mobile: Education first, then Work Experience */}
          <div className="block lg:hidden">
            {/* Education - First on Mobile */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <GraduationCap className="text-orange-600" size={24} />
                </div>
                <h3 className="text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-orange-600 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{edu.description}</p>
                    {edu.achievements && (
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Work Experience - Second on Mobile */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Briefcase className="text-orange-600" size={24} />
                </div>
                <h3 className="text-gray-900">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {workExperiences.map((exp, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-1">{exp.title}</h4>
                      <p className="text-orange-600 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12">
            {/* Work Experience - First on Desktop */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Briefcase className="text-orange-600" size={24} />
                </div>
                <h3 className="text-gray-900">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {workExperiences.map((exp, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-1">{exp.title}</h4>
                      <p className="text-orange-600 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education - Second on Desktop */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <GraduationCap className="text-orange-600" size={24} />
                </div>
                <h3 className="text-gray-900">Training</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-orange-600 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{edu.description}</p>
                    {edu.achievements && (
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
