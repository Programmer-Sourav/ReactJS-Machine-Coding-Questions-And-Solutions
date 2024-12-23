import "../meme1.css"

export default function Shimmer(){


    return(
        <div>
        {Array(10).fill(0).map((item, i)=>(
            <img alt="shimmer" className="shimmercard" key={i}/>
        ))}        
       </div>
    )
}