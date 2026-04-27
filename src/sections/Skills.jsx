import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "MySql", "React.JS", "Tailwind CSS"],
    },
    {
      title: "CS Fundamentals",
      skills: ["OOPS", "DBMS", "Computer Networks", "OS", "Software Engineering", "Discrete Math"],
    },
    {
      title: "Technologies",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "AI", "Frontend Dev", "Data Analytics"],
    },
    {
      title: "Tools",
      skills: ["VS Code", "IntelliJ", "Jupyter", "GIT & GitHub", "MS Excel", "Power BI"],
    },
    {
      title: "Interests",
      skills: ["Running", "Coding", "Reading", "Badminton", "Volley Ball"],
    },
    {
      title: "Languages",
      skills: ["English", "Urdu", "Telugu", "Hindi", "Arabic - basic"],
    },
  ];

  return (
    <section
      id="skills"
      className="h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 px-6 py-10 text-white flex flex-col justify-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">
              {cat.title}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-2">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-purple-900/40 border border-purple-500/30 text-gray-200 px-3 py-1 rounded-full text-sm"
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
};

export default Skills;
