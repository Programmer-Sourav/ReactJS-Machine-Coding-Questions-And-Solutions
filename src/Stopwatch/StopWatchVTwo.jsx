import { useRef, useState } from "react"

export default function StopWatch(){
    // will start from zero
    // mm:ss:mss mss
    // setMiliseconds((mss+1))
    // if(mss>1000)
    // setSeconds((ss+1))
    // if(ss>1)
    // setMinute((m+1))
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [millis, setMillis] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

  
    const intervalref = useRef(null)

    function formatTime(value){
       return String(value).padStart(2, "0")
    }


    function formatTime(){
     
    }

    const startStopwatch = () =>{
      if(!isRunning){
        setIsRunning(true);
        intervalref.current = setInterval(()=>{
          setMillis((pMillis)=>{
            if(pMillis<999){
              return pMillis + 1;
            }
            else{
              setSeconds((pSeconds)=>{
                if(pSeconds<59)
                  return (pSeconds+1)
                else{
                  setMinutes((pMinutes)=>pMinutes + 1)
                  return 0;
                }
              })
              return 0;
            }
          })
        }, 1) //update every millisecond
      }
    }

    const stopStopwatch = () =>{
      clearInterval(intervalref.current)
      setIsRunning(false)
      setMillis(0)
      setMinutes(0)
      setSeconds(0)
    }
    const resetStopwatch = () =>{
      setMillis(0)
      setMinutes(0)
      setSeconds(0)
    }

    return(
      <div>
      <h1>
        {formatTime(minutes)}:{formatTime(seconds)}:
        {String(millis).padStart(3, "0")}
      </h1>
      <div>
        {!isRunning ? (
          <button onClick={startStopwatch}>Start Stopwatch</button>
        ) : (
          <button onClick={stopStopwatch}>Stop Stopwatch</button>
        )}
        <button onClick={resetStopwatch}>Reset Stopwatch</button>
      </div>
    </div>
    )
}