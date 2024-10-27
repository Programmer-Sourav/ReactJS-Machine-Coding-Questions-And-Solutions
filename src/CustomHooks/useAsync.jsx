import { useCallback, useEffect, useState } from "react"

export default function useAsync(asyncFunction){

   const [loading, setLoading] = useState(false)
   const [value, setValue] = useState(null)
   const [error, setError] = useState(null)

   //execute the function that handles error logic
   const execute = useCallback(()=>{
    setLoading(true);
    setError(null);

    return asyncFunction.then((response)=>{
        setValue(response);
        setLoading(false);
    }).catch((err)=>{
        setError(err.message || "An error occured")
        setLoading(false);
    })
   }, [asyncFunction])
 
    return{execute, loading, value, error}
}