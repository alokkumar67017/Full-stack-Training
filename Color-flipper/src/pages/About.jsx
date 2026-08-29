import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* About Hero */}
      <section className="about-hero">

        <div className="about-hero-content">
          <p className="about-label">ABOUT SWEET DREAMS</p>

          <h1>
            Baking Happiness
            <br />
            Since Day One
          </h1>

          <p>
            At Sweet Dreams, we believe every celebration deserves
            something sweet. We prepare fresh cakes, pastries,
            cookies and other delicious treats with love and care.
          </p>
        </div>
{/* 
        <div className="about-hero-image">
          <img
            src="/images/about.jpg"
            alt="Sweet Dreams Bakery"
          />
        </div> */}

      </section>


      {/* Our Story */}
      <section className="our-story">
{/* 
        <div className="story-image">
          <img
            src="/images/bakery.jpg"
            alt="Our bakery"
          />
        </div> */}

        <div className="story-content">
          <p className="about-label">OUR STORY</p>

          <h2>Made With Love & Passion</h2>

          <p>
            Sweet Dreams started with a simple dream — to create
            delicious bakery products that bring people together.
          </p>

          <p>
            From classic cakes to freshly baked pastries, every item
            is carefully prepared using quality ingredients and
            traditional baking techniques.
          </p>

          <p>
            Our goal is simple: fresh ingredients, beautiful designs
            and amazing taste that makes every bite memorable.
          </p>

          <button className="story-btn">
            Discover More
          </button>
        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-us">

        <div className="section-title">
          <p>WHY SWEET DREAMS?</p>
          <h2>Why Choose Us</h2>
        </div>

        <div className="why-container">

          <div className="why-card">
            <div className="why-icon">🌾</div>
            <h3>Quality Ingredients</h3>
            <p>
              We use carefully selected and high-quality ingredients
              in every product.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">❤️</div>
            <h3>Made With Love</h3>
            <p>
              Every cake and pastry is prepared with care,
              passion and attention to detail.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">✨</div>
            <h3>Fresh Every Day</h3>
            <p>
              Our bakery products are freshly prepared to give you
              the best taste and experience.
            </p>
          </div>

        </div>

      </section>



    </main>
  );
}

export default About;