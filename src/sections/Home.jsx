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
          Aspiring Machine Learning Engineer | Data Analyst
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          I'm a passionate computer science student specializing in Machine
          Learning and Data Science. I am skilled in using Python and its
          libraries to analyze data, build predictive models, and uncover
          insights. I am currently seeking to apply these skills to solve
          complex, real-world problems.
        </p>
        <a
          href="/Europass CV (updated).pdf"
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
