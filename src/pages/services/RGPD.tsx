
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, FileText, Users, AlertCircle } from 'lucide-react';

const RGPD = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Mise en conformité",
      description: "Audit complet de vos traitements de données et mise en place des mesures nécessaires."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Documentation",
      description: "Rédaction du registre des traitements, politique de confidentialité et procédures internes."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Formation équipes",
      description: "Sensibilisation et formation de vos collaborateurs aux enjeux de protection des données."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-primary" />,
      title: "Gestion incidents",
      description: "Procédures de notification et gestion des violations de données personnelles."
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
                <span className="text-gradient">RGPD</span> & Protection des données
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Mise en conformité et accompagnement dans la protection des données personnelles. 
                Sécurisez votre entreprise face aux enjeux réglementaires.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Le Règlement Général sur la Protection des Données (RGPD) impose aux entreprises 
                des obligations strictes en matière de traitement des données personnelles, 
                avec des sanctions pouvant atteindre 4% du chiffre d'affaires annuel.
              </p>
              <p className="leading-relaxed mb-6">
                Notre expertise vous accompagne dans la mise en conformité de vos processus, 
                la rédaction de vos documentations obligatoires et la formation de vos équipes 
                pour une protection optimale des données de vos clients et collaborateurs.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos services <span className="text-gradient">RGPD</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un accompagnement complet pour votre conformité RGPD.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enjeux */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Pourquoi se mettre en <span className="text-gradient">conformité</span> ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Éviter les sanctions</h3>
                  <p className="text-muted-foreground">Amendes pouvant atteindre 20M€ ou 4% du CA annuel mondial.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Confiance clients</h3>
                  <p className="text-muted-foreground">Renforcement de la confiance par une gestion transparente des données.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Avantage concurrentiel</h3>
                  <p className="text-muted-foreground">Différenciation par une approche responsable de la data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sécurisation juridique</h3>
                  <p className="text-muted-foreground">Protection contre les risques de contentieux et réclamations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sécurisez votre <span className="text-gradient">conformité RGPD</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous pour un audit de votre situation actuelle et un plan de mise en conformité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Audit RGPD gratuit</Link>
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

export default RGPD;
