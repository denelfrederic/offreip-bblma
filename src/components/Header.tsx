
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'ÉQUIPE', href: '/equipe' },
    { name: 'COMMENT TRAVAILLONS-NOUS', href: '/comment-travaillons-nous' },
    { name: 'EXPERTISES COMPLÉMENTAIRES', href: '/nos-atouts' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - affiché sur toutes les pages */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1f0b482f-4ef0-49fc-bd04-507fcd224bcf.png" 
                alt="BBLM Avocats" 
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className={`hidden lg:flex items-center space-x-8 ${isHomePage ? 'flex-1 justify-center' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border mt-6 pt-6">
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
