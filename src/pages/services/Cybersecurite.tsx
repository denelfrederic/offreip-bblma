
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lock, AlertTriangle, FileCheck, Users } from 'lucide-react';

const Cybersecurite = () => {
  const services = [
   
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Politiques de sécurité",
      description: "Rédaction et mise en place de politiques de sécurité informatique adaptées."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Gestion d'incidents",
      description: "Procédures de réponse aux incidents de sécurité et plan de continuité d'activité."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Formation équipes",
      description: "Sensibilisation des collaborateurs aux bonnes pratiques de cybersécurité."
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
                <span className="text-gradient">Sécurité</span> Numérique
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Conseil juridique pour la sécurisation de vos systèmes d'informations. 
                Anticipez les risques et protégez votre entreprise.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Dans un contexte de digitalisation croissante, la sécurité numérique devient un enjeu 
                juridique majeur pour les entreprises. Les menaces informatiques peuvent entraîner 
                des conséquences légales, financières et réputationnelles considérables.
              </p>
              <p className="leading-relaxed mb-6">
                Notre expertise en droit de la sécurité numérique vous accompagne dans la mise en place 
                d'un cadre juridique robuste, la gestion des incidents et la conformité aux 
                réglementations en vigueur.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos services <span className="text-gradient">sécurité numérique</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un encadrement juridique complet pour votre sécurité numérique.
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
              Les enjeux <span className="text-gradient">juridiques</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Responsabilité civile et pénale</h3>
                  <p className="text-muted-foreground">Engagement de la responsabilité de l'entreprise en cas de négligence sécuritaire.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Obligations de notification</h3>
                  <p className="text-muted-foreground">Respect des délais légaux de déclaration des incidents auprès des autorités.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Conformité réglementaire</h3>
                  <p className="text-muted-foreground">Respect des normes sectorielles et des réglementations européennes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurite;
