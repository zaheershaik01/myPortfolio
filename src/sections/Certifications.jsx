import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Research Writing & Presentation",
      description:
        "Certified in 'The A-Z of Research Writing' and 'Master the Art of Research Presentations'",
      file: "/certificates/Certificate1.pdf",
    },
    {
      title: "Cybersecurity Internship - Verzeo",
      description:
        "Completed a hands-on internship focused on cybersecurity fundamentals and foundational cybersecurity topics.",
      file: "/certificates/Cybersecurity internship.pdf",
    },
    {
      title: "Campus Delegate Intern",
      description:
        "Selected as a Campus Delegate Intern at WeMakeScholars (HEST 2025) under the Digital India Campaign.",
      file: "/certificates/HEST OfferLetter.pdf",
    },
    {
      title: "Software Engineer Intern",
      description:
        "Certified for clearing the Software Engineer Intern role assessment by HackerRank.",
      file: "/certificates/SWE Intern - HackerRank.pdf",
    },
    {
      title: "NCAT 2025 - Naukri Campus",
      description:
        "Achieved the 58th percentile in NCAT 2025, demonstrating strong aptitude in Quantitative, Reasoning, and Verbal ability.",
      file: "/certificates/NCAT result.pdf",
    },
    {
      title: "ML Project - SAK Informatics",
      description:
        "Completed a real-time project on Remote Patient Monitoring using ML for IoT Healthcare Data.",
      file: "/certificates/ML Project.jpg",
    },
  ];

  const handleOpenCert = (file) => {
    window.open(file, "_blank");
  };

  return (
    <section
      id="certifications"
      className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 px-6 py-20 text-white flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
        Certifications
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2 hover:scale-105 duration-300 text-center"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <button
              onClick={() => handleOpenCert(cert.file)}
              className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-full transition transform active:scale-95"
            >
              Show Certificate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
