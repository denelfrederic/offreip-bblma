
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
              src="/lovable-uploads/1f0b482f-4ef0-49fc-bd04-507fcd224bcf.png" 
              alt="BBLM Avocats" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Expert en propriété intellectuelle et nouvelles technologies.
              Nous accompagnons les entreprises dans la protection et la valorisation 
              de leurs actifs immatériels.
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
              <li><Link to="/comment-travaillons-nous" className="text-muted-foreground hover:text-primary transition-colors">Comment travaillons-nous ?</Link></li>
              <li><Link to="/savoir-faire" className="text-muted-foreground hover:text-primary transition-colors">Savoir-faire</Link></li>
              <li><Link to="/nos-atouts" className="text-muted-foreground hover:text-primary transition-colors">Nos atouts</Link></li>
              <li><Link to="/equipe" className="text-muted-foreground hover:text-primary transition-colors">Équipe</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-6 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">MARSEILLE</p>
                <p>3, place Félix Baret - 13286 Marseille Cedex 06</p>
                <p>E : marseille@bblma.eu - T : 04 91 33 54 56</p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">AIX-EN-PROVENCE</p>
                <p>34 cours Mirabeau - 13100 Aix-en-Provence</p>
                <p>E : aix@bblma.eu</p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">PARIS</p>
                <p>4, rue Cambon - 75001 PARIS</p>
                <p>E : paris@bblma.eu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} BBLM Avocats. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground mt-4 sm:mt-0">
            <a href="https://www.bblma.com/mentions-legales/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="https://www.bblma.com/politique-de-confidentialite/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
