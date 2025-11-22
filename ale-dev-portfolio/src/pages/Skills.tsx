import { Card } from '../components/card';

/**
 * Skills component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Skills() {
  // The skill categories
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

  // The badge skill colors
  const skillColors: Record<string, { bg: string; text: string }> = {
    Angular: { bg: '#ef4444', text: '#ffffff' },
    React: { bg: '#06b6d4', text: '#ffffff' },
    TypeScript: { bg: '#2563eb', text: '#ffffff' },
    HTML: { bg: '#f97316', text: '#ffffff' },
    'CSS/SCSS': { bg: '#3b82f6', text: '#ffffff' },

    'C#': { bg: '#9333ea', text: '#ffffff' },
    '.NET': { bg: '#7e22ce', text: '#ffffff' },
    'Node.js': { bg: '#16a34a', text: '#ffffff' },
    Express: { bg: '#1f2937', text: '#ffffff' },
    Python: { bg: '#facc15', text: '#111827' },
    'Rest API': { bg: '#4f46e5', text: '#ffffff' },
    Websocket: { bg: '#1d4ed8', text: '#ffffff' },

    'SQL Express': { bg: '#dc2626', text: '#ffffff' },
    MongoDB: { bg: '#22c55e', text: '#ffffff' },
    Supabase: { bg: '#059669', text: '#ffffff' },
    PostgreSQL: { bg: '#1e3a8a', text: '#ffffff' },
    MySQL: { bg: '#ea580c', text: '#ffffff' },

    Git: { bg: '#f97316', text: '#ffffff' },
    GitHub: { bg: '#1f2937', text: '#ffffff' },
    'VS Code': { bg: '#2563eb', text: '#ffffff' },
    'Visual Studio': { bg: '#7e22ce', text: '#ffffff' },
    Postman: { bg: '#f97316', text: '#ffffff' },
    npm: { bg: '#ef4444', text: '#ffffff' },
    '...': { bg: '#6b7280', text: '#ffffff' },
  };

  // The stats for personal projects etc.
  const stats = [
    { number: '10+', label: 'Personal Projects' },
    { number: '10+', label: 'Technologies Studied' },
    { number: '1000+', label: 'Code Contributions' },
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
                  {category.skills.map((skill, skillIndex) => {
                    // Recupero colore
                    let colors = skillColors[skill];

                    // Prova variazioni (senza slash, senza spazi, lowercase...)
                    if (!colors) {
                      const variations = [
                        skill,
                        skill.replace('/', ''),
                        skill.replace(' ', ''),
                        skill.toLowerCase(),
                      ];

                      for (const variation of variations) {
                        if (skillColors[variation]) {
                          colors = skillColors[variation];
                          break;
                        }
                      }
                    }

                    // Fallback
                    const finalColors = colors || { bg: '#6b7280', text: '#ffffff' };

                    return (
                      <span
                        key={skillIndex}
                        style={{
                          backgroundColor: finalColors.bg,
                          color: finalColors.text,
                        }}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
