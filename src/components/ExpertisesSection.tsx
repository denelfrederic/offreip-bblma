
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ExpertisesSection = () => {
  const expertises = [
    {
      title: "Propriété Intellectuelle",
      description: "Dépôts, surveillance, audit de portefeuilles et valorisation de vos actifs immatériels.",
      icon: "🔒",
      color: "from-primary/20 to-primary/10"
    },
    {
      title: "RGPD & Cybersécurité",
      description: "Mise en conformité RGPD, audits de sécurité et accompagnement dans la gestion des données.",
      icon: "🛡️",
      color: "from-blue-500/20 to-blue-500/10"
    },
    {
      title: "Contrats & Négociation",
      description: "Rédaction et négociation de contrats IT, licences et accords de confidentialité.",
      icon: "📝",
      color: "from-green-500/20 to-green-500/10"
    },
    {
      title: "Litiges & Contentieux",
      description: "Résolution de conflits en propriété intellectuelle et accompagnement juridique.",
      icon: "⚖️",
      color: "from-purple-500/20 to-purple-500/10"
    },
    {
      title: "Projets IT Complexes",
      description: "Accompagnement juridique des projets informatiques et transformation digitale.",
      icon: "💻",
      color: "from-cyan-500/20 to-cyan-500/10"
    },
    {
      title: "Formation & Conseil",
      description: "Programmes de formation sur-mesure et conseil stratégique pour vos équipes.",
      icon: "🎓",
      color: "from-orange-500/20 to-orange-500/10"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-0 w-1/4 h-full">
        <div className="absolute top-1/4 left-0 w-full h-1/3 bg-gradient-to-r from-primary/10 to-transparent rounded-r-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Nos <span className="text-gradient">Expertises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Une approche complète et spécialisée pour protéger et valoriser 
            vos actifs immatériels dans l'économie numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertises.map((expertise, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-2xl"
            >
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${expertise.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{expertise.icon}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {expertise.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  {expertise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/savoir-faire">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Voir tout notre savoir-faire
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
