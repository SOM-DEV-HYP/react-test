import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQAccordion = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [openItems, setOpenItems] = useState([0, 0]); // First and last open

  const filters = ['ALL', 'EXCHANGE', 'RETURNS', 'REFUND', 'DELIVERY'];

  const faqData = [
    {
      question: 'How Do I Contact Your Customer Service?',
      answer: (
        <>
          Our Customer Service Team Is Available Monday Through Friday, <strong>9 Am - 5 Pm</strong> ET, Excluding Holidays.
          You Can Reach Us Via Email At <strong>Www.Bellewest.Com</strong> (Preferred And Fastest Response),
          Via Chat Using The Icon In The Right Bottom Corner Of Our Website, Or Via Voicemail At{' '}
          <strong>+1(929) 460-3208</strong>. We Will Get Back To You Within 24 Business Hours.
        </>
      ),
      category: 'ALL'
    },
    {
      question: 'When Will My Order Ship?',
      answer: 'Your order will ship within 2-3 business days after your order is placed.',
      category: 'DELIVERY'
    },
    {
      question: 'Can I Cancel Or Modify My Order?',
      answer: 'You can cancel or modify your order within 24 hours of placing it by contacting our customer service team.',
      category: 'RETURNS'
    },
    {
      question: 'What Are My Shipping Options?',
      answer: 'We offer standard shipping (5-7 business days) and express shipping (2-3 business days).',
      category: 'DELIVERY'
    },
    {
      question: 'What Type Of Payment Methods Do You Offer?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay.',
      category: 'ALL'
    },
    {
      question: 'Which Size Will Fit Me Best?',
      answer: 'We offer body and product measurements on each product page — click "Size Guide" to find your best fit.',
      category: 'EXCHANGE'
    },
    {
      question: 'When Will I Get My Refund?',
      answer: 'Refunds are processed within 5–7 business days after we receive your returned item.',
      category: 'REFUND'
    }
  ];

  // Filtering based on category
  const filteredFAQs =
    activeFilter === 'ALL'
      ? faqData
      : faqData.filter((faq) => faq.category === activeFilter);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        `}
      </style>

      <style>{`
        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .faq-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #000;
        }

        .filter-buttons {
          margin-bottom: 3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .filter-btn {
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          border: 1px solid #dee2e6;
          background-color: white;
          color: black;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
        }

        .filter-btn:hover {
          border-color: black;
        }

        .filter-btn.active {
          background-color: black;
          color: white;
          border-color: black;
        }

        .faq-item {
          border-top: 1px solid #e0e0e0;
        }

        .faq-item:last-child {
          border-bottom: 1px solid #e0e0e0;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 28px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: opacity 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .faq-question:hover {
          opacity: 0.7;
        }

        .faq-question h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          padding-right: 30px;
        }

        .faq-icon {
          font-size: 2rem;
          font-weight: 300;
          line-height: 1;
          flex-shrink: 0;
        }

        .faq-answer {
          padding-bottom: 24px;
          padding-right: 50px;
        }

        .faq-answer p {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
        }

        /* Remove border when no results */
        .no-results {
          font-size: 16px;
          color: #666;
          text-align: center;
          padding: 30px 0;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
        }
      `}</style>

      <div className="faq-container">
        {/* Header */}
        <h1 className="faq-title">FAQs</h1>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filtered FAQ Items */}
        <div>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button onClick={() => toggleItem(index)} className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </button>

                {openItems.includes(index) && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              No FAQs found for "{activeFilter}"
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
