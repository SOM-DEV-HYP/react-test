import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productImg from './ef817315559d0a9715ed4a4b7678f9ef065a2fc2.png';
import productImg1 from './2d2ea53ea36e39a2c825f0890017516c8011f4ed.png';

export default function PromoBanner() {
  return (
    <div className="promo-wrapper">
      <div className="promo-container">
        <div className="promo-img-box">
          <img
            src={productImg1}
            alt="Left product"
            className="promo-img-single"
          />
        </div>

        <div className="promo-content">
          <h2 className="promo-title">Get 50% Off</h2>
          <p className="promo-subtitle">for all new product purchases</p>
          <p className="promo-min">min. purchase RS. 95,000</p>
          <button className="promo-btn">SHOP NOW</button>
        </div>

        <div className="promo-img-box">
          <img
            src={productImg}
            alt="Right product"
            className="promo-img-single"
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        /* ---------- Wrapper ---------- */
        .promo-wrapper {
          background-color: #fff;
          padding-block: 40px;
          padding-inline: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .promo-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          background: #f5f5f5;
          padding: 60px 40px;
          flex-wrap: wrap;
          box-sizing: border-box;
        }

        .promo-img-box {
          flex: 1 1 250px;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 400px;
        }

        .promo-img-single {
          width: 100%;
          height: auto;
          max-height: 320px;
          object-fit: contain;
        }

        .promo-content {
          flex: 1 1 300px;
          text-align: center;
          min-width: 260px;
        }

        .promo-title {
          font-size: 48px;
          font-weight: 700;
          color: #000;
          margin: 0 0 10px 0;
        }

        .promo-subtitle {
          font-size: 16px;
          color: #333;
          margin: 0 0 5px 0;
          font-weight: 500;
        }

        .promo-min {
          font-size: 14px;
          color: #666;
          margin: 0 0 30px 0;
          font-weight: 400;
        }

        .promo-btn {
          background: #fff;
          color: #0a0a0aff;
          border: none; /* removed border */
          padding: 12px 40px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .promo-btn:hover {
          background: #333;
          color: #fff;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1200px) {
          .promo-container {
            gap: 40px;
            padding: 50px 30px;
          }
          .promo-title {
            font-size: 40px;
          }
          .promo-img-single {
            max-height: 280px;
          }
        }

        @media (max-width: 992px) {
          .promo-container {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          .promo-img-box {
            max-width: 300px;
          }
          .promo-img-single {
            max-height: 250px;
          }
        }

        @media (max-width: 768px) {
          .promo-container {
            padding: 40px 20px;
          }
          .promo-title {
            font-size: 36px;
          }
          .promo-subtitle {
            font-size: 14px;
          }
          .promo-btn {
            padding: 10px 30px;
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .promo-img-box {
            max-width: 240px;
          }
          .promo-img-single {
            max-height: 200px;
          }
          .promo-title {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}
