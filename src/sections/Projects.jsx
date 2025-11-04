const Projects = () => {
  const projects = [
    {
      title: "Remote Patient Monitoring",
      description: "Remote Parkinson's detection using voice data and Machine Learing via Internet of Things.",
      github: "https://github.com/zaheershaik01/remote-patient-monitoring",
    },
    {
      title: "Medical Imaging Diagnosis",
      description: "A comparative analysis of Machine Learning classifiers for diagnosing diseases from medical images",
      github: "https://github.com/zaheershaik01/medical-imaging-diagnosis",
    },
    {
      title: "Environmental State Classification",
      description: "Classification of environmental IoT device states using Machine Learning to analyze real-time sensor telemetry data.",
      github: "https://github.com/zaheershaik01/environmental-state-classification",
    },
    {
      title: "SecurePass App",
      description: "Your Secure Password Storage App.",
      github: "https://github.com/zaheershaik01/SecurePass",
      live: "https://secure-pass-sand.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6 py-20 text-white flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded-full text-white transition transform active:scale-95"
              >
                GitHub
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-700 hover:bg-indigo-800 py-2 px-4 rounded-full text-white transition transform active:scale-95"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
