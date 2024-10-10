import React from 'react';
import Navbar from './components/navbar';
import SalaryCalculator from './components/SalaryCalculator';  // Existing Salary Calculator component
import './styles/styles.css';  // Ensure you import your main styles

function App() {
  return (
    <div className="App">

      <Navbar />

      <section id="salary-calculator">
        <SalaryCalculator />
      </section>

    </div>
  );
}

export default App;