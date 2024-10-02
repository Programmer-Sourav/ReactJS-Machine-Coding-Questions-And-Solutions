import { useEffect, useState } from "react";

export default function useWindowSize(){

const [windowSize, setWindowSize] = useState({height: window.innerHeight, width: window.innerWidth})

const handleResize = () =>{
    setWindowSize({height: window.innerHeight, width: window.innerWidth})
}

useEffect(()=>{
    window.addEventListener("scroll", handleResize)

    return ()=>{
        window.removeEventListener("resize", handleResize)
    }
}, [])

return windowSize;
   
}