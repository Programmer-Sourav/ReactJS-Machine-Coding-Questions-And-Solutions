import "./stopwatch-v-1.css"
import { useEffect, useState } from "react"

export default function StopwatchvOne(){
   const [time, setTime] = useState(0) // Time in milliseconds
   const [running, setRunning] = useState(false)

   const startStopwatch = () =>{
    setRunning(true)
   }

   const stopStopwatch = () =>{
    setRunning(false)
   }

   //reset
   const resetStopwatch = () =>{
    setRunning(false)
    setTime(0)
   }

   useEffect(()=>{
    let timerId;
    if(running){
    timerId= setInterval(()=>{
        setTime((pTime)=>pTime+10)
    }, 10)
    }
    else if(!running && time!==0){
     clearInterval(timerId)
    }
    return ()=>{clearInterval(timerId)}
   }, [running, time])


   const formatTime = (time) => {
    const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

    return(
 <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="timer-display">{formatTime(time)}</div>
      <div className="stopwatch-buttons">
        {!running ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
    )
}