import { useEffect, useState } from "react";

export default function useFetch(url){

    console.log(666, url);
 const [data, setData] = useState([])
 const [loading, setLoading] = useState(null)
 const [error, setError] = useState(null)



 const fetchData = async () =>{
    console.log("Inside FetchData")
    try{
    const response = await fetch(url);
    console.log(555, url);
    if(!response.ok){
        throw new Error("Error with Network Response")
    }
    const result = await response.json()
    console.log(123, result.products);
    //setData(result.products);
    setData(result);
    }
    catch(error){
        console.log("Error ", error);
        setError(error)
    }
    finally{
        setLoading(false)
    }
}

 useEffect(()=>{
    console.log(222, "UseEffect!")
    fetchData()
 }, [])

return {data, loading, error}
}