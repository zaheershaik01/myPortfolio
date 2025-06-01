const Projects = () => {
  const projects = [
    {
      title: "SecurePass App",
      description: "Your Secure Password Storage App.",
      github: "https://github.com/zaheershaik01/SecurePass",
      live: "https://secure-pass-sand.vercel.app/",
    },
    {
      title: "AI EXPLORER",
      description: "Discover AI tools tailored for productivity, creativity, and innovation—all in one place.",
      github: "https://github.com/zaheershaik01/ai-explorer",
      live: "https://ai-explorer-livid.vercel.app/",
    },
    {
      title: "Job Tracker App",
      description: "Console-based Java application to track job applications.",
      github: "https://github.com/zaheershaik01/job-application-tracker",
    },
    {
      title: "Remote Patient Monitoring",
      description: "Remote Parkinson's detection using voice data and Machine Learing via Internet of Things.",
      github: "https://github.com/zaheershaik01/remote-patient-monitoring",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-purple-500/50">
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub</a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;