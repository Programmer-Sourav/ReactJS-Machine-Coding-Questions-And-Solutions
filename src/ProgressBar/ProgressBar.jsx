import { useEffect, useState } from "react"
import "./progressbar.css"

export default function ProgressBar(){
   const [filled, setFilled] = useState(0)
   const [isRunning, setIsRunning] = useState(false)
   const [timerId, setTimerId] = useState(null)


   useEffect(()=>{
    if(isRunning && filled<100){
       const id = setTimeout(()=>{
          setFilled((prev)=>prev+1)
        }, 250)
        setTimerId(id)
    }
    else if(filled === 100){
        setIsRunning(false)
    }
   }, [filled, isRunning])


   const handleStart = () =>{
    setIsRunning(true)
   }

   const handleReset = () =>{
    clearTimeout(timerId);
    setFilled(0);
    setIsRunning(false);
   }

   const handleStop = () =>{
    setIsRunning(false);
   }
    return(
        <div>
        <div className="progressbar">
          <div
          className={`progressbar-filled`} style={{ width: `${filled}%` }}
        ></div>
        <span className='progressPercent'>{filled}%</span>
        </div>
         <button className='btn' onClick={handleStart} disabled={isRunning}>
         Start
       </button>
       <button className='btn' onClick={handleStop} disabled={!isRunning}>
         Stop
       </button>
       <button className='btn' onClick={handleReset}>
         Reset
       </button>
       </div>
    )
}