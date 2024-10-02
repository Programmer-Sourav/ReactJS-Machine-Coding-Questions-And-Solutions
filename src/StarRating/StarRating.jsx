import { useState } from "react";
import "./starrating.css"; // Add CSS file for styling stars

export default function StarRating() {
  const [rating, setRating] = useState(0); // Holds the current rating (1-5)
  const [hover, setHover] = useState(0);   // Handles hover effect for stars

  const ratingText = ["Poor", "Fair", "Good", "Very Good", "Excellent"]; // Text for each rating

  return (
    <div className="star-rating-container">
      <div className="stars">
        {/* Generate 5 stars dynamically */}
        {[...Array(5)].map((star, index) => {
          const starRating = index + 1;
          return (
            <button
              key={starRating}
              type="button"
              className={starRating <= (hover || rating) ? "star active" : "star"}
              onClick={() => setRating(starRating)} // Set the clicked rating
              onMouseEnter={() => setHover(starRating)} // Hover effect
              onMouseLeave={() => setHover(0)} // Reset hover when leaving
            >
              &#9733; {/* Unicode for filled star */}
            </button>
          );
        })}
      </div>
      {/* Show the rating text corresponding to the current rating */}
      <div className="rating-text">
        {rating > 0 ? <p>{ratingText[rating - 1]}</p> : <p>No Rating</p>}
      </div>
    </div>
  );
}
