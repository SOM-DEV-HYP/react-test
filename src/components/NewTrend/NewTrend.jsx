import React, { useState } from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import M1 from './M1.png';
import M2 from './M2.png';
import M3 from './M3.png';
import M4 from './M4.png';
export default function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#C4A57B', '#8B7E74']
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#D4A5A5', '#E8E8E8']
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#000000', '#0066CC']
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#000000']
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#8B7E74', '#000000']
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#FFFFFF', '#FFB6C1']
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#000000', '#C4A57B']
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#808080', '#000000']
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#8B4513', '#D2691E']
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
      title: "CUTWORK POPLIN DRESS",
      price: "Rs.9,950.00",
      colors: ['#90EE90', '#FFFFFF']
    }
  ];

  const showcaseProducts = [
    {
      id: 1,
      image: M4,
      alt: "Model 1"
    },
    {
      id: 2,
      image: M3,
      alt: "Model 2"
    },
    {
      id: 3,
      image: M1,
      alt: "Model 3"
    },
    {
      id: 4,
      image:M2,
      alt: "Main model"
    }
  ];

  const sideProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
      title: "Shiny Dress",
      brand: "Al Karma",
      price: "$95.50",
      rating: 5,
      reviews: "(4.1k) Customer Reviews"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
      title: "Shiny Dress",
      brand: "Al Karma",
      price: "$95.50",
      rating: 5,
      reviews: "(4.1k) Customer Reviews"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
      title: "Shiny Dress",
      brand: "Al Karma",
      price: "$95.50",
      rating: 5,
      reviews: "(4.1k) Customer Reviews"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
      <div className="container-fluid">
        {/* TAB HEADER */}
        <div className="tabs-header">
          <h2
            className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New Arrivals
          </h2>
          <h2
            className={`tab-btn ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </h2>
        </div>

        {activeTab === 'trending' ? (
          <div className="products-scroll-wrapper">
            <div className="products-scroll-container">
              {trendingProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.title} className="product-image"/>
                    <button className="wishlist-btn"><FaRegHeart size={20}/></button>
                  </div>
                  <div className="product-info">
                    <h6 className="product-title">{product.title}</h6>
                    <p className="product-price">{product.price}</p>
                    <div className="color-options">
                      {product.colors.map((color, index) => (
                        <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="new-arrivals-layout">
            {/* LEFT SHOWCASE */}
            <div className="showcase-left">
              <div className="showcase-images-row">
                <div className="small-thumb-wrapper">
                  <img src={showcaseProducts[0].image} alt={showcaseProducts[0].alt} className="small-thumb"/>
                </div>
                <div className="small-thumb-wrapper">
                  <img src={showcaseProducts[1].image} alt={showcaseProducts[1].alt} className="small-thumb"/>
                </div>
                <div className="small-thumb-wrapper">
                  <img src={showcaseProducts[2].image} alt={showcaseProducts[2].alt} className="small-thumb"/>
                </div>
                <div className="large-main-wrapper">
                  <img src={showcaseProducts[3].image} alt={showcaseProducts[3].alt} className="large-main"/>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="showcase-right">
              {sideProducts.map((product) => (
                <div key={product.id} className="right-product-card">
                  <div className="right-product-image-box">
                    <img src={product.image} alt={product.title} className="right-product-img"/>
                    <button className="right-wishlist-icon"><FaRegHeart size={20}/></button>
                  </div>
                  <div className="right-product-details">
                    <div className="right-top-row">
                      <div>
                        <h5 className="right-product-name">{product.title}</h5>
                        <p className="right-product-brand">{product.brand}</p>
                      </div>
                      <div className="right-rating-row">
                        <div className="right-stars">
                          {[...Array(product.rating)].map((_, i) => (
                            <FaStar key={i} size={16} color="#FFA500"/>
                          ))}
                        </div>
                        <span className="right-review-text">{product.reviews}</span>
                      </div>
                    </div>
                    <p className="right-product-amount">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* STYLE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Body font */
body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Tabs Header */
.tabs-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 100px;
}

.tab-btn {
  background: transparent;
  border: none;
  font-size: 36px;
  font-weight: 400;
  color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', Georgia, serif;
  padding: 0 0 15px 0;
  margin: 0;
  position: relative;
  border-bottom: 3px solid transparent;
}

.tab-btn.active {
  color: #000;
  border-bottom: 3px solid #000;
}

/* Trending Section */
.products-scroll-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 -10px;
  padding: 10px;
  cursor: grab;
}

.products-scroll-wrapper:active {
  cursor: grabbing;
}

.products-scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.products-scroll-container {
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  user-select: none;
}

.product-card {
  flex: 0 0 auto;
  width: 350px;
  background: #fff;
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 480px;
  background: #f5f5f5;
  overflow: hidden;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wishlist-btn {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000;
}

.wishlist-btn:hover {
  background: #f0f0f0;
  transform: scale(1.1);
}

.product-info {
  padding: 15px 0 0 0;
  text-align: center;
}

.product-title {
  font-size: 12px;
  font-weight: 400;
  color: #666;
  margin: 0 0 8px 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.product-price {
  font-size: 14px;
  color: #000;
  margin: 0 0 15px 0;
  font-weight: 400;
}

.color-options {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.color-dot {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-dot:hover {
  border-color: #999;
}

/* New Arrivals Section */
.new-arrivals-layout {
  display: flex;
  justify-content: space-between; /* left-right aligned */
  gap: 30px;
  align-items: flex-start;
}

.showcase-left {
  flex: 1;
  max-width: calc(100% - 330px); /* leave space for smaller right side */
}

.showcase-images-row {
  display: flex;
  gap: 15px;
  align-items: flex-end;
}

.small-thumb-wrapper {
  width: 180px;
  height: 230px;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0;
}

.small-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.large-main-wrapper {
  flex: 1;
  background: #fff;
  overflow: hidden;
}

.large-main {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Right Section */
.showcase-right {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-shrink: 0;
  align-items: flex-end; /* keeps cards aligned to right edge */
}

/* Individual Right Cards */
.right-product-card {
  width: 350px;     /* smaller width */
  height: 350px;    /* smaller height */
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
}

.right-product-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.right-product-image-box {
  height: 220px;    /* smaller image section */
  overflow: hidden;
  position: relative;
}

.right-product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-wishlist-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;
}

.right-wishlist-icon:hover {
  background: rgba(255,255,255,0.9);
  color: #ff0000;
}

.right-product-details {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.right-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-product-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px 0;
}

.right-product-brand {
  font-size: 12px;
  color: #666;
  margin: 0 0 6px 0;
}

.right-rating-row {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.right-stars {
  display: flex;
  gap: 2px;
}

.right-review-text {
  font-size: 12px;
  color: #666;
}

.right-product-amount {
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .showcase-left {
    max-width: calc(100% - 300px);
  }

  .right-product-card {
    width: 220px;
    height: 180px;
  }

  .right-product-image-box {
    height: 100px;
  }
}

@media (max-width: 992px) {
  .new-arrivals-layout {
    flex-direction: column;
    gap: 30px;
  }

  .showcase-left {
    max-width: 100%;
  }

  .showcase-right {
    width: 100%;
    max-width: 300px;
    align-items: center;
  }

  .right-product-card {
    width: 100%;
    max-width: 250px;
    height: auto;
    min-height: 180px;
  }
}

@media (max-width: 768px) {
  .tabs-header {
    gap: 50px;
  }

  .tab-btn {
    font-size: 24px;
  }

  .product-card {
    width: 280px;
  }

  .product-image-wrapper {
    height: 380px;
  }

  .showcase-images-row {
    flex-wrap: wrap;
    justify-content: center;
  }

  .small-thumb-wrapper {
    width: 140px;
    height: 180px;
  }

  .large-main-wrapper {
    width: 100%;
    height: 450px;
  }

  .right-product-card {
    height: auto;
    min-height: 160px;
  }
}

@media (max-width: 576px) {
  .tabs-header {
    gap: 30px;
  }

  .tab-btn {
    font-size: 20px;
  }

  .product-card {
    width: 240px;
  }

  .product-image-wrapper {
    height: 320px;
  }

  .showcase-images-row {
    flex-direction: column;
    align-items: stretch;
  }

  .small-thumb-wrapper {
    width: 100%;
    height: 200px;
  }

  .large-main-wrapper {
    height: 400px;
  }

  .right-product-image-box {
    height: 100px;
  }
}

      `}</style>
    </div>
  );
}
