import "../CountdownTimer/c-timer.css"
import { useEffect, useState } from "react"

export default function CountDownTimerR2(){
 
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)


    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
      };


      useEffect(()=>{
        const interval = setInterval(()=>{
            if (isActive && (hours>0 || minutes> 0 || seconds> 0)){
    
               if(seconds>0){
                    setSeconds((seconds)=>seconds-1)
                }
                else if(minutes>0){
                    setMinutes((minutes)=>minutes-1)
                    setSeconds(59)
                }
                else if(hours>0){
                    setHours((hours)=>hours-1)
                    setMinutes(59)
                    setSeconds(59)
                }    
            }
          }, 1000)

          return ()=>clearInterval(interval)

      }, [isActive, hours, minutes, seconds])

      
     const startTimer = () =>{
       setIsActive(isActive=>!isActive)
     }

    return(
        <div className="countdowntimerbody"> 
         <input type="number" value={formatTime(hours)} onChange={(e)=>{setHours(Math.max(0, (Math.min(23, e.target.value))))}} className="cdcell"/>
         <input type="number" value={formatTime(minutes)} onChange={(e)=>{setMinutes(Math.max(0, Math.min(59, e.target.value)))}} className="cdcell"/>
         <input type="number" value={formatTime(seconds)} onChange={(e)=>{setSeconds(Math.max(0, Math.min(59, e.target.value)))}} className="cdcell"/>
         <button onClick={startTimer}>Start Now</button>
        </div>
    )
}