import "./starrating.css"

import { useState } from "react"

export default function StarRating(){

   const [rating, setRating] = useState(0)
   const [hover, setHover] = useState(0)


   const handleStars = (selectedRating) =>{
       setRating(selectedRating);
   }
   

    return(
        <div className="star-rating-container">
            <div className="stars">
              {
                Array.from({length: 5}).map((item, index)=>{
                    const selectedRating = index + 1;
                    return(
                    <button 
                    key={selectedRating}
                    onClick={()=>{handleStars(selectedRating)}} 
                    onMouseLeave={()=>{setHover(0)}} 
                    onMouseEnter={()=>setHover(selectedRating)} 
                    className={selectedRating<=(hover | rating) ? "star active" : "star"}>&#9733;</button>
                    )
                })
              }
            </div> 
        </div>
    )
}