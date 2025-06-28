
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
      href: "/nos-atouts/valorisation-analyse",
      icon: "💎"
    },
    {
      title: "IT & projets informatiques",
      description: "Accompagnement juridique des projets de transformation digitale.",
      href: "/nos-atouts/it-projets",
      icon: "💻"
    },
    {
      title: "Franchise & retail",
      description: "Expertise spécialisée pour les réseaux et enseignes commerciales.",
      href: "/nos-atouts/franchise-retail",
      icon: "🏪"
    },
    {
      title: "Programme de formations",
      description: "Formation sur-mesure de vos équipes aux enjeux PI et IT.",
      href: "/nos-atouts/formations",
      icon: "🎓"
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
        <section className="py-16 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Dans un environnement économique en constante évolution, les projets complexes nécessitent 
                une approche juridique sophistiquée et une compréhension fine des enjeux technologiques 
                et commerciaux.
              </p>
              <p className="leading-relaxed mb-6">
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
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {atouts.map((atout, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-3xl">{atout.icon}</span>
                      </div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                        {atout.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {atout.description}
                    </p>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Pourquoi nous <span className="text-gradient">choisir</span> ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expertise technique</h3>
                <p className="text-muted-foreground">
                  Maîtrise approfondie des technologies et des enjeux juridiques spécifiques 
                  à chaque secteur d'activité.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Réactivité</h3>
                <p className="text-muted-foreground">
                  Équipe dédiée et processus optimisés pour répondre rapidement 
                  aux urgences et aux échéances critiques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Approche partenariale</h3>
                <p className="text-muted-foreground">
                  Relation de confiance durable et accompagnement personnalisé 
                  tout au long de vos projets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Un projet <span className="text-gradient">complexe</span> en vue ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Échangeons sur vos défis et découvrons ensemble comment notre expertise 
              peut vous aider à les relever avec succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Discuter de votre projet</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
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
