import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-bold text-2xl text-primary mb-4 block">
              Alex<span className="text-secondary">Morgan</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-secondary transition-colors">About Me</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-secondary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">San Francisco, CA</li>
              <li className="text-gray-600">alex.morgan@example.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Alex Morgan. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
