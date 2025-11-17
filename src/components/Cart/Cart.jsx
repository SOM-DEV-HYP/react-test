import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BagPage() {
  const items = [
    {
      id: 1,
      name: "Easy Skirt",
      desc: "Turn it up Skirt",
      price: 2299,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Boss Dress",
      desc: "Turn it up Dress",
      price: 2799,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="container py-5 bag-page">
      {/* Inline CSS for Montserrat & layout */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
        
        .bag-page {
          font-family: "Montserrat", sans-serif;
        }

        .bag-item-image {
          width: 150px;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
        }

        .bag-price {
          margin-top: 2px; /* aligns price with name */
          color: #000;
        }

        .card {
          border-radius: 12px;
        }

        .summary-card {
          border-radius: 12px;
        }
      `}</style>

      <div className="row g-4">
        {/* Left Section - Bag Items */}
        <div className="col-lg-8">
          <h5 className="fw-bold mb-2">Bag</h5>
          <p className="text-muted mb-4">There are two items in your Bag</p>

          {items.map((item) => (
            <div key={item.id} className="card mb-3 border-0 shadow-sm rounded-4">
              <div className="d-flex p-3 align-items-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="me-4 bag-item-image"
                />

                <div className="flex-grow-1 d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="fw-semibold mb-1">{item.name}</h6>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                  <div className="fw-semibold bag-price">Rs. {item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 summary-card sticky-top">
            <h5 className="fw-bold mb-4">Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹ 0.00</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₹ 0.00</span>
            </div>

            <button className="btn btn-dark w-100 py-2 rounded-pill">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
