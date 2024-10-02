import { useEffect, useState } from "react"
import "../progressbar.css"

export default function ProgressbarRevise(){

   const [filled, setFilled] = useState(0)
   const [started, setStarted] = useState(false)

  //total = 100
  //filed = 4
  //empty = 96

   useEffect(()=>{
    console.log(123, filled)
    if(!started){
    if(filled<100){    
    const interval = setInterval(()=>{
        setFilled((filled)=>filled+4)
    }, 250)
    return ()=>clearInterval(interval)
    }
   }
   else if(filled === 100){
     setStarted(false)
   }
}, [filled])

   const startProgressBar = () =>{
    setStarted(true)
   }
    return(
      <div> 
        <div className="progressbar">
            <div className="filled" style={{width: `${filled}%`}}>

            </div>
        </div>
        <button onClick={startProgressBar}>Start Progress Bar</button>
      </div>
    )
}