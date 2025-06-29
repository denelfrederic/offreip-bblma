
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileCheck, RefreshCw, Globe, Calendar } from 'lucide-react';

const DepotRenouvellement = () => {
  const services = [
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Dépôts de marques",
      description: "Constitution et dépôt de vos dossiers de marques auprès des offices nationaux et internationaux."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Brevets d'invention",
      description: "Rédaction et dépôt de brevets, stratégie de protection internationale via PCT."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Renouvellements",
      description: "Gestion automatisée des échéances et renouvellements de vos droits de propriété intellectuelle."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Suivi d'échéances",
      description: "Système de veille proactif pour ne manquer aucune date importante de votre portefeuille."
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
                Dépôt & <span className="text-gradient">Renouvellement</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Gestion complète de vos portefeuilles de marques, 
                du dépôt initial aux renouvellements stratégiques.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                La constitution et la gestion d'un portefeuille de droits de propriété intellectuelle 
                nécessitent une expertise technique pointue et une vision stratégique à long terme.
              </p>
              <p className="leading-relaxed mb-6">
                Notre équipe vous accompagne dans toutes les étapes, depuis l'analyse de brevetabilité 
                jusqu'à la gestion des renouvellements, en optimisant vos coûts et en maximisant 
                la valeur de vos actifs immatériels.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une prise en charge complète de vos besoins en dépôt et renouvellement.
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

        {/* Processus */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Notre <span className="text-gradient">approche</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analyse stratégique</h3>
                  <p className="text-muted-foreground">Évaluation de vos besoins et définition de la stratégie de protection optimale.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Constitution des dossiers</h3>
                  <p className="text-muted-foreground">Préparation complète des documents et formalités administratives.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Suivi et gestion</h3>
                  <p className="text-muted-foreground">Monitoring continu des échéances et optimisation de votre portefeuille.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Constituez votre <span className="text-gradient">portefeuille</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bénéficiez de notre expertise pour sécuriser et valoriser vos innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Nous contacter</Link>
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

export default DepotRenouvellement;
