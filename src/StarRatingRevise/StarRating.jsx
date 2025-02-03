import React, { useMemo, useState } from "react"
import "./starrating.css"; 



const StarButton = React.memo(({starRating, isActive, handleMouseEnter, 
    handleMouseLeave, handleClick}) =>{
        console.log("Star Button")
    return <button onClick={()=>{handleClick(starRating)}} 
    onMouseEnter={()=>handleMouseEnter(starRating)} 
    onMouseLeave={handleMouseLeave} 
    className={isActive ? "star active" : "star"}>  &#9733;</button>
                   
})

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const ratingText = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  
    // Memoize the star buttons to avoid re-creation on every render
    const stars = useMemo(() => {
      return [...Array(5)].map((_, index) => {
        const starRating = index + 1;
        console.log("Star Rating"+starRating)
        const isActive = starRating <= (hover || rating);
        return (
          <StarButton
            key={starRating} // Add key for array items
            starRating = {starRating}
            handleClick={setRating}
            handleMouseEnter={setHover}
            handleMouseLeave={() => setHover(0)}
            isActive = {isActive}
          >
            &#9733;
          </StarButton>
        );
      });
    }, [hover, rating]); // Dependencies: hover and rating
  
    return (
      <div className="star-rating-container">
        <div className="stars">{stars}</div>
        {rating  ? ratingText[rating - 1] : "No Rating"}
      </div>
    );
  }