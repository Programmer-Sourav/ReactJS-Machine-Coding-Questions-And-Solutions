import { useEffect, useState } from "react"

export default function StopWatchVOneRevise(){
const [time, setTime] = useState(0)
const [active, setActive] = useState(false)



useEffect(()=>{
    let interval;
    if(isRunning){
    interval= setInterval(()=>{
        setTime(time+10)
    }, 10)
}
else{
    clearInterval(interval)
}
return ()=> clearInterval(interval);
}
, [isRunning])


function formatTime(){
    const millis = ("0" + (time/10)%100).slice(-2);
    const seconds = ("0" + Math.floor((time/1000)%60)).slice(-2);
    const minutes = ("0" + Math.floor((time/60000)%60)).slice(-2);
    return `${minutes} : ${seconds} : ${millis}`
}

const handleStartStop = () =>{
   setActive(active =>!active)
}

const handleReset = () =>{
    setActive(active=>!active)
    setTime(0)
}
return(
        <div className="stopwatch-container">
        <h1>Stopwatch</h1>
        <h2>{formatTime(time)}</h2>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {active ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset} disabled={active}>
            Reset
          </button>
        </div>
      </div>
    )
}