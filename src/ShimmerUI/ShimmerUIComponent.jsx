import { useEffect, useState } from "react"
import Meme from "./Meme";
import Shimmer from "./Shimmer";

export default function ShimmerUIComponent(){

    const url = "https://meme-api.com/gimme/20"
    const [memes, setMemes] = useState([])


    const fetchMemes = async() =>{
        const data = await fetch(url);
        const json = await data.json();
        console.log(222, json);
        setMemes(json.memes);
    }

    useEffect(()=>{
        fetchMemes()
    }, [])

    return(
        <div> 
            {
              !memes? <Shimmer/> :  memes && memes.map((memeItem, i)=>(
                    <div key={i}> 
                     <Meme key={i} data={memeItem}/>
                    </div>
                ))
            }

        </div>
    )
}