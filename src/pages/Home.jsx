import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing'; // <-- 1. IMPORTA EL NUEVO COMPONENTE
import Cta from '../components/Cta';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Pricing /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
        <HowItWorks />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Home;