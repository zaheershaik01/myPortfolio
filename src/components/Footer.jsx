import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-5 px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-white mb-2 sm:mb-0"> Copyright
          &copy; {new Date().getFullYear()} Shaik Zaheer | All rights reserved.
        </p>
        <div className="flex space-x-6 text-white">
          <a
            href="mailto:zaheershaik2925@gmail.com"
            className="flex items-center hover:text-purple-400 transition"
          >
            <Mail className="w-5 h-5 mr-1" />
            Email
          </a>
          <a
            href="https://github.com/zaheershaik01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-purple-400 transition"
          >
            <Github className="w-5 h-5 mr-1" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-zaheer-01zr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-purple-400 transition"
          >
            <Linkedin className="w-5 h-5 mr-1" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




