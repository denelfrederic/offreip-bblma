
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/273d56e3-01a5-4b73-8eb8-cd3debae106b.png" 
              alt="BBLM Avocats" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Cabinet d'avocats en droit des affaires. Pluridisciplinaire. Indépendant.
              Notre mission : maîtriser vos enjeux stratégiques pour défendre efficacement 
              votre projet et vos intérêts.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/expertises" className="text-muted-foreground hover:text-primary transition-colors">Expertises</Link></li>
              <li><Link to="/cabinet" className="text-muted-foreground hover:text-primary transition-colors">Cabinet</Link></li>
              <li><Link to="/equipe" className="text-muted-foreground hover:text-primary transition-colors">Équipe</Link></li>
              <li><Link to="/actualites" className="text-muted-foreground hover:text-primary transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris</p>
              <p className="mt-4">
                <span className="block">Tél : +33 (0)1 23 45 67 89</span>
                <span className="block">Email : contact@bblma.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} BBLM Avocats. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground mt-4 sm:mt-0">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
