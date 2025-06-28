
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="hero-gradient py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo Brand Factory centré */}
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/96ac745a-06d4-4215-ac4e-f695fb8db5d0.png" 
                alt="Brand Factory Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                <span className="text-gradient">Contactez-nous</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Échangeons sur vos projets et découvrons ensemble 
                comment nous pouvons vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
