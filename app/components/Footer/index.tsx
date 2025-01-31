import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-base-100">
      <div className="flex flex-col sm:flex-row justify-around items-center py-8">
        <p className="text-sm text-gray-300 mb-4 sm:mb-0">
          {new Date().getFullYear()} &copy; Luís Lança
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/lancaluis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/lancaluis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/nopiqueviajante"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-200"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
