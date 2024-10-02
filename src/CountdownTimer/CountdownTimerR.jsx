import { useEffect, useState } from "react"
import "./c-timer.css"

export default function CountdownTimerR(){

    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)


    const startTimer = () => {
        let intervalTimer = null;
        if (hour > 0 || minutes > 0 || seconds > 0) {
            intervalTimer = setInterval(() => {
            //second will be 59 and (59 > 0) will be true
            // if condition will keep on running till it becomes 0
            if (seconds > 0) {
              // from 59 seconds it keeps on decrementing
              setSeconds((seconds) => seconds - 1);
              //minute will be 59 and (59 > 0) will be true
            } else if (minutes > 0) {
              // from 59 minutes it keeps on decrementing
              setMinutes((minutes) => minutes - 1);
              // we are setting the state of the second to 59
              setSeconds(59);
            } else if (hour > 0) {
              // any number can be provided in hour, which is greater than 0 (Ex: 9, will be come (9-1) i.e 8: 59: 59)
              setHour((hours) => hours - 1);
              //for hour, we are setting both the states to 59 (minute, second)
              setMinutes(59);
              setSeconds(59);
            }
          }, 1000);
      }
      else if(intervalTimer!==null){
        clearInterval(intervalTimer)
      }
      return () =>{clearInterval(intervalTimer)}
    }
      


    return(
        <div>
            <h1>Countdown Timer</h1> 
            <div className="countdowntimerbody">
            <span className="cdcell"><input type="text" value={hour} placeholder="00" className="cdcell" onChange={(e)=>{setHour(e.target.value)}}/></span> <span className="cdcell">:</span> <span className="cdcell"><input type="text" value={minutes}placeholder="00" className="cdcell" onChange={(e)=>{setMinutes(e.target.value)}}/></span> <span className="cdcell">:</span> <span className="cdcell"><input type="text" value={seconds}placeholder="00" className="cdcell" onChange={(e)=>{setSeconds(e.target.value)}}/></span>
            <button onClick={startTimer}>Start Timer</button>
            </div>
        </div>
    )
}