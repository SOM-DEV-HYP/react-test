import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Man from "./Man.png";

const Testimonials = () => {
  const testimonials = [
    { name: "James K.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "Suzan B.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "Megen W.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "John D.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "Sara P.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "Katy L.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
    { name: "Alex T.", text: `"You won’t regret it. Absolutely wonderful!"`, image: Man },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Duplicate list for infinite scroll feel
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 5)];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Montserrat:wght@400;500&display=swap');

        .testimonials-section {
          background-color: #fff;
          padding-block: 30px;
          padding-inline: 20px;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          overflow-y: visible; /* ✅ fix bottom cut */
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          overflow: visible;
          padding-bottom: 60px;
          position: relative;
        }

        .testimonials-heading {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: #000;
          margin-bottom: 50px;
          text-align: left;
        }

        .slider-track {
          display: flex;
          transition: transform 0.9s ease-in-out; /* ✅ smooth slide */
          will-change: transform;
        }

        .testimonial-card {
          width: 250px;
          background: #fff;
          border: 1px solid #f0f0f0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          flex-shrink: 0;
          opacity: 0.9;
          transform: scale(0.95);
          transition: transform 0.8s ease, box-shadow 0.8s ease, opacity 0.8s ease;
          margin-inline: 15px;
        }

        .testimonial-card.active {
          transform: scale(1.15);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          z-index: 2;
          opacity: 1;
          position: relative;
        }

        .image-wrap {
          margin: 20px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: -8px 8px 0 #d3d3d3;
          overflow: hidden;
        }

        .testimonial-image {
          display: block;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .testimonial-content {
          padding: 14px 18px 20px 18px;
          text-align: left;
        }

        .testimonial-text {
          font-size: 13.5px;
          color: #444;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .stars {
          color: #f39c12;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .testimonial-line {
          width: 75%;
          height: 1px;
          background-color: #000;
          margin: 4px 0 12px 0;
        }

        .testimonial-name {
          font-size: 20px;
          color: #000;
          font-family: 'Playfair Display', serif;
        }

        @media (max-width: 1024px) {
          .testimonial-card { width: 220px; }
        }

        @media (max-width: 768px) {
          .testimonial-card { width: 180px; }
          .testimonial-image { height: 160px; }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-heading">What People & Influencers Say</h2>

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 280}px)`, // 250px card + 30px gap
            }}
          >
            {extendedTestimonials.map((item, index) => {
              const realIndex = index % testimonials.length;
              const activeIndex = (currentIndex + 2) % testimonials.length; // middle card active
              const isActive = realIndex === activeIndex;

              return (
                <div
                  key={index}
                  className={`testimonial-card ${isActive ? "active" : ""}`}
                >
                  <div className="image-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-image"
                    />
                  </div>

                  <div className="testimonial-content">
                    <p className="testimonial-text">{item.text}</p>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="testimonial-line"></div>
                    <div className="testimonial-name">{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
