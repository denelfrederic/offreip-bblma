
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo Brand Factory centré */}
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/37b14711-3c5b-4f9d-a4c3-8af66eba27c0.png" 
                alt="BBLM Avocats" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                <span className="text-gradient">Contactez-nous</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
