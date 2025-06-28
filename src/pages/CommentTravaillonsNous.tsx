
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
      details: [
        "Audit de votre situation actuelle",
        "Identification des enjeux prioritaires",
        "Définition des objectifs stratégiques"
      ]
    },
    {
      title: "Audit approfondi",
      description: "Diagnostic complet de vos actifs immatériels et de votre niveau de protection.",
      details: [
        "Cartographie de vos actifs",
        "Analyse des risques et opportunités",
        "Évaluation de la conformité réglementaire"
      ]
    },
    {
      title: "Plan d'action personnalisé",
      description: "Élaboration d'une feuille de route sur-mesure avec priorités et échéances.",
      details: [
        "Stratégie de protection adaptée",
        "Planning de mise en œuvre détaillé",
        "Budget prévisionnel transparent"
      ]
    },
    {
      title: "Mise en œuvre",
      description: "Exécution rigoureuse des actions définies avec accompagnement continu.",
      details: [
        "Dépôts et formalités administratives",
        "Négociation et rédaction contractuelle",
        "Formation de vos équipes"
      ]
    },
    {
      title: "Suivi et optimisation",
      description: "Surveillance active et ajustements réguliers pour maximiser la protection.",
      details: [
        "Veille concurrentielle et technologique",
        "Renouvellements et maintenances",
        "Reporting périodique détaillé"
      ]
    },
    {
      title: "Accompagnement long terme",
      description: "Relation de confiance durable pour faire évoluer votre stratégie PI.",
      details: [
        "Conseil stratégique continu",
        "Adaptation aux évolutions réglementaires",
        "Support réactif en cas d'urgence"
      ]
    }
  ];

  const atouts = [
    {
      title: "Une vision entrepreneuriale",
      description: "Nous comprenons les enjeux business et accompagnons votre développement avec une approche stratégique."
    },
    {
      title: "De l'intelligence dans la gestion des actifs immatériels",
      description: "Notre expertise nous permet d'optimiser la valorisation et la protection de votre patrimoine intellectuel."
    },
    {
      title: "Des conseils engagés pour permettre d'arbitrer facilement",
      description: "Nous vous donnons les clés pour prendre les bonnes décisions en toute connaissance de cause."
    },
    {
      title: "Un accompagnement sur mesure",
      description: "Chaque stratégie est personnalisée selon vos spécificités sectorielles et vos objectifs de croissance."
    },
    {
      title: "Une approche fiscale et corporate",
      description: "Intégration complète des aspects fiscaux et corporate dans votre stratégie de propriété intellectuelle."
    },
    {
      title: "Une gestion pragmatique pour maîtriser les coûts",
      description: "Optimisation du rapport coût-efficacité avec une approche transparente et prévisible des investissements."
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
                Six piliers fondamentaux qui définissent notre approche unique de la propriété intellectuelle alignée sur vos objectifs business et vos contraintes.
              </p>
            </div>
          </div>
        </section>

        {/* Décideurs Magazine Recognition Section */}
        <section className="py-16 bg-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img 
                src="/lovable-uploads/2d39cafb-12a8-4d25-8d92-640a3b95b0b9.png" 
                alt="Décideurs Magazine" 
                className="h-16 mb-6"
              />
              <div className="text-2xl font-bold text-primary mb-2">2025</div>
              <p className="text-lg text-foreground font-semibold">
                "Excellent" en gestion de portefeuilles de marques, dessins et modèles
              </p>
            </div>
          </div>
        </section>

        {/* Nos Atouts Section */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos <span className="text-gradient">atouts</span>
              </h2>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {atouts.map((atout, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {atout.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {atout.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Notre <span className="text-gradient">méthode</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un processus structuré en 6 étapes pour une approche complète et efficace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {etapes.map((etape, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="text-sm text-primary font-semibold">Étape {index + 1}</div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {etape.title}
                      </CardTitle>
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
      </main>
      <Footer />
    </div>
  );
};

export default CommentTravaillonsNous;
