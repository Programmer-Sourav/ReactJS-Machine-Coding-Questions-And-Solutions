import { useEffect, useState } from "react";

export default function useDebounce(value, delay){

    const [debouncedValue, setDebouncedValue] = useState(value);


    useEffect(()=>{
        const debounceHandler = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        return ()=>{clearInterval(debounceHandler)}

    }, [value, delay]);

    return debouncedValue;
}