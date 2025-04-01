import { useEffect, useState } from "react"

export default function StopWatch(){
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)
const [milliSeconds, setMilliSeconds] = useState(0)
const [isRunning, setIsRunning] = useState(false)



useEffect(()=>{
    let interval;
if(isRunning){
   interval =  setInterval(()=>{
          setMilliSeconds((pms)=>{
              if(pms>=990){
               setSeconds((psecs)=>{
                  if(psecs>59){
                setMinutes((pminutes)=>{pminutes + 1;})
                return 0;
                 }
                 return psecs+1;
               })
               return 0;
            }
            return pms + 10;
          })
    }   
    , 10)
}
else{
    clearInterval(interval);
}

return ()=>clearInterval(interval)
}, [isRunning])



function formatTime(timeUnit){
   return timeUnit<10 ? `0{timeUnit}` : timeUnit
}

function startStopwatch(){

}

function stopStopWatch(){

}

    return(
      <div> 
       <h1> 
        {formatTime(minutes)} : {formatTime(seconds)} : {Math.floor(formatTime(milliSeconds/10))}
       </h1>
       <div> 
        {!isRunning ? <button onClick={startStopwatch}>Start</button> : <button onClick={stopStopwatch}>Stop</button> }
       </div>
      </div>
    )
}