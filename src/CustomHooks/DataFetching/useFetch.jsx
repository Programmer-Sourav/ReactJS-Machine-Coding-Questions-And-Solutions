import { useEffect, useState } from "react"

export default function useFetch(url){

 const [data, setData] = useState([])
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState("")




 const fetchDataFromRemote = async(url) =>{
    setLoading(true);
    try{
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    const data = await response.json();
    setData(data) 
    setLoading(false);   
    }
    catch(error){
     setError(error)
     setLoading(false)
    } 
    finally{
        setLoading(false)
    }
 }


 useEffect(()=>{

  fetchDataFromRemote(url)

 }, [url])






    return {data, loading, error}
}