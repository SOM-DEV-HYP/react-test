import React from 'react';

export default function ReturnsPolicy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
          background-color: #ffffff;
        }

        .returns-policy-wrapper {
          display: flex;
          align-items: center;
         margin-top:40px;
          background-color: #ffffff;
          padding:30px;
        }

        .returns-policy-container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
        }

        .returns-policy-title {
          font-size: 22px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
          font-family: 'Montserrat', sans-serif;
        }

        .returns-policy-content {
          color: #4a5568;
          font-size: 16px;
          font-weight: 400;
          // line-height: 1.75;
          font-family: 'Montserrat', sans-serif;

        }

        .returns-policy-content p {
          margin-bottom: 24px;
        }

        .returns-policy-content p:last-of-type {
          font-weight: 400;
        }

        .returns-policy-underline {
          text-decoration: underline;
          cursor: pointer;
        }

        .returns-policy-button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 10px;
        }

        .returns-policy-button {
          background-color: #000000;
          color: #ffffff;
          padding: 10px 10px;
          border: none;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
         
          font-family: 'Montserrat', sans-serif;
        }

        .returns-policy-button:hover {
          background-color: #333333;
        }

        @media (max-width: 768px) {
          .returns-policy-wrapper {
            padding: 40px 20px;
          }

          .returns-policy-title {
            font-size: 28px;
          }

          .returns-policy-content {
            font-size: 15px;
          }

          .returns-policy-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="returns-policy-wrapper">
        <div className="returns-policy-container">
          <h2 className="returns-policy-title">WHAT IS DSE RETURNS POLICY?</h2>
          
          <div className="returns-policy-content">
            <p>
              All purchases can be returned within 30 days{' '}
              <span className="returns-policy-underline">(some exceptions apply)</span>. To be eligible, 
              an item must be unworn, unwashed with the complete accessories included, and 
              in the original packaging, which must also be in a re-saleable condition. This 
              policy includes custom DSE{' '}
              <span className="returns-policy-underline">By You</span> sneakers.
            </p>
            
            <p>
              After 30 days, you can still return items with approval if the items meet the 
              return criteria stated above or otherwise. We reserve the right not to agree to 
              the return.
            </p>
            
            <p>
              And remember, returns are always free for Members—just make sure you sign in 
              during checkout.
            </p>
            
            <p>
              So go ahead, shop with confidence.
            </p>
          </div>
          
          <div className="returns-policy-button-group">
            <button className="returns-policy-button">Shop</button>
            <button className="returns-policy-button">Start a Return</button>
            <button className="returns-policy-button">Become a Member</button>
          </div>
        </div>
      </div>
    </>
  );
}