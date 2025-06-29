
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye, AlertTriangle, Scale, TrendingUp } from 'lucide-react';

const Surveillance = () => {
  const typesSurveillance = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Surveillance de marques",
      description: "Détection précoce des dépôts et usages non autorisés de vos marques sur tous les territoires."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Veille concurrentielle",
      description: "Monitoring des activités de vos concurrents et identification des opportunités stratégiques."
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Surveillance brevets",
      description: "Suivi des publications et dépôts de brevets dans vos domaines d'activité."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Analyse technologique",
      description: "Veille technologique approfondie pour anticiper les évolutions de marché."
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
                <span className="text-gradient">Surveillance</span> & Veille
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Protégez vos droits grâce à notre système de veille active. 
                Détectez les contrefaçons et anticipez les évolutions du marché.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Dans un environnement concurrentiel en constante évolution, la surveillance active 
                de vos droits de propriété intellectuelle constitue un pilier essentiel de votre 
                stratégie de protection.
              </p>
              <p className="leading-relaxed mb-6">
                Notre service de surveillance vous permet de détecter rapidement toute atteinte 
                à vos droits, d'identifier les opportunités de croissance et de prendre des 
                décisions stratégiques éclairées.
              </p>
            </div>
          </div>
        </section>

        {/* Types de surveillance */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Types de <span className="text-gradient">Surveillance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une couverture complète pour tous vos besoins de veille et de protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {typesSurveillance.map((type, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      {type.icon}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {type.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
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
              Les avantages de la <span className="text-gradient">surveillance</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Réaction rapide</h3>
                  <p className="text-muted-foreground">Détection précoce des infractions pour une action immédiate et efficace.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Maîtrise des coûts</h3>
                  <p className="text-muted-foreground">Prévention des conflits coûteux grâce à une intervention en amont.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Intelligence stratégique</h3>
                  <p className="text-muted-foreground">Analyse concurrentielle pour guider vos décisions d'innovation et de marché.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Tranquillité d'esprit</h3>
                  <p className="text-muted-foreground">Délégation complète de la surveillance à nos experts spécialisés.</p>
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

export default Surveillance;
