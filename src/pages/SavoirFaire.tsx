import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SavoirFaire = () => {
  const services = [
    {
      title: "Recherche d'antériorité",
      description: "Analyses préalables approfondies pour sécuriser vos innovations.",
      href: "/savoir-faire/recherche-anteriorite"
    },
    {
      title: "Dépôt & renouvellement",
      description: "Gestion complète de vos portefeuilles de marques et brevets.",
      href: "/savoir-faire/depot-renouvellement"
    },
    {
      title: "Surveillance",
      description: "Veille active pour protéger vos droits contre les contrefaçons.",
      href: "/savoir-faire/surveillance"
    },
    {
      title: "Audit de portefeuilles",
      description: "Évaluation stratégique et optimisation de vos actifs PI.",
      href: "/savoir-faire/audit-portefeuilles"
    },
    {
      title: "RGPD",
      description: "Mise en conformité et accompagnement dans la protection des données.",
      href: "/savoir-faire/rgpd"
    },
    {
      title: "Cybersécurité",
      description: "Conseil juridique pour la sécurisation de vos systèmes d'information.",
      href: "/savoir-faire/cybersecurite"
    },
    {
      title: "Contrats",
      description: "Rédaction et négociation d'accords IT et de licences.",
      href: "/savoir-faire/contrats"
    },
    {
      title: "Litiges & contentieux",
      description: "Résolution de conflits et défense de vos intérêts en justice.",
      href: "/savoir-faire/litiges-contentieux"
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
                Notre <span className="text-gradient">Savoir-faire</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction - Texte raccourci */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                La propriété intellectuelle constitue aujourd'hui un levier stratégique majeur pour les entreprises souhaitant se différencier, innover et créer de la valeur dans un environnement économique de plus en plus concurrentiel.
              </p>
              <p className="leading-relaxed">
                Notre équipe pluridisciplinaire maîtrise l'ensemble des problématiques liées à la propriété intellectuelle et aux nouvelles technologies, du conseil stratégique à la résolution de litiges, en passant par l'accompagnement dans les opérations de croissance externe et les négociations contractuelles complexes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une expertise complète pour tous vos besoins en propriété intellectuelle et nouvelles technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <Link to={service.href}>En savoir plus</Link>
                    </Button>
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

export default SavoirFaire;
