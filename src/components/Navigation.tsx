import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 gradient-elegant border-b border-spa-primary/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
              <span className="font-playfair font-bold text-spa-text">E</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-spa-text">Eva Spa</h1>
              <p className="text-xs text-spa-text-light">Beauty Place</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-spa-accent font-semibold'
                    : 'text-spa-text hover:text-spa-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8165806431"
              className="flex items-center space-x-1 text-spa-text hover:text-spa-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call</span>
            </a>
            <a
              href="https://wa.me/8165806431"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-spa-text hover:text-spa-accent transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <button className="btn-spa-gold text-sm px-6 py-2">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-spa-text hover:text-spa-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-spa-neutral/95 backdrop-blur-md rounded-b-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-spa-accent font-semibold'
                      : 'text-spa-text hover:text-spa-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center space-x-4 pt-4">
                <a
                  href="tel:8165806431"
                  className="btn-spa-outline text-sm px-4 py-2"
                >
                  <Phone className="h-4 w-4 inline mr-1" />
                  Call
                </a>
                <button className="btn-spa-gold text-sm px-4 py-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;