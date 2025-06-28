
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Equipe = () => {
  const equipe = [
    {
      name: "Marie Dubois",
      title: "Associée - Directrice",
      specialties: "Propriété intellectuelle, RGPD",
      description: "Expert en propriété intellectuelle depuis plus de 15 ans, Marie accompagne les entreprises dans la protection de leurs innovations et la mise en conformité RGPD.",
      image: "/placeholder.svg"
    },
    {
      name: "Pierre Martin",
      title: "Associé",
      specialties: "Contentieux, Contrats IT",
      description: "Spécialisé dans les contentieux de propriété intellectuelle et la négociation de contrats informatiques complexes.",
      image: "/placeholder.svg"
    },
    {
      name: "Sophie Laurent",
      title: "Counsel",
      specialties: "Cybersécurité, Data Protection", 
      description: "Experte en cybersécurité et protection des données, Sophie conseille les entreprises dans leur transformation digitale sécurisée.",
      image: "/placeholder.svg"
    },
    {
      name: "Thomas Bernard",
      title: "Senior Associate",
      specialties: "Brevets, Innovation",
      description: "Ingénieur de formation, Thomas accompagne les entreprises technologiques dans la protection de leurs innovations et brevets.",
      image: "/placeholder.svg"
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
                Notre <span className="text-gradient">Équipe</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Des experts passionnés au service de vos projets, 
                alliant expertise juridique pointue et vision business pragmatique.
              </p>
            </div>
          </div>
        </section>

        {/* Équipe Grid */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {equipe.map((membre, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 overflow-hidden">
                        <img 
                          src={membre.image} 
                          alt={membre.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {membre.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2">{membre.title}</p>
                      <p className="text-sm text-muted-foreground font-medium">{membre.specialties}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                      {membre.description}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos <span className="text-gradient">Valeurs</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ce qui nous guide au quotidien dans notre accompagnement de vos projets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans chaque mission, avec un niveau d'expertise 
                  et de service à la hauteur de vos enjeux.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proximité</h3>
                <p className="text-muted-foreground">
                  Une relation de confiance basée sur l'écoute, la transparence 
                  et un accompagnement personnalisé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Toujours à la pointe des évolutions technologiques et réglementaires 
                  pour mieux vous conseiller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Prêt à <span className="text-gradient">collaborer</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rencontrons-nous pour discuter de vos projets et découvrir 
              comment notre équipe peut vous accompagner vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/savoir-faire">Découvrir notre expertise</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipe;
