import { useEffect, useState } from "react"

export default function StopWatch(){

     const [isRunning, setIsRunning] = useState(false)
     const [milliSeconds, setMilliSeconds] = useState(0)
     const [seconds, setSeconds] = useState(0)
     const [minutes, setMinutes] = useState(0)

     useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                   setMilliSeconds((prevMilli)=> {
                    if(prevMilli>=990){
                        setSeconds((prevSecs)=>{
                            if(prevSecs>59){
                                setMinutes((prevMin)=>{prevMin+1})
                                return 0; 
                            }
                           return prevSecs + 1;
                        })
                        return 0;
                    }
                    return prevMilli + 10;
                   })
                 }, 10)
        }
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval)
     }, [isRunning])


     // Format time to always show 2 digits
     const formatTime = (timeUnit) => timeUnit.toString().padStart(2, "0")

     const startStopwatch = () =>{
              setIsRunning(true)
     }

     const stopStopWatch = () =>{
              setIsRunning(false)
     }

     const resetStopwatch = () =>{
          setIsRunning(false)
          setMinutes(0)
          setSeconds(0)
          setMilliSeconds(0)
     }

    return(
        <div> 
         <h1> 
            {formatTime(minutes)} : {formatTime(seconds)} : {formatTime(Math.floor(milliSeconds/10))}
         </h1>
         <div> 
            {!isRunning ? (<button onClick={startStopwatch}>Start Stopwatch</button>) : 
                           (<button onClick={stopStopWatch}>Stop Stopwatch</button>)}
            <button onClick={resetStopwatch}>Reset</button>               
         </div>
        </div>
    )
}