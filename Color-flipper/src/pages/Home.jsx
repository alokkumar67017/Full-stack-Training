import React from "react";
import "./Home.css";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-small-title">
            WELCOME TO SWEET DREAMS
          </p>

          <h1>
            Freshly Baked
            <br />
            With Love
          </h1>

          <p className="hero-description">
            Delicious cakes, pastries, cookies and sweet treats
            made fresh every day with love and the finest ingredients.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Explore Our Bakery
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/brownies.jpg"
            alt="Freshly baked cake"
          />
        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="feature-box">
          <div className="feature-icon">🍰</div>
          <h3>Fresh Cakes</h3>
          <p>
            Freshly prepared cakes for every special occasion.
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">🥐</div>
          <h3>Fresh Pastries</h3>
          <p>
            Delicious pastries baked fresh every morning.
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">🍪</div>
          <h3>Sweet Cookies</h3>
          <p>
            Crispy and tasty cookies made with quality ingredients.
          </p>
        </div>

      </section>


      {/* Products */}
      <section className="products" id="products">

        <div className="section-heading">
          <p>OUR SPECIALS</p>
          <h2>Delicious Treats</h2>
        </div>

        <div className="product-container">

          <div className="product-card">
            <img
              src="/images/chocolate-cookies.jpg"
              alt="Chocolate Cake"
            />

            <div className="product-info">
              <h3>Chocolate Cake</h3>
              <p>
                Rich, soft and delicious chocolate cake.
              </p>
              <span>₹499</span>
            </div>
          </div>


          <div className="product-card">
            <img
              src="/images/decorated-cake.jpg"
              alt="Cupcake"
            />

            <div className="product-info">
              <h3>Fresh Cupcake</h3>
              <p>
                Soft cupcakes topped with delicious cream.
              </p>
              <span>₹99</span>
            </div>
          </div>


          <div className="product-card">
            <img
              src="/images/french-macarons.jpg"
              alt="Cookies"
            />

            <div className="product-info">
              <h3>Sweet Cookies</h3>
              <p>
                Crispy homemade cookies for every occasion.
              </p>
              <span>₹199</span>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;