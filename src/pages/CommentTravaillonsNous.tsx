
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const domaines = [
    "Droits d'auteur",
    "Dessins et modèles", 
    "Dénominations sociales",
    "Noms de domaine",
    "Actifs immatériels"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Notre mission,
                  </h1>
                  <h2 className="text-4xl lg:text-5xl font-bold text-orange-400 leading-tight">
                    protéger votre singularité
                  </h2>
                </div>
              </div>

              {/* Right side - Domains list */}
              <div className="space-y-6">
                {domaines.map((domaine, index) => (
                  <div key={index} className="text-2xl lg:text-3xl font-semibold text-gray-700 py-2">
                    {domaine}
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Factory circle - positioned absolutely */}
            <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">Brand</div>
                  <div className="text-2xl font-bold text-orange-400">Factory</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Décideurs Magazine Recognition Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img 
                src="/lovable-uploads/2d39cafb-12a8-4d25-8d92-640a3b95b0b9.png" 
                alt="Décideurs Magazine" 
                className="h-16 mb-6"
              />
              <div className="text-2xl font-bold text-orange-400 mb-2">2025</div>
              <p className="text-lg text-gray-800 font-semibold">
                "Excellent" en gestion de portefeuilles de marques, dessins et modèles
              </p>
            </div>
          </div>
        </section>

        {/* Nos Atouts Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Nos <span className="text-orange-400">atouts</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {atouts.map((atout, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:border-orange-200 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-400 transition-colors leading-tight">
                      {atout.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {atout.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom signature */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-3xl font-bold text-blue-900 tracking-wider">
              bblm
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommentTravaillonsNous;
