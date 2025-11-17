import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiChevronDown, FiX } from "react-icons/fi";
import M1 from './c1709b478ad164ca200a9d831292b1f8aa20e330.jpg';
import M2 from './ea6ce65f906aaf0085d8d42586a98d688b70bb31.png';
import Logo from '../Group 40.png';

const productImg1 = "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop";
const productImg2 = "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=200&h=300&fit=crop";
const productImg3 = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wrap Top",
      size: "S",
      color: "White",
      price: 160,
      quantity: 1,
      image: productImg1
    },
    {
      id: 2,
      name: "Casual Wild Leg",
      size: "S",
      color: "Dark Blue",
      price: 130,
      quantity: 1,
      image: productImg2
    },
    {
      id: 3,
      name: "Essential Dress",
      size: "2X",
      color: "Black",
      price: 195,
      quantity: 1,
      image: productImg3
    }
  ]);

  const menuItems = [
    { name: "STYLE VIBES", link: "/style-vibes" },
    {
      name: "COLLECTIONS",
      submenu: [
        { "Dresses": ["Cocktail", "Bodycon", "Midi", "Velvet", "Maxi", "Mini", "Floral", "Backless"] },
        { "Tops": ["Crop", "Tank", "Corset", "Floral", "Halter Neck", "Sleeveless", "Off-Shoulder", "Full Sleeve"] },
        { "Matching Sets": ["Top + Trouser", "Top + Skirt", "Blazer + Dress"], "Combos": ["Top Combos", "Trouser Combos"] },
        { "Intimates": ["Lingerie", "Jogger"], "Other": ["T-Shirts", "Hoodies & Sets", "Winter Wear"] },
      ],
      images: [
        { src: M1, caption: "Leggings" },
        { src: M2, caption: "Jogger" },
      ],
    },
    { name: "NEW ARRIVALS", link: "/new-arrivals" },
    { name: "WOMEN'S" },
    { name: "TRENDING" },
    { name: "INSIDER" },
    {
      name: "HELP",
      submenu: [{ "Help & Support": ["Order FAQs", "Size Guide", "Shipping & Returns", "Contact Form Or Chat"] }],
    },
    { name: "CONTACT" },
    { name: "ORDER STATUS" },
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <>
      <style>{`
        .cart-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: #fff;
          width: 480px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          z-index: 1001;
          margin-top: 55px;
        }

        .cart-header {
          color: #000;
          padding: 16px 24px;
          font-size: 18px;
          font-weight: 600;
          text-align: center;
        }

        .cart-items {
          max-height: 500px;
          overflow-y: auto;
        }

        .cart-item {
          display: flex;
          gap: 16px;
          padding: 24px;
          border-bottom: 0px solid #e5e5e5;
          position: relative;
        }

        .cart-item-image-wrapper {
          position: relative;
          width: 100px;
          height: 140px;
          flex-shrink: 0;
        }

        .cart-item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-count {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #fff;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        .cart-item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cart-item-name {
          font-size: 16px;
          font-weight: 600;
          color: #000;
        }

        .cart-item-info {
          font-size: 14px;
          color: #000;
        }

        .quantity-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .quantity-btn {
          width: 28px;
          height: 28px;
          border: 1px solid #ccc;
          background: #ccc;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #000;
          border-radius: 4px;
        }

        .quantity-value {
          width: 32px;
          text-align: center;
          font-size: 14px;
          background: #ccc;
          font-weight: 500;
          color: #000;
          border-radius: 4px;
          line-height: 28px;
        }

        .cart-item-price {
          font-size: 16px;
          font-weight: 600;
          color: #000;
        }

        .remove-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .remove-btn svg {
          width: 20px;
          height: 20px;
        }

        .cart-footer {
          padding: 24px;
        }

        .checkout-btn {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 16px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .nav-main {
          position: relative;
        }
      `}</style>

      <header className="site-header">
        <div className="topbar">Save up to 20% in First Order</div>

        <nav className="nav-main d-flex align-items-center justify-content-between">
          <div className="brand">
            <img src={Logo} alt="BelleWest Logo" className="brand-logo" />
          </div>
          <div className="nav-actions d-flex align-items-center">
            <FiSearch />
            <FiUser className="ms-3" />
            <FiHeart className="ms-3" onClick={() => setIsCartOpen(!isCartOpen)} />
            <FiShoppingBag className="ms-3"  />
          </div>

          {isCartOpen && (
            <div className="cart-dropdown" onMouseLeave={() => setIsCartOpen(false)}>
              <div className="cart-header">Your Product</div>

              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image-wrapper">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="item-count">{item.quantity}</div>
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-info">Size: {item.size}</div>
                      <div className="cart-item-info">Color: {item.color}</div>
                      <div className="quantity-price-row">
                        <div className="quantity-controls">
                          <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                          <div className="quantity-value">{item.quantity}</div>
                          <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <div className="cart-item-price">$ {item.price}</div>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      <FiX />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <button className="checkout-btn">Check Out</button>
              </div>
            </div>
          )}
        </nav>

        <nav className="navbar-menu">
          <ul className="nav-links">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
                className={item.submenu ? "has-submenu" : ""}
              >
                {item.link ? (
                  <Link to={item.link} className="menu-item">
                    {item.name}
                  </Link>
                ) : (
                  <span className="menu-item">
                    {item.name}
                    {item.submenu && <FiChevronDown className="dropdown-icon" />}
                  </span>
                )}

                {item.submenu && activeMenu === index && (
                  <div className={`mega-menu ${item.name === "HELP" ? "help-dropdown" : ""}`}>
                    <div className={item.name === "HELP" ? "help-links" : "mega-left"}>
                      {item.submenu.map((col, i) => (
                        <div key={i} className={item.name === "HELP" ? "" : "mega-col"}>
                          {Object.entries(col).map(([category, links], j) => (
                            <div key={j} className={item.name === "HELP" ? "" : "category-block"}>
                              {item.name !== "HELP" && <h4>{category}</h4>}
                              {links.map((link, k) => (
                                <a key={k} href="#" className="submenu-item">{link}</a>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    {item.images && item.name !== "HELP" && (
                      <div className="mega-right">
                        {item.images.map((img, i) => (
                          <div key={i} className="mega-img">
                            <img src={img.src} alt={img.caption} />
                            <p>{img.caption}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
