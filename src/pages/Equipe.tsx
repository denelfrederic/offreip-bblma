
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
      specialties: "Spécialiste en droit de la propriété intellectuelle",
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
      name: "Lise MARTIN",
      title: "Juriste marque",
      specialties: "Marques, Dessins et modèles",
      description: "Experte en marques et dessins & modèles, elle conseille les entreprises dans leurs stratégies de protection et de défense de leurs droits.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Lise-MARTIN-200x300.jpg"
    },
    {
      name: "Mariam KADA",
      title: "Juriste marque",
      specialties: "Support juridique, Administration",
      description: "Membre de l'équipe support, elle assure le suivi administratif et juridique des dossiers avec rigueur et efficacité.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/Mariam-KADA-200x300.jpg"
    },
    {
      name: "Flore MARCHADOUR",
      title: "Avocat",
      specialties: "Propriété intellectuelle, Droit des sociétés",
      description: "Avocate spécialisée en propriété intellectuelle et droit des sociétés, elle conseille les entreprises dans leurs stratégies juridiques et leur développement.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/default-avatar-200x300.jpg"
    },
    {
      name: "Hugo SIBARITA",
      title: "Juriste Marque",
      specialties: "Marques, Propriété industrielle",
      description: "Juriste spécialisé en marques et propriété industrielle, il accompagne les clients dans leurs démarches de protection et de valorisation de leurs actifs de marque.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/default-avatar-200x300.jpg"
    },
    {
      name: "Sirine ISSAAAD",
      title: "Juriste Marque",
      specialties: "Marques, Propriété intellectuelle",
      description: "Juriste spécialisée en marques et propriété intellectuelle, elle accompagne les entreprises dans la protection et la gestion de leurs droits de marque.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/default-avatar-200x300.jpg"
    },
    {
      name: "Miranda RIUS",
      title: "Assistante administrative",
      specialties: "Support administratif, Coordination",
      description: "Membre de l'équipe support, elle assure la coordination administrative et le suivi des dossiers clients avec professionnalisme.",
      image: "https://www.bblma.com/wp-content/uploads/2020/11/default-avatar-200x300.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section avec design épuré */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Brand</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-1">Factory</h1>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Une équipe</span> dédiée et spécialisée
            </h2>
          </div>
        </section>

        {/* Équipe Grid - Style moderne épuré */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {equipe.map((membre, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-8 relative">
                    <div className="w-48 h-64 bg-gray-100 mx-auto mb-6 overflow-hidden">
                      <img 
                        src={membre.image} 
                        alt={membre.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {membre.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{membre.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                        {membre.specialties}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {membre.contactUrl ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary"
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
                        className="border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    )}
                    {membre.linkedinUrl ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary"
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
                        className="border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nos <span className="text-primary">Valeurs</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ce qui nous guide au quotidien dans notre accompagnement de vos projets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque mission, avec un niveau d'expertise 
                  et de service à la hauteur de vos enjeux.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proximité</h3>
                <p className="text-gray-600">
                  Une relation de confiance basée sur l'écoute, la transparence 
                  et un accompagnement personnalisé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Toujours à la pointe des évolutions technologiques et réglementaires 
                  pour mieux vous conseiller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Prêt à <span className="text-primary">collaborer</span> ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rencontrons-nous pour discuter de vos projets et découvrir 
              comment notre équipe peut vous accompagner vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
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
