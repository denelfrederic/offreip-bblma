
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart3, Target, Settings, DollarSign } from 'lucide-react';

const AuditPortefeuilles = () => {
  const objectifs = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Évaluation",
      description: "Analyse de la valeur juridique et du potentiel de votre portefeuille PI."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Alignement stratégique",
      description: "Vérification de la cohérence entre vos droits PI et vos objectifs business."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Optimisation des coûts",
      description: "Identification des économies possibles et rationalisation du portefeuille."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Valorisation",
      description: "Maximisation du retour sur investissement de vos actifs immatériels."
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
                Audit de <span className="text-gradient">Portefeuilles</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Évaluation stratégique et optimisation de vos actifs de propriété intellectuelle 
                pour maximiser leur valeur et leur impact business.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Un audit de portefeuille de propriété intellectuelle permet d'évaluer la pertinence, 
                la valeur et l'efficacité de vos droits PI dans le contexte de votre stratégie d'entreprise.
              </p>
              <p className="leading-relaxed mb-6">
                Cette analyse approfondie vous aide à prendre des décisions éclairées sur la 
                maintenance, l'exploitation ou l'abandon de certains droits, tout en identifiant 
                les opportunités de valorisation et d'optimisation.
              </p>
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Objectifs de <span className="text-gradient">l'audit</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une approche méthodique pour optimiser la valeur de vos actifs immatériels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objectifs.map((objectif, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      {objectif.icon}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {objectif.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {objectif.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Notre <span className="text-gradient">méthodologie</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inventaire exhaustif</h3>
                  <p className="text-muted-foreground">Cartographie complète de tous vos droits de propriété intellectuelle.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analyse de valeur</h3>
                  <p className="text-muted-foreground">Évaluation de la valeur stratégique et financière de chaque actif.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Recommandations stratégiques</h3>
                  <p className="text-muted-foreground">Plan d'action personnalisé pour optimiser votre portefeuille.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mise en œuvre</h3>
                  <p className="text-muted-foreground">Accompagnement dans l'exécution des recommandations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Optimisez votre <span className="text-gradient">portefeuille PI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Découvrez le potentiel inexploité de vos actifs de propriété intellectuelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Demander un audit</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/savoir-faire">Retour aux services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditPortefeuilles;
