
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scale, Shield, Users, Target } from 'lucide-react';

const LitigesContentieux = () => {
  const domaines = [
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Contrefaçon",
      description: "Défense contre les accusations de contrefaçon et actions en contrefaçon."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Concurrence déloyale",
      description: "Lutte contre les pratiques anticoncurrentielles et parasitisme commercial."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Litiges contractuels",
      description: "Résolution des conflits liés aux contrats informatiques et de licence."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Procédures d'urgence",
      description: "Référés et procédures accélérées pour une protection immédiate."
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
                Litiges & <span className="text-gradient">Contentieux</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Résolution de conflits et défense de vos intérêts en justice. 
                Une expertise reconnue en propriété intellectuelle et nouvelles technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Les litiges en propriété intellectuelle et nouvelles technologies présentent 
                des enjeux stratégiques majeurs pour les entreprises. Leur résolution nécessite 
                une expertise technique pointue et une connaissance approfondie des juridictions spécialisées.
              </p>
              <p className="leading-relaxed mb-6">
                Notre équipe vous accompagne dans la défense de vos droits, que ce soit 
                en demande ou en défense, devant toutes les juridictions compétentes, 
                avec une approche pragmatique orientée vers la préservation de vos intérêts business.
              </p>
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Domaines <span className="text-gradient">d'intervention</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une expertise complète pour tous types de litiges PI et IT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {domaines.map((domaine, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      {domaine.icon}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {domaine.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {domaine.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approche */}
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
                  <p className="text-muted-foreground">Évaluation des forces et faiblesses du dossier, opportunités de négociation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Recherche de solutions amiables</h3>
                  <p className="text-muted-foreground">Privilégier la négociation et médiation pour une résolution rapide et économique.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Représentation judiciaire</h3>
                  <p className="text-muted-foreground">Défense devant toutes les juridictions avec une argumentation technique et juridique solide.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Suivi post-jugement</h3>
                  <p className="text-muted-foreground">Exécution des décisions et accompagnement dans les éventuelles voies de recours.</p>
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

export default LitigesContentieux;
