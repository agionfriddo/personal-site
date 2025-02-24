"use client";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A minimalist personal website built with Next.js, Tailwind CSS, and TypeScript. Features dark mode, smooth animations, and responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/agionfriddo/personal-site",
  },
  {
    title: "Border Buddy",
    description:
      "An application to help immigrants and travelers connect with legal representation and support when detained at US airports. Awarded 'Hack of the Month' by NYC Tech Meetup.",
    technologies: ["Node.js", "React", "Express", "PostgreSQL", "Twilio API"],
    github: "https://github.com/BorderBuddy/Border-Buddy",
  },
  {
    title: "CT Amendment Tracker",
    description:
      "An automated system that monitors and tracks amendments to bills in the Connecticut State Legislature, notifying stakeholders of changes in real-time via email notifications.",
    technologies: ["Node.js", "AWS Lambda", "AWS SES", "DynamoDB", "Cheerio"],
    github: "https://github.com/agionfriddo/ct-amendment-tracker",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 transition-colors duration-200 dark:text-white font-mono">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full border dark:border-gray-700 rounded-xl p-6 transition-all duration-200 
              hover:shadow-lg dark:hover:shadow-gray-800 bg-white dark:bg-gray-800
              hover:border-accent-dark dark:hover:border-accent-light"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 transition-colors duration-200 dark:text-white font-mono">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-light dark:bg-neutral-dark 
                      text-accent-dark dark:text-accent-light font-mono
                      transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-dark dark:text-accent-light hover:opacity-80 transition-all duration-200 font-mono text-sm"
                  >
                    View on GitHub →
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-dark dark:text-accent-light hover:opacity-80 transition-all duration-200 font-mono text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
