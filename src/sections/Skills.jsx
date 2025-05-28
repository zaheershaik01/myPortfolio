const Skills = () => {
  const skillCategories = [
    { title: "Programming", skills: ["Python", "Java", "JavaScript", "HTML/CSS", "MongoDB", "React.JS", "Tailwind CSS"] },
    { title: "CS Fundamentals", skills: ["OOPS", "DBMS", "Computer Networks", "Operating System", "Software Engineering", "Discrete Math"] },
    { title: "Technical", skills: ["Data Structures", "Algorithms", "Frontend Development", "Microsoft Office"] },
    { title: "Platforms", skills: ["Windows", "Git", "GitHub", "IntelliJ IDEA"] },
    { title: "Languages", skills: ["English", "Urdu", "Telugu", "Hindi"] },
    { title: "Interests", skills: ["Running", "Coding", "Badminton", "Volleyball"] },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/50 transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{cat.title}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {cat.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

