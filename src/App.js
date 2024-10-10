import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';  // Import the Hero component
import SalaryCalculator from './components/SalaryCalculator';
import FAQ from './components/faq';  // Import the FAQ component
import Footer from './components/footer';  // Import the Footer component
import './styles/styles.css';  // Ensure you're using the centralized stylesheet

function App() {
  return (
    <div className="App">
      {/* Navbar below Hero */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main content - Salary Calculator */}
      <section id="salary-calculator">
        <SalaryCalculator />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;