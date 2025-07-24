import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
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
        <Cta />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;