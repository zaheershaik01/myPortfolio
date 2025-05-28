const Home = () => {
  return (
    <section
      id="home"
      className="pt-[72px] scroll-mt-20 min-h-screen flex items-center justify-center px-4 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900"
    >
      <div className="text-center max-w-xl">
        <img
          src="/zaheer.jpg"
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl mx-auto mb-6 border-4 border-purple-500"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Hi, I'm Shaik Zaheer
        </h1>
        <p className="text-md md:text-lg text-gray-300 mb-4">
          Aspiring Software Developer | Frontend Developer
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          I'm a passionate frontend developer skilled in building responsive
          and scalable apps using React JS and Tailwind CSS. I'm also learning
          Data Structures, Algorithms, and aiming to become a top-tier software
          engineer.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-purple-700 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;

