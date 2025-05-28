const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-extrabold text-purple-300 tracking-wide">
          &lt;Zaheer.dev/&gt;
        </h1>
        <div className="space-x-6 hidden md:flex text-lg font-medium">
          <a href="#home" className="hover:text-purple-300 transition duration-300">Home</a>
          <a href="#about" className="hover:text-purple-300 transition duration-300">About</a>
          <a href="#skills" className="hover:text-purple-300 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-purple-300 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-purple-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



