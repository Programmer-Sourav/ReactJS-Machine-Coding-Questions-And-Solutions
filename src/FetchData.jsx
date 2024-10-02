import { useEffect, useState } from "react"

export default function FetchData () {

    const[downloadedData, setDownloadedData] = useState([])



    useEffect(()=>{
      fetch("apiUrl").then((response)=>response.json()).then((data)=>setDownloadedData(data)).catch((error)=>console.error("Error fetching data", error));
    }, [])


    return(
        <div> 
              <h1>Downloaded Datas!</h1>
              {
                downloadedData.map((data)=>(
                    <li key = {data.id}> {data.name} </li>
                ))
              }

        </div>
    )
}