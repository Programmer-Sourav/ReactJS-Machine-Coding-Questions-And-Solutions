import './rating.css';

import { useState } from "react"

export default function RatingComponent({readRating}){
   const [myRating, setMyRating] = useState(0)
   const stars = [1,2,3,4,5]
   const readStars = [1,2,3,4,5]
   const maxStars = 5;
   const emptyStars = maxStars - myRating;

   //const percentStar = 
   //for percent star, we need to get the value after decimal point and calculate it for a single star
//    for(let i =0; i<myRating; i++){
//     stars.push(<span key={`${i}2`} className="orange"> &#9733;</span>)
//    }

   //initially, maxStars and emptyStars will be same
//    for(let i = 0; i<emptyStars; i++){
//     stars.push(<span key={`${i}1`} className="grey"> &#9733;</span>)
//    }
   console.log(444, myRating);

    return(
        <div> 
            {/** Selecting Star */}
            {stars.map((star)=>{
               return <span key={`${star}`} className={`${star <=myRating ? "orange" : "grey"}`} onClick={()=>{setMyRating(star)}}> &#9733;</span>
            })
            }
            {/* <p>Give Rating: {myRating} - {emptyStars} </p>
            <input type='text' value={myRating} onChange={(e)=>{setMyRating(e.target.value)}}/> */}
            {/** Reading Star */}
            <div></div>
            {readStars.map((star)=>{
               return <span key={`${star}`} className={`${star <=readRating ? "orange" : "grey"}`}> &#9733;</span>
            })
            }
        </div>
    )
}