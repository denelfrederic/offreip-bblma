import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommentTravaillonsNous = () => {
  
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
        <section className="hero-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Vos enjeux, <span className="text-gradient">notre savoir-faire</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Six piliers fondamentaux qui définissent notre approche unique de la propriété intellectuelle alignée sur vos objectifs business et vos contraintes.
              </p>
            </div>
          </div>
        </section>

        {/* Décideurs Magazine Recognition Section */}
        <section className="py-12 bg-background/95">
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
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nos <span className="text-gradient">atouts</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
      </main>
      <Footer />
    </div>
  );
};

export default CommentTravaillonsNous;
