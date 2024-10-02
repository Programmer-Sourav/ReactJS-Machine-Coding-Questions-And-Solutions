import { useEffect, useState } from "react"

export default function useFetch(url){


   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)



   useEffect(()=>{
    fetch(url).then((response)=>response.json()).then((data)=>{
    setData(data);
    setLoading(false)})
   }, 
   [url])

    return {data, loading}
}