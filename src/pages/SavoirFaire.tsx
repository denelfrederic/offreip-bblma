

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SavoirFaire = () => {
  const services = [
    {
      title: "Recherches d'antériorités",
      description: "Analyses préalables approfondies pour sécuriser vos innovations.",
      href: "/savoir-faire/recherche-anteriorite"
    },
    {
      title: "Dépôt & renouvellement",
      description: "Gestion complète de vos portefeuilles de marques et brevets.",
      href: "/savoir-faire/depot-renouvellement"
    },
    {
      title: "Surveillance",
      description: "Veille active pour protéger vos droits contre les contrefaçons.",
      href: "/savoir-faire/surveillance"
    },
    {
      title: "Audit de portefeuilles",
      description: "Évaluation stratégique et optimisation de vos actifs PI.",
      href: "/savoir-faire/audit-portefeuilles"
    },
    {
      title: "RGPD",
      description: "Mise en conformité et accompagnement dans la protection des données.",
      href: "/savoir-faire/rgpd"
    },
    {
      title: "Cybersécurité",
      description: "Conseil juridique pour la sécurisation de vos systèmes d'information.",
      href: "/savoir-faire/cybersecurite"
    },
    {
      title: "Contrats",
      description: "Rédaction et négociation d'accords IT et de licences.",
      href: "/savoir-faire/contrats"
    },
    {
      title: "Litiges & contentieux",
      description: "Résolution de conflits et défense de vos intérêts en justice.",
      href: "/savoir-faire/litiges-contentieux"
    }
  ];

  const etapes = [
    {
      title: "Étude préliminaire",
      description: "Analyse de votre contexte et de vos besoins spécifiques pour définir la stratégie optimale.",
      details: [
        "Audit de votre situation actuelle",
        "Identification des enjeux prioritaires",
        "Définition des objectifs stratégiques"
      ]
    },
    {
      title: "Audit approfondi",
      description: "Diagnostic complet de vos actifs immatériels et de votre niveau de protection.",
      details: [
        "Cartographie de vos actifs",
        "Analyse des risques et opportunités",
        "Évaluation de la conformité réglementaire"
      ]
    },
    {
      title: "Plan d'action personnalisé",
      description: "Élaboration d'une feuille de route sur-mesure avec priorités et échéances.",
      details: [
        "Stratégie de protection adaptée",
        "Planning de mise en œuvre détaillé",
        "Budget prévisionnel transparent"
      ]
    },
    {
      title: "Mise en œuvre",
      description: "Exécution des actions définies avec accompagnement continu.",
      details: [
        "Dépôts et formalités administratives",
        "Négociation et rédaction contractuelle",
        "Formation de vos équipes"
      ]
    },
    {
      title: "Suivi et optimisation",
      description: "Surveillance active et ajustements réguliers pour maximiser la protection.",
      details: [
        "Veille concurrentielle et technologique",
        "Renouvellements et maintenances",
        "Reporting périodique détaillé"
      ]
    },
    {
      title: "Accompagnement long terme",
      description: "Relation de confiance durable pour faire évoluer votre stratégie PI.",
      details: [
        "Conseil stratégique continu",
        "Adaptation aux évolutions réglementaires",
        "Support réactif en cas d'urgence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/b3a2e3c4-974b-41e6-869b-ad541300da99.png" 
                alt="Brand Factory" 
                className="h-16 lg:h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="text-primary">Expertises IP/IT</span>
            </h1>
          </div>
        </section>

        {/* Introduction - Texte raccourci */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                La propriété intellectuelle constitue aujourd'hui un levier stratégique majeur pour les entreprises souhaitant se différencier, innover et créer de la valeur dans un environnement économique de plus en plus concurrentiel.
              </p>
              <p className="text-lg leading-relaxed">
                Notre équipe pluridisciplinaire maîtrise l'ensemble des problématiques liées à la propriété intellectuelle et aux nouvelles technologies, du conseil stratégique à la résolution de litiges, en passant par l'accompagnement dans les opérations de croissance externe et les négociations contractuelles complexes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link to={service.href}>En savoir plus</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* La méthode Brand Factory Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                La méthode <span className="text-primary">Brand Factory</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus structuré en 6 étapes pour une approche complète et efficace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {etapes.map((etape, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="mb-3">
                      <div className="text-base text-primary font-semibold">Étape {index + 1}</div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-primary transition-colors">
                        {etape.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                      {etape.description}
                    </p>
                    <ul className="space-y-2">
                      {etape.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-base text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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

export default SavoirFaire;

