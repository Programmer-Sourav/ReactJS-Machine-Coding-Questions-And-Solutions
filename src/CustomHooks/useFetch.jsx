import { useEffect, useState } from "react"

export default function useFetch(url){

    console.log(222, url)
    const [fetchedData, setFetchedData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function fetchData (url){
        console.log(1111, url)
        try{
             setLoading(true);
             const response = await fetch(url);
             console.log("Response "+response)
             const result = await response.json();
             console.log(result)
             setFetchedData(result)
             setLoading(false)
        }
        catch(error){
            setError(error)
           console.error("Error "+error);
        }
    }

    useEffect(()=>{
        fetchData(url);
    }, [url])


    return {
          fetchedData, loading, error
    }
}