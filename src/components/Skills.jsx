const Skills = () => {
     const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 85 },
        { name: "Middleware", level: 88 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 },
        { name: "Git/GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 70 }
      ]
    }
  ];
    return (
         <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-red-500">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A comprehensive toolkit for building modern web applications from frontend to backend
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card p-8 rounded-xl border border-border hover:border-green-500/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm  text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                      <div 
                        className="h-2  bg-red-500 to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript", 
              "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub", "VS Code", "Postman"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-red-400/10 text-red-500 rounded-lg font-medium hover:text-green-500/50  transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Skills;