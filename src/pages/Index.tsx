
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
