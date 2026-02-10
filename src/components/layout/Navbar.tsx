import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于', path: '/about' },
    { name: '项目', path: '/projects' },
    { name: '联系我', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Code2 className="h-8 w-8 text-secondary" />
          <span>Alex<span className="text-secondary">Morgan</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                location.pathname === link.path
                  ? 'text-secondary font-semibold'
                  : 'text-gray-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            雇佣我
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6 flex flex-col gap-6',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'text-2xl font-semibold border-b border-gray-100 pb-4',
              location.pathname === link.path ? 'text-secondary' : 'text-gray-800'
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 w-full py-4 bg-primary text-white text-center font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors"
        >
          雇佣我
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
