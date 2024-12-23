import "./progressbar.css"
import { useEffect, useState } from "react"

export default function ProgressBarRevise(){
    
   const [filled, setFilled] = useState(0)
   const [isRunning, setIsRunning] = useState(false)
   const [timerId, setTimeId] = useState(null)



   useEffect(()=>{

    if(isRunning && filled<100){
    const id = setInterval(()=>{
        setFilled((prev)=>prev+1)
    }, 250)
    setTimeId(id);
    return ()=>{clearInterval(id)}
   }
   else if(filled === 100){
    console.log(444, filled)
    setIsRunning(false);
    clearTimeout(timerId);
   }

   }, [filled, isRunning])


   const onStartBtn = () =>{
      setIsRunning(true)
   }

   const onResetBtn = () =>{
    setIsRunning(false)
    setFilled(0)
    clearTimeout(timerId);
   }

   const onStopBtn = () =>{
     setIsRunning(false)
   }

    return(
        <div>
        <div className="progressbar">
        <div className= {`progressbar-filled`} style={{width: `${filled}%`}} >
        </div> 
            <span className="progressPercent">{filled}%</span>
        </div>
        <button onClick={onStartBtn} className="btn"> Start </button>
        <button onClick={onStopBtn} className="btn">Stop</button>
        <button onClick={onResetBtn} className="btn">Reset</button>
        </div>
    )
}