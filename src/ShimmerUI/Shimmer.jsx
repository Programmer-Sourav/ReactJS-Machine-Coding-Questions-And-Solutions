import "../meme.css"

export default function Shimmer(){
 
  

    return(
        <div>
        { Array(10).fill(0).map((item, i)=>(
      
         <img  alt="meme" className="shimmer"/>
        
           )) }
        </div>
    )
}