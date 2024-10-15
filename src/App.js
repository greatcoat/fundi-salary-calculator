import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import SalaryCalculator from './components/SalaryCalculator';
import WhyChooseFundi from './components/WhyChooseFundi';
import FAQ from './components/faq';
import Footer from './components/footer';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section id="salary-calculator">
        <SalaryCalculator />
      </section>
      <section id="why-choose-fundi">
        <WhyChooseFundi />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}

export default App;
