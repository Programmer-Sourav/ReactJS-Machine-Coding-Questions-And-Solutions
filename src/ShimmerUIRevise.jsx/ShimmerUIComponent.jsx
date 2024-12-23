import "../meme1.css"

import { useEffect, useState } from "react"
import Meme from "./Meme"
import Shimmer from "./Shimmer"



export default function ShimmerUIRevise(){

    const url = "https://meme-api.com/gimme/20"
    const [data, setData] = useState([])


    const fetchData = async() =>{
     const response = await fetch(url)
     const data = await response.json();
     const memes = data.memes;
     setData(memes)
    }

    useEffect(()=>{fetchData()}, [])

    return(
        <div className="body">
         {
            data ? data.map((meme, i)=>(
                <div key={i}> 
                <Meme url = {meme.url} key={i}/>
                </div>
            )) : <Shimmer/>
         }
        </div>
    )
}