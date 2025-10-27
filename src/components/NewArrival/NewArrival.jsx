import React from 'react';
import { Heart, SlidersHorizontal } from 'lucide-react';

export default function NewArrival() {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
      category: "Tailored Stretch",
      title: "Turn It Up Pants",
      price: "$150",
      colors: ['#000000']
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&h=600&fit=crop",
      category: "Boss Dress",
      title: "Turn It Up Dress",
      price: "$260",
      colors: ['#FF4500']
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop",
      category: "Tailored Stretch",
      title: "Turn It Up Pants",
      price: "$140",
      colors: ['#000000', '#DC143C', '#8FBC8F']
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=600&fit=crop",
      category: "Crop It Up Pants",
      title: "Turn It Up Pants",
      price: "$145",
      colors: ['#8FBC8F']
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
      category: "Tailored Stretch",
      title: "Turn It Up Dress",
      price: "$195",
      colors: ['#8B7E74', '#000000']
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&h=600&fit=crop",
      category: "Summer Collection",
      title: "Turn It Up Dress",
      price: "$220",
      colors: ['#FFFFFF', '#FFB6C1']
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=600&fit=crop",
      category: "Evening Wear",
      title: "Turn It Up Dress",
      price: "$180",
      colors: ['#000000', '#C4A57B']
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&h=600&fit=crop",
      category: "Casual Style",
      title: "Turn It Up Pants",
      price: "$160",
      colors: ['#808080', '#000000']
    },
      {
      id: 8,
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&h=600&fit=crop",
      category: "Casual Style",
      title: "Turn It Up Pants",
      price: "$160",
      colors: ['#808080', '#000000']
    }
  ];

  return (
    <div className="sv-wrapper">
      <div className="sv-container">
        {/* Header */}
        <div className="sv-header">
          <h1 className="sv-brand">New Arrivals</h1>
          <button className="sv-filter-button">
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        {/* Products Grid */}
        <div className="sv-grid">
          {products.map((product) => (
            <div key={product.id} className="sv-card">
              <div className="sv-image-box">
                <img src={product.image} alt={product.title} className="sv-img"/>
                <button className="sv-heart-btn">
                  <Heart size={22} strokeWidth={1.5}/>
                </button>
                <button className="sv-buy-btn">BUY NOW</button>
              </div>
              <div className="sv-details">
                <div className="sv-category">{product.category}</div>
                <div className="sv-row">
                  <h6 className="sv-name">{product.title}</h6>
                  <p className="sv-amount">{product.price}</p>
                </div>
                <div className="sv-colors">
                  {product.colors.map((color, index) => (
                    <span 
                      key={index} 
                      className="sv-color-circle" 
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        .sv-wrapper {
          background-color: #fff;
          padding: 40px 20px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .sv-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header */
        .sv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 0 10px;
        }

        .sv-brand {
          font-size: 32px;
          font-weight: 400;
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          color: #000;
        }

        .sv-filter-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid #ddd;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #000;
        }

        .sv-filter-button:hover {
          border-color: #000;
          background: #f9f9f9;
        }

        /* Grid */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 10px;
        }

        .sv-card {
          background: #fff;
          cursor: pointer;
        }

        .sv-image-box {
          position: relative;
          width: 100%;
          height: 450px;
          background: #f5f5f5;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .sv-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .sv-card:hover .sv-img {
          transform: scale(1.05);
        }

        .sv-heart-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: transparent;
          border: none;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease;
          color: #333;
        }

        .sv-heart-btn:hover {
          transform: scale(1.15);
        }

        .sv-buy-btn {
          position: absolute;
          bottom: 15px;
          left: 15px;
          right: 15px;
          background: #000;
          color: #fff;
          border: none;
          padding: 14px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(120%);
          transition: all 0.3s ease;
        }

        .sv-card:hover .sv-buy-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .sv-details {
          padding: 5px 0;
        }

        .sv-category {
          font-size: 11px;
          font-weight: 600;
          color: #000;
          margin-bottom: 6px;
          text-transform: capitalize;
        }

        .sv-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .sv-name {
          font-size: 14px;
          font-weight: 400;
          color: #000;
          margin: 0;
        }

        .sv-amount {
          font-size: 16px;
          color: #000;
          margin: 0;
          font-weight: 600;
        }

        .sv-colors {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .sv-color-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sv-color-circle:hover {
          border-color: #999;
          transform: scale(1.15);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .sv-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .sv-image-box {
            height: 380px;
          }

          .sv-brand {
            font-size: 24px;
          }
        }

        @media (max-width: 576px) {
          .sv-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .sv-image-box {
            height: 450px;
          }

          .sv-header {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}