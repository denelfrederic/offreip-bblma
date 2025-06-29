
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Search, FileText, Shield } from 'lucide-react';

const RechercheAnteriorite = () => {
  const avantages = [
    "Réduction significative des risques juridiques",
    "Économies sur les coûts de dépôt et de défense",
    "Stratégie de protection optimisée",
    "Identification d'opportunités de liberté d'exploitation"
  ];

  const etapes = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Analyse du projet",
      description: "Étude approfondie de votre innovation et définition des axes de recherche prioritaires."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Recherche documentaire",
      description: "Investigation dans les bases de données mondiales et analyse des antériorités pertinentes."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Rapport détaillé",
      description: "Synthèse complète avec recommandations stratégiques pour sécuriser votre projet."
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
                Recherches <span className="text-gradient">d'antériorités</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Sécurisez vos innovations grâce à nos analyses préalables approfondies. 
                Identifiez les risques et optimisez votre stratégie de protection.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Avant tout dépôt de marque ou dessin et modèle, des recherches d'antériorités approfondies 
                s'avèrent indispensables pour évaluer les risques de contrefaçon et optimiser votre stratégie de protection.
              </p>
              <p className="leading-relaxed mb-6">
                Notre équipe d'experts réalise des analyses documentaires complètes dans les bases de données 
                nationales et internationales, vous permettant de prendre des décisions éclairées et de 
                sécuriser vos investissements en innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Notre <span className="text-gradient">Démarche</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un processus rigoureux en trois étapes pour une analyse complète et fiable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {etapes.map((etape, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      {etape.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {etape.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {etape.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Pourquoi faire des recherches <span className="text-gradient">d'antériorités</span> ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{avantage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sécurisez votre <span className="text-gradient">innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous pour une analyse personnalisée de vos besoins en recherches d'antériorités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Demander un devis</Link>
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

export default RechercheAnteriorite;
