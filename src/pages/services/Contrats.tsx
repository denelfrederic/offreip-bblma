
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Handshake, Shield, Globe } from 'lucide-react';

const Contrats = () => {
  const typesContrats = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Contrats informatiques",
      description: "Rédaction et négociation de contrats de développement, maintenance et hébergement."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Licences logicielles",
      description: "Négociation d'accords de licence, SaaS et contrats de distribution de logiciels."
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Accords de confidentialité",
      description: "Mise en place de NDA et clauses de protection des informations sensibles."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Contrats internationaux",
      description: "Accompagnement dans les transactions IT transfrontalières et multi-juridictionnelles."
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
                <span className="text-gradient">Contrats</span> IT & Licences
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Rédaction et négociation d'accords IT et de licences. 
                Sécurisez vos relations contractuelles dans l'univers numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Les contrats informatiques et les accords de licence constituent le fondement 
                juridique de l'économie numérique. Leur rédaction nécessite une expertise 
                technique et juridique approfondie pour équilibrer les intérêts des parties.
              </p>
              <p className="leading-relaxed mb-6">
                Notre équipe maîtrise les spécificités contractuelles du secteur IT, 
                de la propriété intellectuelle aux aspects techniques, pour vous garantir 
                des accords sécurisés et adaptés à vos enjeux business.
              </p>
            </div>
          </div>
        </section>

        {/* Types de contrats */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Types de <span className="text-gradient">contrats</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une expertise complète pour tous vos besoins contractuels IT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {typesContrats.map((contrat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      {contrat.icon}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {contrat.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {contrat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Points clés de nos <span className="text-gradient">interventions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h3>
                  <p className="text-muted-foreground">Définition claire des droits de propriété et d'usage des créations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Responsabilités</h3>
                  <p className="text-muted-foreground">Répartition équilibrée des risques et limitations de responsabilité.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Protection des données</h3>
                  <p className="text-muted-foreground">Clauses RGPD et sécurisation des flux de données personnelles.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Niveaux de service</h3>
                  <p className="text-muted-foreground">Définition précise des SLA et mécanismes de contrôle qualité.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Résiliation</h3>
                  <p className="text-muted-foreground">Conditions de sortie et récupération des données sécurisées.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Évolutivité</h3>
                  <p className="text-muted-foreground">Mécanismes d'adaptation aux évolutions technologiques et réglementaires.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sécurisez vos <span className="text-gradient">accords IT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bénéficiez de notre expertise pour des contrats équilibrés et conformes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Rédaction de contrat</Link>
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

export default Contrats;
