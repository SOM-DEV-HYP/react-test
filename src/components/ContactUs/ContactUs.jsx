import React, { useState } from "react";
import { FiMail, FiMessageSquare, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    orderNumber: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        `}
      </style>

    <style>{`
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }

  .contact-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .contact-desc {
    color: #444;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 1rem;
    max-width: 100%;
  }

  /* ==== FIXED FORM BOX ==== */
  .contact-form {
    background-color: #fff;
    // border: 1px solid #e0e0e0;
    // border-radius: 8px;
    padding: 40px 30px;
    margin: 2.5rem auto 0 auto;
    width: calc(100% - 300px);   /* 50px left + 50px right margin */
    max-width: 1100px;
    box-sizing: border-box;
  }

  .contact-form-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
  }

  .contact-form-header h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  .contact-form label {
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 12px;
    font-size: 14px;
    margin-bottom: 20px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    transition: border-color 0.3s ease;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #000;
  }

  .checkbox-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: #555;
    margin-bottom: 20px;
  }

  .send-btn {
    background-color: #000;
    color: #fff;
    padding: 12px 30px;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .send-btn:hover {
    opacity: 0.85;
  }

  .contact-box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 3rem;
  }

  .contact-box {
    flex: 1 1 300px;
    border: 1px solid #f4f4f4;
 
    padding: 25px 20px;
    text-align: center;
    background: #f4f4f4;
    transition: all 0.3s ease;
  }

  .contact-box:hover {
    background: #f5f5f5;
  }

  .contact-box-icon {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .contact-box h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .contact-box p {
    color: #555;
    font-size: 14px;
    margin-bottom: 15px;
  }

.contact-box button {
  display: block;
  width: calc(100% - 5px); /* 20px left + 20px right spacing */
  margin: 0 auto;           /* centers the button */
  border: 1px solid #000;
  background: transparent;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}


  .contact-box button:hover {
    background: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    .contact-form {
      width: 100%;
      padding: 25px 20px;
    }
  }
`}</style>


      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-desc">
          We Always Love Hearing From Our Customers! Please Do Not Hesitate To Contact Us
          Should You Have Any Questions Regarding Our Products And Sizing
          Recommendations Or Inquiries About Your Current Order.
        </p>

        <p className="contact-desc">
          Contact Our Customer Care Team Through The Contact Form Below, Email Us At{" "}
          <strong>hello@bellewest.com</strong> Or Live Chat With Us Via Our Chat Widget On
          The Bottom Right Hand Corner Of This Page.
        </p>

        <p className="contact-desc">We Will Aim To Respond To You Within 1–2 Business Days.</p>

        {/* Contact Form */}
        <div className="contact-form">
          <div className="contact-form-header">
            <FiMail style={{ fontSize: "20px" }} />
            <h3>Write Us</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Order Number</label>
            <input
              type="text"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <span>I Have Read And Understood The Contact Us Privacy And Policy.</span>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>

        {/* Contact Boxes */}
        <div className="contact-box-container">
          <div className="contact-box">
            <FiMessageSquare className="contact-box-icon" />
            <h4>Chat With Us</h4>
            <p>We Are Here And Ready To Chat</p>
            <button>Start Chat</button>
          </div>

          <div className="contact-box">
            <FiPhoneCall className="contact-box-icon" />
            <h4>Call Us</h4>
            <p>We're Here To Talk To You</p>
            <button>+91 93434 30394</button>
          </div>

          <div className="contact-box">
            <FiMail className="contact-box-icon" />
            <h4>Email Us</h4>
            <p>You Are Welcome To Send Us An Email</p>
            <button>Send Email</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
