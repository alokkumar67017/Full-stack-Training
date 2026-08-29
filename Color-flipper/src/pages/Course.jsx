import React from "react";
import "./Course.css";

function Course() {
  return (
    <main className="course-page">

      {/* Course Hero */}
      <section className="course-hero">

        <div className="course-hero-content">
          <p>LEARN • BAKE • CREATE</p>

          <h1>
            Master The Art
            <br />
            Of Baking
          </h1>

          <span>
            Learn professional baking techniques from our experienced
            bakers and turn your passion into delicious creations.
          </span>
        </div>

        <div className="course-hero-image">
          <img
            src="/images/course.jpg"
            alt="Baking Course"
          />
        </div>

      </section>


      {/* Courses */}
      <section className="courses-section">

        <div className="course-heading">
          <p>OUR COURSES</p>
          <h2>Choose Your Baking Journey</h2>
          <span>
            From beginner basics to advanced baking techniques,
            we have something for everyone.
          </span>
        </div>


        <div className="courses-container">

          {/* Course 1 */}
          <div className="course-card">

            <img
              src="/images/cake.jpg"
              alt="Cake Baking Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                BEGINNER
              </span>

              <h3>Cake Baking</h3>

              <p>
                Learn how to bake soft, delicious cakes and decorate
                them beautifully for every occasion.
              </p>

              <div className="course-details">
                <span>⏱ 4 Weeks</span>
                <span>👨‍🍳 Beginner</span>
              </div>

              <div className="course-bottom">
                <strong>₹2,999</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>


          {/* Course 2 */}
          <div className="course-card">

            <img
              src="/images/pastry.jpg"
              alt="Pastry Making Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                INTERMEDIATE
              </span>

              <h3>Pastry Making</h3>

              <p>
                Discover the secrets of making flaky, creamy and
                delicious bakery-style pastries.
              </p>

              <div className="course-details">
                <span>⏱ 5 Weeks</span>
                <span>👨‍🍳 Intermediate</span>
              </div>

              <div className="course-bottom">
                <strong>₹3,499</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>


          {/* Course 3 */}
          <div className="course-card">

            <img
              src="/images/cookies.jpg"
              alt="Cookie Making Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                BEGINNER
              </span>

              <h3>Cookie Making</h3>

              <p>
                Learn different cookie recipes, baking techniques
                and creative decoration methods.
              </p>

              <div className="course-details">
                <span>⏱ 3 Weeks</span>
                <span>👨‍🍳 Beginner</span>
              </div>

              <div className="course-bottom">
                <strong>₹1,999</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>


          {/* Course 4 */}
          <div className="course-card">

            <img
              src="/images/bread.jpg"
              alt="Bread Baking Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                INTERMEDIATE
              </span>

              <h3>Artisan Bread</h3>

              <p>
                Learn the complete process of making fresh,
                soft and delicious artisan bread.
              </p>

              <div className="course-details">
                <span>⏱ 4 Weeks</span>
                <span>👨‍🍳 Intermediate</span>
              </div>

              <div className="course-bottom">
                <strong>₹2,499</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>


          {/* Course 5 */}
          <div className="course-card">

            <img
              src="/images/cupcake.jpg"
              alt="Cupcake Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                BEGINNER
              </span>

              <h3>Cupcake Decoration</h3>

              <p>
                Learn professional cupcake decoration techniques
                using different creams and toppings.
              </p>

              <div className="course-details">
                <span>⏱ 2 Weeks</span>
                <span>👨‍🍳 Beginner</span>
              </div>

              <div className="course-bottom">
                <strong>₹1,499</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>


          {/* Course 6 */}
          <div className="course-card">

            <img
              src="/images/chocolate.jpg"
              alt="Chocolate Making Course"
            />

            <div className="course-card-content">

              <span className="course-level">
                ADVANCED
              </span>

              <h3>Chocolate Making</h3>

              <p>
                Explore chocolate tempering, truffles, decorations
                and professional chocolate techniques.
              </p>

              <div className="course-details">
                <span>⏱ 6 Weeks</span>
                <span>👨‍🍳 Advanced</span>
              </div>

              <div className="course-bottom">
                <strong>₹4,499</strong>
                <button>Enroll Now</button>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Why Learn */}
      <section className="learn-section">

        <div className="learn-heading">
          <p>WHY LEARN WITH US?</p>
          <h2>Become A Better Baker</h2>
        </div>

        <div className="learn-container">

          <div className="learn-box">
            <div>👨‍🍳</div>
            <h3>Expert Bakers</h3>
            <p>
              Learn directly from experienced professional bakers.
            </p>
          </div>

          <div className="learn-box">
            <div>🏆</div>
            <h3>Practical Training</h3>
            <p>
              Get hands-on experience and practice every technique.
            </p>
          </div>

          <div className="learn-box">
            <div>📜</div>
            <h3>Certificate</h3>
            <p>
              Receive a certificate after successfully completing
              your course.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Course;