
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
      title: "Programme de formations",
      description: "Formation sur-mesure de vos équipes aux enjeux PI et IT.",
      href: "/nos-atouts/formations"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="hero-gradient py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-12">
                Nos <span className="text-gradient">Atouts</span> pour projets complexes
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Une expertise pointue et des solutions innovantes pour accompagner 
                vos projets les plus ambitieux et stratégiques.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-8">
                Dans un environnement économique en constante évolution, les projets complexes nécessitent 
                une approche juridique sophistiquée et une compréhension fine des enjeux technologiques 
                et commerciaux.
              </p>
              <p className="leading-relaxed mb-8">
                Notre cabinet s'est spécialisé dans l'accompagnement de projets à fort enjeu stratégique, 
                alliant expertise juridique pointue et vision business pragmatique pour vous permettre 
                de concrétiser vos ambitions en toute sécurité.
              </p>
              <p className="leading-relaxed">
                Que vous développiez une innovation technologique, lanciez un réseau de franchise, 
                ou pilotiez une transformation digitale d'envergure, nous mettons notre savoir-faire 
                au service de votre réussite.
              </p>
            </div>
          </div>
        </section>

        {/* Atouts Grid */}
        <section className="py-32 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-4"
                      asChild
                    >
                      <Link to={atout.href}>Découvrir en détail</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-32 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Pourquoi nous <span className="text-gradient">choisir</span> ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Expertise technique</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maîtrise approfondie des technologies et des enjeux juridiques spécifiques 
                  à chaque secteur d'activité.
                </p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Réactivité</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Équipe dédiée et processus optimisés pour répondre rapidement 
                  aux urgences et aux échéances critiques.
                </p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Approche partenariale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Relation de confiance durable et accompagnement personnalisé 
                  tout au long de vos projets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Un projet <span className="text-gradient">complexe</span> en vue ?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Échangeons sur vos défis et découvrons ensemble comment notre expertise 
              peut vous aider à les relever avec succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Discuter de votre projet</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/equipe">Rencontrer l'équipe</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NosAtouts;
