
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
