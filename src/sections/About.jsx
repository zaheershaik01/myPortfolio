import { GraduationCap, School, MapPin } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6 py-20 flex items-center justify-center text-white"
    >
      <div className="max-w-4xl bg-black/20 backdrop-blur-lg rounded-2xl p-10 text-center shadow-2xl">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I'm <span className="text-purple-300 font-semibold">Shaik Zaheer</span>, a passionate computer science student focused on building beautiful and performant frontend web apps using React.js and Tailwind CSS. I’m also growing my skills in Data Structures, System Design, and Software Engineering. My ambition is to contribute to impactful software at top-tier tech companies.
        </p>

        <div className="space-y-4 text-left text-gray-300 mt-6">
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-purple-400 w-5 h-5" />
            <p>
              B.Tech CSE @ Kommuri Pratap Reddy Institute of Technology, Hyderabad — <span className="text-purple-300">CGPA: 8.5</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <School className="text-purple-400 w-5 h-5" />
            <p>
              Intermediate @ TMR Junior College, Khammam — <span className="text-purple-300">91.5%</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-purple-400 w-5 h-5" />
            <p>Based in Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

