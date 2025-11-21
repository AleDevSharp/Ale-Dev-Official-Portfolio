import { Card } from '../components/card';

/**
 * Skills component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS/SCSS'],
    },
    {
      category: 'Backend',
      skills: ['C#', '.NET', 'Node.js', 'Express', 'Python', 'Rest API', 'Websocket'],
    },
    {
      category: 'Database',
      skills: ['SQL Express', 'MongoDB', 'Supabase', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman', 'npm', '...'],
    },
  ];

  const stats = [
    { number: '10+', label: 'Personal Projects' },
    { number: '15+', label: 'Technologies Studied' },
    { number: '1000+', label: 'Commit' },
    { number: '∞', label: 'Desire to Learn' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Skills</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The technologies and tools I have worked with during my learning journey and personal
              project development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white border border-gray-200 shadow-sm"
              >
                <div className="text-2xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-white border border-gray-200 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
