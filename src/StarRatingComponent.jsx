import { useState } from "react"
import "./starrating.css"

export default function StarRatingComponent(){
      //5-stars
      //Simple Array of 5 stars
      //click on the star to or input value to change css of the required number of stars rating 
      //

      const [rating, setRating ] = useState(0)
      const [hoverRating, setHoverRating] = useState(0);

      const currentRating = hoverRating || rating;

      const ratingMessages = ['Awful', 'Poor', 'Fair', 'Good', 'Excellent']


      const handleClick = (value) =>{
        console.log("Rating "+value)
           setRating(value)
      }

      const handleMouseOver = (value) =>{
        console.log("Hover Rating "+value)
        setHoverRating(value)
      }

      const handleMouseLeave = () =>{
        console.log("Mouse Leave ")
        setHoverRating(0)
      }

      const getRatingMessage = (ratingValue) =>{
        console.log("Rating Value "+ Math.ceil(ratingValue) + ", "+ ratingMessages[Math.ceil(ratingValue) - 1] + ", "+ ratingValue)
        return ratingMessages[Math.ceil(ratingValue) - 1];
      }

      const renderStar = (index) =>{
       const fullStar = (hoverRating || rating)>index;
       console.log("Fullstar "+ fullStar + ", "+ index +" , "+ rating +", "+hoverRating)
       return(
        <span key={index} className= {`star ${fullStar ? 'full' : ''}`}
        onClick={()=>handleClick(index+1)}
        onMouseOver = { ()=>handleMouseOver(index+1)}
        onMouseLeave = { handleMouseLeave}  >
        {fullStar ? '★' : '☆'}
        </span>
       )
      }

    return(
        <div className="container">
            <div className="star-rating">
               { Array.from({length: 5}).map((_, index)=>(
                renderStar(index)
               ))
               } 
               <span className="rating-message">
                <strong>{getRatingMessage(currentRating)}</strong>
               </span>
            </div> 
        </div>
    )
}