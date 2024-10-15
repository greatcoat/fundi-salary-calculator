import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faMoneyBillWave, faUserGraduate, faRobot } from '@fortawesome/free-solid-svg-icons';

const BenefitItem = ({ icon, title, description }) => (
  <div className="benefit-card">
    <FontAwesomeIcon icon={icon} className="benefit-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyChooseFundi = () => {
  return (
    <section className="why-choose-fundi">
      <h2>Why choose Fundi to hire marketers?</h2>
      <div className="benefits-container">
        <BenefitItem
          icon={faUserCheck}
          title="Pre-vetted Marketers"
          description="We're not just another talent recruitment agency. Marketers in the Fundi community go through a strict vetting process which includes: skills analysis, testing, reference checks, and constant business feedback sessions."
        />
        <BenefitItem
          icon={faMoneyBillWave}
          title="Transparent Pricing"
          description="Our fees are transparent and depend on the placement type. For temporary contracts, fees are between 5% & 12.5% of the monthly invoice, based on the contract duration. For permanent placements, we charge a flat fee of 15% of the candidate's annual CTC."
        />
        <BenefitItem
          icon={faUserGraduate}
          title="Candidate Coaching"
          description="Each candidate gets access to a Talent Advisor to coach, develop, and guide them on their next placement. This results in a greater and longer-lasting placement."
        />
        <BenefitItem
          icon={faRobot}
          title="Smart Matchmaking Tech"
          description="Our proprietary technology uses an algorithm to determine the match rate of each marketer to the job. This ensures we're 100% accurate to the job spec and qualifications."
        />
      </div>
    </section>
  );
};

export default WhyChooseFundi;