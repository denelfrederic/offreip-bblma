
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExpertisesSection = () => {
  const expertises = [
    {
      title: "Droit des Sociétés",
      description: "Création, restructuration, fusion-acquisition, gouvernance d'entreprise et accompagnement juridique des dirigeants.",
      icon: "🏢"
    },
    {
      title: "Droit Commercial",
      description: "Contrats commerciaux, distribution, concurrence déloyale, propriété intellectuelle et litiges commerciaux.",
      icon: "🤝"
    },
    {
      title: "Droit du Travail",
      description: "Relations individuelles et collectives, restructurations, contentieux prud'homal et négociation sociale.",
      icon: "👥"
    },
    {
      title: "Droit Fiscal",
      description: "Optimisation fiscale, contrôles fiscaux, contentieux fiscal et accompagnement des opérations de croissance.",
      icon: "📊"
    },
    {
      title: "Droit Immobilier",
      description: "Transactions immobilières, baux commerciaux, construction et urbanisme, contentieux immobilier.",
      icon: "🏠"
    },
    {
      title: "Contentieux & Arbitrage",
      description: "Litiges commerciaux, arbitrage national et international, médiation et résolution alternative des conflits.",
      icon: "⚖️"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-gradient">Expertises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une approche pluridisciplinaire pour répondre à tous vos besoins juridiques 
            avec l'expertise et la réactivité que méritent vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {expertise.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {expertise.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {expertise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Voir toutes nos expertises
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
