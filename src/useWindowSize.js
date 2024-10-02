import { useEffect, useState } from "react";

export default function useWindowSize(){

const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})

const handleSize = () =>{
    console.log(123, window.innerWidth, window.innerHeight)
   setWindowSize({ width: window.innerWidth, height: window.innerHeight })
}


useEffect(()=>{
    window.addEventListener("resize", handleSize);

    return()=>{
        window.removeEventListener("resize", handleSize)
    }
}, [])

return windowSize


}