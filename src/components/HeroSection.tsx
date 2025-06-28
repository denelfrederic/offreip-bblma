
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fond avec effet de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Cabinet d'<span className="text-gradient">avocats</span> en
            <br />
            <span className="text-gradient">droit des affaires.</span>
            <br />
            Pluridisciplinaire.
            <br />
            Indépendant.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Notre mission : maîtriser vos enjeux stratégiques pour 
            défendre efficacement votre projet et vos intérêts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Découvrir nos expertises
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
            >
              Prendre rendez-vous
            </Button>
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
