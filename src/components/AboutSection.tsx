
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Un cabinet <span className="text-gradient">indépendant</span> 
              à votre service
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Fondé sur les valeurs d'indépendance, d'excellence et de proximité, 
                notre cabinet accompagne les entreprises, dirigeants et particuliers 
                dans leurs enjeux juridiques les plus complexes.
              </p>
              <p>
                Notre approche se distingue par une connaissance approfondie des secteurs 
                d'activité de nos clients, nous permettant d'apporter des solutions 
                pragmatiques et sur-mesure.
              </p>
              <p>
                Nous privilégions une relation de confiance durable, basée sur 
                l'écoute, la réactivité et la transparence dans nos conseils.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Découvrir notre cabinet
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
                    <p className="text-muted-foreground">Expertise reconnue et solutions innovantes</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Proximité</h3>
                    <p className="text-muted-foreground">Relation de confiance et accompagnement personnalisé</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Réactivité</h3>
                    <p className="text-muted-foreground">Réponses rapides et efficaces à vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
