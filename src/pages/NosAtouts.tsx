
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
      <main className="pt-20 lg:pt-24"> {/* Ajustement pour la nouvelle hauteur du header */}
        {/* Hero Section */}
        <section className="hero-gradient py-32"> {/* Augmentation du padding vertical */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Augmentation du padding horizontal */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-12"> {/* Augmentation de la marge inférieure */}
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
        <section className="py-24 bg-gradient-to-b from-background/95 to-background"> {/* Augmentation du padding */}
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Augmentation du padding horizontal */}
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-8"> {/* Augmentation de la marge inférieure */}
                Dans un environnement économique en constante évolution, les projets complexes nécessitent 
                une approche juridique sophistiquée et une compréhension fine des enjeux technologiques 
                et commerciaux.
              </p>
              <p className="leading-relaxed mb-8"> {/* Augmentation de la marge inférieure */}
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
        <section className="py-32 bg-gradient-to-b from-background to-background/95"> {/* Augmentation du padding */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Augmentation du padding horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16"> {/* Augmentation de l'espacement entre les cartes */}
              {atouts.map((atout, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="p-8"> {/* Augmentation du padding */}
                    <div className="flex items-center space-x-6 mb-6"> {/* Augmentation de l'espacement */}
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors"> {/* Augmentation de la taille */}
                        <span className="text-4xl">{atout.icon}</span> {/* Augmentation de la taille de l'icône */}
                      </div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                        {atout.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8"> {/* Augmentation de l'espacement et du padding */}
                    <p className="text-muted-foreground leading-relaxed">
                      {atout.description}
                    </p>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground py-4" /* Augmentation du padding vertical */
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
        <section className="py-32 bg-gradient-to-b from-background/95 to-background"> {/* Augmentation du padding */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Augmentation du padding horizontal */}
            <div className="text-center mb-20"> {/* Augmentation de la marge inférieure */}
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8"> {/* Augmentation de la marge inférieure */}
                Pourquoi nous <span className="text-gradient">choisir</span> ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Augmentation de l'espacement */}
              <div className="text-center p-6"> {/* Ajout de padding */}
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"> {/* Augmentation de la taille et de la marge */}
                  <span className="text-4xl">🎯</span> {/* Augmentation de la taille */}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Expertise technique</h3> {/* Augmentation de la marge */}
                <p className="text-muted-foreground leading-relaxed">
                  Maîtrise approfondie des technologies et des enjeux juridiques spécifiques 
                  à chaque secteur d'activité.
                </p>
              </div>
              
              <div className="text-center p-6"> {/* Ajout de padding */}
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"> {/* Augmentation de la taille et de la marge */}
                  <span className="text-4xl">⚡</span> {/* Augmentation de la taille */}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Réactivité</h3> {/* Augmentation de la marge */}
                <p className="text-muted-foreground leading-relaxed">
                  Équipe dédiée et processus optimisés pour répondre rapidement 
                  aux urgences et aux échéances critiques.
                </p>
              </div>
              
              <div className="text-center p-6"> {/* Ajout de padding */}
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"> {/* Augmentation de la taille et de la marge */}
                  <span className="text-4xl">🤝</span> {/* Augmentation de la taille */}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Approche partenariale</h3> {/* Augmentation de la marge */}
                <p className="text-muted-foreground leading-relaxed">
                  Relation de confiance durable et accompagnement personnalisé 
                  tout au long de vos projets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-background to-background/95"> {/* Augmentation du padding */}
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center"> {/* Augmentation du padding horizontal */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8"> {/* Augmentation de la marge */}
              Un projet <span className="text-gradient">complexe</span> en vue ?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed"> {/* Augmentation de la marge */}
              Échangeons sur vos défis et découvrons ensemble comment notre expertise 
              peut vous aider à les relever avec succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center"> {/* Augmentation de l'espacement */}
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-lg font-semibold rounded-full" /* Augmentation du padding */
                asChild
              >
                <Link to="/contact">Discuter de votre projet</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-lg font-semibold rounded-full" /* Augmentation du padding */
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
