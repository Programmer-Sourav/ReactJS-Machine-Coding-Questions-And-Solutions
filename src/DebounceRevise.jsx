import { useEffect, useState } from "react";

export default function DebounceRevise( value, delay){
   const [debounceValue, setDebounceValue] = useState(value)

  useEffect(()=>{

    const debounceTimer = setTimeout(()=>{
      setDebounceValue(value)
    }, delay)

    return ()=>clearInterval(debounceTimer);

  }, [value, delay])

  return debounceValue;
}