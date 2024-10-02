import { useEffect, useState } from "react"

export default function UseWindowSize(){

 const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})


 const handleResize = () =>{
    setWindowSize({width: window.innerWidth, height: window.innerHeight})
 }

 useEffect(()=>{
     window.addEventListener("scroll", handleResize)
 
     return () =>{
        window.removeEventListener("resize", handleResize)
     }

 }, [])

   return windowSize
}