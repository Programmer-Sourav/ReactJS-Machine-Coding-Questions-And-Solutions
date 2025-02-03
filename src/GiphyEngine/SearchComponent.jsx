// /https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25

import { useEffect, useState } from "react"
import { useSearch } from "./useSearch"
import Gif from "./Gif";

export default function SearchComponent(){
   const [inputValue, setInputValue] = useState("")

   let query = inputValue;

   const { gifyData} = useSearch({query})

    return(
        <div> 
         <h2>Giffy Engine</h2>

          <input type="text" value={inputValue} 
          onChange={(e)=>{setInputValue(e.target.value)}} 
          placeholder="Search Giffy..."/>
          
          <Gif giffies = {gifyData}/>
        </div>
    )
}