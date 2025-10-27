import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link
import "./Header.css";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import M1 from './c1709b478ad164ca200a9d831292b1f8aa20e330.jpg';
import M2 from './ea6ce65f906aaf0085d8d42586a98d688b70bb31.png';
import Logo from '../Group 40.png'; // replace with your file name

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

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
    { name: "NEW ARRIVALS",link: "/new-arrivals" },
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

  return (
    <header className="site-header">
      <div className="topbar">Save up to 20% in First Order</div>

      <nav className="nav-main d-flex align-items-center justify-content-between">
        <div className="brand"><img src={Logo} alt="BelleWest Logo" className="brand-logo" /></div>
        <div className="nav-actions d-flex align-items-center">
          <FiSearch />
          <FiUser className="ms-3" />
          <FiHeart className="ms-3" />
          <FiShoppingBag className="ms-3" />
        </div>
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
  );
}
