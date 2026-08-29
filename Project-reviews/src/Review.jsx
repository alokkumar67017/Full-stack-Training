import { useState } from "react";
import reviews from "./data";
import "./review.css";

function Review() {
  const [currentItem, setCurrentItem] = useState(0);

  const currentReview = reviews[currentItem];

  // Next Review
  const nextReview = () => {
    setCurrentItem((current) => {
      if (current === reviews.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  // Previous Review
  const previousReview = () => {
    setCurrentItem((current) => {
      if (current === 0) {
      }

      return current - 1;
    });
  };

  // Random Review
  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    while (randomIndex === currentItem) {
      randomIndex = Math.floor(Math.random() * reviews.length);
    }

    setCurrentItem(randomIndex);
  };

  return (
    <main>
      <section className="container">

        {/* Title */}
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>

        {/* Review */}
        <article className="review">

          {/* Image */}
          <div className="img-container">
            <img
              src={currentReview.img}
              id="person-img"
              alt={currentReview.name}
            />
          </div>

          {/* Name */}
          <h4 id="author">
            {currentReview.name}
          </h4>

          {/* Job */}
          <p id="job">
            {currentReview.job}
          </p>

          {/* Text */}
          <p id="info">
            {currentReview.text}
          </p>

          {/* Previous / Next */}
          <div className="button-container">

            <button
              className="prev-btn"
              onClick={previousReview}
            >
              
            </button>

            <button
              className="next-btn"
              onClick={nextReview}
            >
              
            </button>

          </div>

          {/* Random */}
          <button
            className="random-btn"
            onClick={randomReview}
          >
            Surprise Me
          </button>

        </article>

      </section>
    </main>
  );
}

export default Review;