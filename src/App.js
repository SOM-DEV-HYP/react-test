import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Off from './components/Off/Off';
import Explore from './components/Explore/Explore';
import NewTrend from './components/NewTrend/NewTrend';
import StyleVibes from './components/StyleVibes/StyleVibes';
import NewArrival from './components/NewArrival/NewArrival';
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy/Privacy';
import Faq from './components/Faq/Faq';
import ContactUs from './components/ContactUs/ContactUs';
import Testimonials from './components/Testimonials/Testimonials';
import Cart from './components/Cart/Cart';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="site-root">
        <Header />  {/* Always visible */}

        <main>
          <Routes>
            <Route path="/" element={
              <>

                <NewTrend />
                <Off />
                <Explore />
                <Testimonials />
                <Hero />
              </>
            } />

            <Route path="/style-vibes" element={<StyleVibes />} />
            <Route path="/new-arrivals" element={<NewArrival />} />
            <Route path="/privacy-policies" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />  {/* Always visible */}
      </div>
    </Router>
  );
}
