import { useState } from "react"
import useTimeoutRevise from "./useTimeoutRevise"

export default function UseTimeoutComponent(){
  const [message, setMessage] = useState("Waiting!")

  useTimeoutRevise(()=>{setMessage("Completed execution!")}, 3000)


    return(
         <h1>{message}</h1>
    )
}