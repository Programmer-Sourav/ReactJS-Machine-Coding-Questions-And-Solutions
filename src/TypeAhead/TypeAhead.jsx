import useRemoteapi from "./remoteapi"
import "./typeahead.css"
import { useState } from "react"
import useRemoteApi from "./UseRemoteapiRevise"

export default function TypeAhead(){

   const [searchInput, setSearchInput] = useState("")
  

   //const { responseFromServer, loading } = useRemoteapi(searchInput)
    const { responseFromServer, loading} = useRemoteApi(searchInput);
   console.log(777, responseFromServer);
    return(
        <div> 
         <input type="search" value={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}} 
          className="searchInput"
          placeholder="Start Typing..."/>
         {loading && <div>Loading...</div>}
          {responseFromServer.map((resultItem)=>(
        //    <li key={resultItem.url}>{resultItem.name}</li>
        <li key={resultItem.id}>{resultItem.id}- {resultItem.title} - {resultItem.completed}</li>
          ))}

        </div>
    )
}