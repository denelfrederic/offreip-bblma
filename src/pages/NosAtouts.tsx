
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NosAtouts = () => {
  const atouts = [
    {
      title: "Valorisation & analyse stratégique",
      description: "Évaluation et optimisation de la valeur de vos actifs immatériels.",
      href: "/nos-atouts/valorisation-analyse"
    },
    {
      title: "IT & projets informatiques",
      description: "Accompagnement juridique des projets de transformation digitale.",
      href: "/nos-atouts/it-projets"
    },
    {
      title: "Franchise & retail",
      description: "Expertise spécialisée pour les réseaux et enseignes commerciales.",
      href: "/nos-atouts/franchise-retail"
    },
    {
      title: "Droit de la consommation",
      description: "Accompagnement juridique pour la protection des consommateurs et la conformité réglementaire.",
      href: "/nos-atouts/droit-consommation"
    },
    {
      title: "Droit de la publicité",
      description: "Conseil et accompagnement pour vos campagnes publicitaires et communications commerciales.",
      href: "/nos-atouts/droit-publicite"
    },
    {
      title: "Stratégie Fiscale",
      description: "Optimisation fiscale et conseil stratégique pour vos actifs immatériels.",
      href: "/nos-atouts/strategie-fiscale"
    },
    {
      title: "Droit des médias",
      description: "Accompagnement juridique pour les entreprises du secteur médiatique et de l'audiovisuel.",
      href: "/nos-atouts/droit-medias"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="hero-gradient py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              {/* Logo supprimé à la demande du client */}
              {/* <img 
                src="/lovable-uploads/393ca4ad-8bcb-4fe8-8188-c55ef5962863.png" 
                alt="Brand Factory" 
                className="h-20 mx-auto mb-8"
              /> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-12">
                La complémentatrité des différentes <span className="text-gradient">expertises</span> du cabinet BBLM Avocats nous permet de vous accompagner sur des projets complexes
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Dans un environnement économique en constante évolution, les projets complexes nécessitent 
                une approche juridique sophistiquée et une compréhension fine des enjeux technologiques 
                et commerciaux.
              </p>
              <p className="leading-relaxed">
                Depuis bientôt 40 ans, BBLM Avocats rassemble des talents passionnés et expérimentés en droit des affaires qui se dédient à l'accompagnement de projets à fort enjeu stratégique, alliant expertise juridique pointue et vision business pragmatique.
              </p>
            </div>
          </div>
        </section>

        {/* Atouts Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {atouts.map((atout, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {atout.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {atout.description}
                    </p>
                    {/* Bouton 'Découvrir en détail' supprimé à la demande du client */}
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

export default NosAtouts;
