
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fond avec effet de profondeur et formes géométriques */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"></div>
      
      {/* Formes géométriques inspirées du design */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-[200px] transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-tl-[150px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div>
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Brand
                <br />
                <span className="text-gradient text-6xl sm:text-7xl lg:text-8xl">Factory</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light mb-8 leading-relaxed">
                Intellectual Property Law Solutions
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                Nous accompagnons les entreprises dans la protection et la valorisation 
                de leurs actifs immatériels avec expertise et pragmatisme. Votre propriété 
                intellectuelle est notre priorité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/savoir-faire">Découvrir nos services</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-primary px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          {/* Logo section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl lg:text-8xl font-bold text-foreground mb-4">
                    bb<span className="text-primary">l</span>m
                  </div>
                  <div className="text-primary text-xl font-semibold">
                    avocats
                  </div>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
