import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the current salary expectations for marketing professionals in South Africa?",
      answer: "Marketing salaries in South Africa can vary significantly depending on the role and experience level. Junior marketing roles typically range from R20,000 to R35,000 per month, while senior marketing executives may earn between R60,000 and R120,000."
    },
    {
      question: "How has the economic climate affected marketing salaries in South Africa?",
      answer: "In the current economic climate, companies are more cautious with budgets. As a result, salary expectations have remained stable, but many companies are looking for candidates who bring a broader skill set to justify higher salaries."
    },
    {
      question: "What factors influence the cost-to-company for marketing professionals?",
      answer: "Cost-to-company (CTC) in marketing includes not just the base salary but also benefits such as healthcare, pension, and other perks. In today’s climate, many companies are offering more flexible benefits to attract top talent while keeping costs manageable."
    },
    {
      question: "What marketing roles are in highest demand in South Africa?",
      answer: "Digital marketing roles, including SEO specialists, content strategists, and social media managers, are currently in high demand as more businesses focus on their online presence in a post-pandemic world."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}  // Make the whole item clickable
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon"></span> {/* Plus/minus icon handled via CSS */}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                opacity: activeIndex === index ? 1 : 0
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;