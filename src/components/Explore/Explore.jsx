import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productImg from './ef817315559d0a9715ed4a4b7678f9ef065a2fc2.png';
import productImg1 from './2d2ea53ea36e39a2c825f0890017516c8011f4ed.png';

export default function PromoBanner() {
  return (
    <div className="promo-wrapper">
      <div className="promo-container">
        <img 
          src={productImg1}
          alt="Left product"
          className="promo-img-single"
        />
        
        <div className="promo-content">
          <h2 className="promo-title">Get 50% Off</h2>
          <p className="promo-subtitle">for all new product purchases</p>
          <p className="promo-min">min. purchase RS. 95,000</p>
          <button className="promo-btn">SHOP NOW</button>
        </div>
        
        <img 
          src={productImg}
          alt="Right product"
          className="promo-img-single"
        />
      </div>

      <style>{`
        /* ---------- Wrapper (consistent with other sections) ---------- */
        .promo-wrapper {
          background-color: #fff;
          padding-block: 60px;
          padding-inline: 20px; /* same as StyleVibes & Footer */
          font-family: 'Poppins', sans-serif;
        }

        .promo-container {
          max-width: 1400px; /* same as others */
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          background: #f0f0f0;
          padding: 60px 40px;
          border-radius: 0;
          box-sizing: border-box;
        }

        .promo-img-single {
          width: 585px;
          height: 330px;
          object-fit: cover;
          border-radius: 0;
        }

        .promo-content {
          text-align: center;
          flex: 0 0 auto;
          padding: 0 40px;
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
        }

        .promo-min {
          font-size: 14px;
          color: #666;
          margin: 0 0 30px 0;
        }

        .promo-btn {
          background: #fff;
          color: #000;
          border: 2px solid #000;
          padding: 12px 40px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
        }

        .promo-btn:hover {
          background: #000;
          color: #fff;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1200px) {
          .promo-wrapper {
            padding-block: 50px;
          }

          .promo-container {
            gap: 50px;
          }

          .promo-img-single {
            width: 240px;
            height: 260px;
          }

          .promo-title {
            font-size: 40px;
          }
        }

        @media (max-width: 992px) {
          .promo-container {
            flex-direction: column;
            padding: 40px 30px;
            gap: 30px;
          }

          .promo-img-single {
            width: 220px;
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .promo-wrapper {
            padding-block: 40px;
          }

          .promo-container {
            padding: 30px 20px;
          }

          .promo-img-single {
            width: 180px;
            height: 200px;
          }

          .promo-title {
            font-size: 36px;
          }

          .promo-subtitle {
            font-size: 14px;
          }

          .promo-min {
            font-size: 12px;
          }

          .promo-btn {
            padding: 10px 30px;
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .promo-img-single {
            width: 150px;
            height: 170px;
          }

          .promo-title {
            font-size: 32px;
          }

          .promo-content {
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}
