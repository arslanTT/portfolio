const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication & Authorization",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "SQL Basics"],
  },
  {
    category: "AI & Tools",
    skills: ["AI API Integration", "ImageKit", "Git & GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Skills</h2>
      <p className="mt-2 text-center text-gray-600">Technologies I work with</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
