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
      name: "Myriam ANGELIER",
      title: "Avocat Associé",
      specialties: "Propriété intellectuelle, Contrats",
      description: "Experte en propriété intellectuelle avec une solide expérience dans l'accompagnement des entreprises pour la protection et la valorisation de leurs actifs immatériels.",
      image: "https://www.bblma.com/wp-content/uploads/2023/06/Myriam-ANGELIER-768x768.webp",
      contactUrl: "https://www.bblma.com/equipe/myriam-angelier/",
      linkedinUrl: "https://www.linkedin.com/in/myriamangelier/"
    },
    {
      name: "Sophie BORNET",
      title: "Avocat Counsel",
      specialties: "Propriété intellectuelle, RGPD",
      description: "Spécialisée dans le conseil en propriété intellectuelle et la protection des données, elle accompagne les clients dans leurs projets de transformation digitale.",
      image: "https://www.bblma.com/wp-content/uploads/2023/06/Sophie-Bornet-768x768.jpg",
      contactUrl: "https://www.bblma.com/equipe/sophie-bornet/",
      linkedinUrl: "https://www.linkedin.com/in/sophie-b-7203624b/"
    },
    {
      name: "Carla RUFFINO",
      title: "Conseil",
      specialties: "Propriété industrielle, Innovation",
      description: "Conseil en propriété industrielle, elle accompagne les entreprises innovantes dans la protection de leurs créations et inventions.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Carla-RUFFINO-200x300.jpg"
    },
    {
      name: "Lise MARTIN",
      title: "Conseil",
      specialties: "Marques, Dessins et modèles",
      description: "Experte en marques et dessins & modèles, elle conseille les entreprises dans leurs stratégies de protection et de défense de leurs droits.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Lise-MARTIN-200x300.jpg"
    },
    {
      name: "Margaux EMPINET",
      title: "Conseil",
      specialties: "Propriété intellectuelle, Contentieux",
      description: "Spécialisée dans le contentieux de propriété intellectuelle, elle défend les intérêts des clients dans leurs litiges et négociations.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Margaux-EMPINET-200x300.jpg"
    },
    {
      name: "Mariam KADA",
      title: "Équipe support et juridique",
      specialties: "Support juridique, Administration",
      description: "Membre de l'équipe support, elle assure le suivi administratif et juridique des dossiers avec rigueur et efficacité.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Mariam-KADA-200x300.jpg"
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
                Le pôle Propriété Intellectuelle est composé d'un associé, deux avocats, 
                une CPI (Conseil en Propriété Industrielle), et une équipe de quatre juristes 
                intervenant en synergie avec les autres pôles.
              </p>
            </div>
          </div>
        </section>

        {/* Équipe Grid */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                      {membre.contactUrl ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a href={membre.contactUrl} target="_blank" rel="noopener noreferrer">
                            <Mail className="h-4 w-4 mr-2" />
                            Contact
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      )}
                      {membre.linkedinUrl ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a href={membre.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      )}
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
