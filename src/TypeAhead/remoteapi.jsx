import { useEffect, useState } from "react";

export default function useRemoteapi(inputQuery){
    

    const [responseFromServer, setResponseFromServer] = useState([]);
    const [loading, setLoading] = useState(false);

    const BASE_URL = 'https://swapi.dev/api';

    const fetchCharacters = async(inputQuery, signal) =>{
        // console.log(777, inputQuery, signal);
       try{
        const response =  await fetch(`${BASE_URL}/people/?search=${inputQuery}`, {
            signal,
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } 
         const dataFS = await response.json().then((data)=>(data.results || [])).catch((error) => {
            if (error.name !== 'AbortError') {
              console.error('Fetch error:', error);
              setLoading(false);
            }
          });
         console.log("dataFS ", dataFS);

         setResponseFromServer(dataFS)
       }
       catch(error){
        console.error("Error ", error);
       }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
        if(inputQuery.length>1){   
            console.log(111, inputQuery.length) 
            const controller = new AbortController();
            const signal = controller.signal;
            setLoading(true);
            fetchCharacters(inputQuery, signal)
        console.log(555, responseFromServer)
        return () => controller.abort();
         }
         else{
            setLoading(false);
            setResponseFromServer([])
         }
         
        }, 1000)
        return () =>clearTimeout(timer);
       }, [inputQuery])



    return { responseFromServer, loading }
}