
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ExpertisesSection = () => {
  const expertises = [
    {
      title: "Propriété Intellectuelle",
      description: "Dépôts, surveillance, audit de portefeuilles et valorisation de vos actifs immatériels.",
      icon: "🔒"
    },
    {
      title: "RGPD & Cybersécurité",
      description: "Mise en conformité RGPD, audits de sécurité et accompagnement dans la gestion des données.",
      icon: "🛡️"
    },
    {
      title: "Contrats & Négociation",
      description: "Rédaction et négociation de contrats IT, licences et accords de confidentialité.",
      icon: "📝"
    },
    {
      title: "Litiges & Contentieux",
      description: "Résolution de conflits en propriété intellectuelle et accompagnement juridique.",
      icon: "⚖️"
    },
    {
      title: "Projets IT Complexes",
      description: "Accompagnement juridique des projets informatiques et transformation digitale.",
      icon: "💻"
    },
    {
      title: "Formation & Conseil",
      description: "Programmes de formation sur-mesure et conseil stratégique pour vos équipes.",
      icon: "🎓"
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
            Une approche complète et spécialisée pour protéger et valoriser 
            vos actifs immatériels dans l'économie numérique.
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
          <Link to="/savoir-faire">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Voir tout notre savoir-faire
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
