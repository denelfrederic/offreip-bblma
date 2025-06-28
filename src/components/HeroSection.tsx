
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
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-bl from-muted/30 to-transparent rounded-bl-[300px]"></div>
        <div className="absolute bottom-1/4 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-muted/20 to-transparent rounded-tl-[200px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div>
            <div className="mb-16">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
                Brand
                <br />
                <span className="text-gradient text-7xl sm:text-8xl lg:text-9xl">Factory</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground font-light mb-16 leading-relaxed">
                Solutions en droit de la propriété intellectuelle
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/savoir-faire">Découvrir nos services</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-primary px-12 py-8 text-xl font-semibold rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          {/* Logo Brand Factory */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/3aa2238f-b304-4e78-9f0d-2386609be957.png" 
                alt="Brand Factory" 
                className="w-96 h-auto"
              />
              
              {/* Éléments décoratifs subtils */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-muted/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
