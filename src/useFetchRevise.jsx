import { useEffect, useState } from "react"

export default function useFetchRevise(url){
 
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const fetchData = async() =>{
      try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Error with Network Response")
        }
        const data = await response.json()
        setData(data)
        setLoading(false)
      }
      catch(error){
        setError(error)
        setLoading(false)
      }
    }

    useEffect(()=>{
        fetchData();
    }, [])
 

    return { data, loading, error}
}