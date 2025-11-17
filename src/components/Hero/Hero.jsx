import React from 'react';
import { FaFlag, FaTruck, FaUndo, FaHeadset, FaTag } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaFlag size={32} />,
      title: "Locally Owned",
      description: "We have local business and sell best quality clothes"
    },
    {
      icon: <FaTruck size={32} />,
      title: "Fast Delivery",
      description: "We provide fast delivery to our customers"
    },
    {
      icon: <FaUndo size={32} />,
      title: "Easy Return",
      description: "We provide easy return policy."
    },
    {
      icon: <FaHeadset size={32} />,
      title: "Online Support",
      description: "We give 24/7 online support"
    },
    {
      icon: <FaTag size={32} />,
      title: "Best Offers",
      description: "We give best offers to our customers"
    }
  ];

  return (
    <div className="features-wrapper">
      <div className="features-container">
        <div className="row g-3">
          {features.map((feature, index) => (
            <div key={index} className="col-6 col-md-4 col-lg">
              <div className="feature-card">
                <div className="icon-wrapper">
                  {feature.icon}
                </div>
                <h6 className="feature-title">
                  {feature.title}
                </h6>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Montserrat:wght@400&display=swap');

        /* ---------- Wrapper ---------- */
        .features-wrapper {
          background-color: #fff;
          padding-block: 40px;
          padding-inline: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        /* ---------- Feature Card ---------- */
        .feature-card {
          background: #fff;
          padding: 35px 25px;
          text-align: center;
          border-radius: 10px;
          height: 100%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }

        .icon-wrapper {
          color: #2c2c2c;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ---------- Title (Font Family Updated Only) ---------- */
        .feature-title {
          font-family: 'Libre Baskerville', serif;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 0;
          font-size: 17px;
        }

        /* ---------- Description (Font Family Updated Only) ---------- */
        .feature-description {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: normal;
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 13px;
          text-align: center;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1200px) {
          .features-wrapper {
            padding-block: 50px;
          }
        }

        @media (max-width: 768px) {
          .features-wrapper {
            padding-block: 40px;
          }
        }
      `}</style>
    </div>
  );
}
