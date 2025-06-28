
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Prenez rendez-vous pour un premier échange et découvrez comment 
            nous pouvons vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Demande de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="votre@email.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Société
                </label>
                <Input placeholder="Nom de votre société" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Objet de votre demande *
                </label>
                <Input placeholder="Sujet de votre consultation" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Décrivez votre besoin ou votre situation..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                Envoyer la demande
              </Button>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="mr-3">📍</span>
                  Nos bureaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Paris</p>
                    <p>123 Avenue des Champs-Élysées</p>
                    <p>75008 Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="mr-3">📞</span>
                  Contact direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Téléphone :</span> +33 (0)1 23 45 67 89</p>
                  <p><span className="font-semibold text-foreground">Email :</span> contact@bblma.com</p>
                  <p className="text-sm mt-4">
                    Du lundi au vendredi<br />
                    9h00 - 18h00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <span className="mr-3">⚡</span>
                  Consultation d'urgence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Besoin d'un conseil juridique urgent ? 
                  Notre équipe est disponible pour les situations critiques.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Urgence juridique
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
