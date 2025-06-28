
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Demande de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" className="bg-white border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" className="bg-white border-gray-300" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="votre@email.com" className="bg-white border-gray-300" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Société
                </label>
                <Input placeholder="Nom de votre société" className="bg-white border-gray-300" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Objet de votre demande *
                </label>
                <Input placeholder="Sujet de votre consultation" className="bg-white border-gray-300" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Décrivez votre besoin ou votre situation..."
                  className="bg-white border-gray-300 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                Envoyer la demande
              </Button>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Nos bureaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Marseille</p>
                    <p>3, Place Félix Baret</p>
                    <p>13286 Marseille Cedex 06</p>
                    <p className="text-sm mt-1">
                      <span className="font-medium">E :</span> marseille@bblma.eu<br />
                      <span className="font-medium">T :</span> 04 91 33 54 56
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Aix-en-Provence</p>
                    <p>34 cours Mirabeau</p>
                    <p>13100 Aix-en-Provence</p>
                    <p className="text-sm mt-1">
                      <span className="font-medium">E :</span> aix@bblma.eu
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Paris</p>
                    <p>4, rue Cambon</p>
                    <p>75001 Paris</p>
                    <p className="text-sm mt-1">
                      <span className="font-medium">E :</span> paris@bblma.eu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold text-gray-900">Téléphone :</span> +33 (0)1 84 25 52 42</p>
                  <p><span className="font-semibold text-gray-900">Email :</span> contact@bblma.com</p>
                  <p className="text-sm mt-4">
                    Du lundi au vendredi<br />
                    9h00 - 18h00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
