import useRemoteapi from "./remoteapi"
import "./typeahead.css"
import { useState } from "react"

export default function TypeAhead(){

   const [searchInput, setSearchInput] = useState("")
  

   const { responseFromServer, loading } = useRemoteapi(searchInput)


    return(
        <div> 
         <input type="search" value={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}} 
          className="searchInput"
          placeholder="Start Typing..."/>
         {loading && <div>Loading...</div>}
          {responseFromServer.map((resultItem)=>(
           <li key={resultItem.url}>{resultItem.name}</li>
          ))}

        </div>
    )
}