
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommentTravaillonsNous = () => {
  const etapes = [
    {
      title: "Étude préliminaire",
      description: "Analyse de votre contexte et de vos besoins spécifiques pour définir la stratégie optimale.",
      icon: "🔍",
      details: [
        "Audit de votre situation actuelle",
        "Identification des enjeux prioritaires",
        "Définition des objectifs stratégiques"
      ]
    },
    {
      title: "Audit approfondi",
      description: "Diagnostic complet de vos actifs immatériels et de votre niveau de protection.",
      icon: "📊",
      details: [
        "Cartographie de vos actifs",
        "Analyse des risques et opportunités",
        "Évaluation de la conformité réglementaire"
      ]
    },
    {
      title: "Plan d'action personnalisé",
      description: "Élaboration d'une feuille de route sur-mesure avec priorités et échéances.",
      icon: "📋",
      details: [
        "Stratégie de protection adaptée",
        "Planning de mise en œuvre détaillé",
        "Budget prévisionnel transparent"
      ]
    },
    {
      title: "Mise en œuvre",
      description: "Exécution rigoureuse des actions définies avec accompagnement continu.",
      icon: "⚡",
      details: [
        "Dépôts et formalités administratives",
        "Négociation et rédaction contractuelle",
        "Formation de vos équipes"
      ]
    },
    {
      title: "Suivi et optimisation",
      description: "Surveillance active et ajustements réguliers pour maximiser la protection.",
      icon: "📈",
      details: [
        "Veille concurrentielle et technologique",
        "Renouvellements et maintenances",
        "Reporting périodique détaillé"
      ]
    },
    {
      title: "Accompagnement long terme",
      description: "Relation de confiance durable pour faire évoluer votre stratégie PI.",
      icon: "🤝",
      details: [
        "Conseil stratégique continu",
        "Adaptation aux évolutions réglementaires",
        "Support réactif en cas d'urgence"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Vos enjeux, <span className="text-gradient">notre savoir-faire</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Notre méthode éprouvée en 6 étapes pour une protection optimale 
                de vos actifs immatériels et une stratégie PI alignée sur vos objectifs business.
              </p>
            </div>
          </div>
        </section>

        {/* Étapes Section */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {etapes.map((etape, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-3xl">{etape.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold">Étape {index + 1}</div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {etape.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {etape.description}
                    </p>
                    <ul className="space-y-2">
                      {etape.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Prêt à protéger vos <span className="text-gradient">actifs immatériels</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous pour un premier échange gratuit et découvrez comment 
              notre méthode peut s'adapter à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Planifier un rendez-vous</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/savoir-faire">Voir notre savoir-faire</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommentTravaillonsNous;
