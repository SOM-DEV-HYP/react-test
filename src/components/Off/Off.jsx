import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExploreCollection() {
  return (
    <div className="explore-wrapper">
      <div className="explore-container">
        <div className="section-header">
          <h2 className="explore-title">Explore Collection</h2>
        </div>

        <div className="collection-grid">
          {/* Left Large Card */}
          <div className="collection-card large-card">
            <div className="card-content left-content">
              <p className="card-subtitle">ETHEREAL ELEGANCE</p>
              <h3 className="card-title">WHERE DREAM<br />MEET COUTURE</h3>
              <button className="card-btn">SHOP</button>
            </div>
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=700&fit=crop"
                alt="Woman in gray coat"
                className="collection-img"
              />
            </div>
            <div className="side-text">
              <p className="vertical-text">CHOOSE YOUR PERFECT STYLE</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="right-cards">
            {/* Top Right Card */}
            <div className="collection-card small-card">
              <div className="card-content right-content">
                <p className="card-subtitle">RADIANT REVERE</p>
                <h3 className="card-title-small">
                  ENCHANTING<br />STYLES FOR EVERY<br />WOMAN
                </h3>
                <button className="card-btn">SHOP</button>
              </div>
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=400&fit=crop"
                  alt="Woman in white sweater with hat"
                  className="collection-img"
                />
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="collection-card small-card">
              <div className="card-content right-content">
                <p className="card-subtitle">ETHEREAL ELEGANCE</p>
                <h3 className="card-title-small">
                  WHERE DREAM<br />MEET COUTURE
                </h3>
                <button className="card-btn">SHOP</button>
              </div>
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop"
                  alt="Man in checkered blazer"
                  className="collection-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ---------- Wrapper ---------- */
        .explore-wrapper {
          background-color: #fff;
          padding-block: 60px;
          padding-inline: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .explore-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        /* ---------- Header ---------- */
        .section-header {
          margin-bottom: 40px;
        }

        .explore-title {
          font-size: 32px;
          font-weight: 400;
          color: #000;
          display: inline-block;
          font-family: Georgia, serif;
          margin: 0;
        }

        /* ---------- Grid Layout ---------- */
        .collection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .collection-card {
          position: relative;
          background: #fbfff6;
          overflow: hidden;
          display: flex;
        }

        .large-card {
          height: 600px;
        }

        .right-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .small-card {
          height: 290px;
          flex: 1;
        }

        /* ---------- Card Content ---------- */
        .card-content {
          padding: 40px 30px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .left-content {
          flex: 0 0 45%;
        }

        .right-content {
          flex: 0 0 50%;
        }

        /* ---------- Image ---------- */
        .card-image {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .collection-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* ---------- Text Styles ---------- */
        .card-subtitle {
          font-size: 11px;
          letter-spacing: 2px;
          color: #666;
          margin: 0 0 15px 0;
          font-weight: 500;
        }

        .card-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          line-height: 1.2;
          margin: 0 0 25px 0;
        }

        .card-title-small {
          font-size: 20px;
          font-weight: 700;
          color: #000;
          line-height: 1.3;
          margin: 0 0 20px 0;
        }

        /* ---------- Button ---------- */
        .card-btn {
          width: 135px;
          height: 41px;
          background: #fff;
          color: #000;
          border: none;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .card-btn:hover {
          background: #f5f5f5;
        }

        /* ---------- Side Text ---------- */
        .side-text {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .vertical-text {
          font-size: 11px;
          color: #666;
          font-weight: 500;
          margin: 0;
          padding: 20px 10px;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 992px) {
          .collection-grid {
            grid-template-columns: 1fr;
          }
          .large-card {
            height: 500px;
          }
          .small-card {
            height: 350px;
          }
          .card-title {
            font-size: 24px;
          }
          .card-title-small {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .explore-title {
            font-size: 24px;
          }
          .large-card,
          .small-card {
            flex-direction: column;
            height: auto;
          }
          .card-content {
            padding: 25px 20px;
          }
          .side-text {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .explore-title {
            font-size: 20px;
          }
          .card-title {
            font-size: 18px;
          }
          .card-title-small {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
