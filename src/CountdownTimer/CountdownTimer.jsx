import "../CountdownTimer/Timer.css"

import { useEffect, useState } from "react"

export default function CountdownTimer(){
   /***
    * hh:mm:ss
    * 60 min = 1 hours
    * 60 sec = 1 min
    * 
    * First second will decrease 
    * and once it touches 0, it will reduce one minute
    * and again starts from 59 to 0, again reduces one minute
    * Once min reaches >0, it reduces an hour
    * On clicking reset, it becomes 00:00:00
    * padstart() for sec<10, min<10, hour<10
    * 
    */

   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)
   const [activeOrPause, setActiveOrPause] = useState(false)
   const [message, setMessage] = useState(false);


   useEffect(()=>{
     let interval = null;
      //if timer is active, then if condition is true (ex: after click on start button)
      if(activeOrPause && (hours>0 || minutes>0 || seconds>0)){
        interval = setInterval(()=>{
            if(seconds>0){
                setSeconds((seconds)=>seconds-1)
            }
            else if(minutes>0){
                setMinutes((minutes)=>minutes-1)
                setSeconds(59)
            }
            else if(hours>0){
              setHours((hours)=>hours-1);
              setMinutes(59)
              setSeconds(59)
            }
        }, 1000)
      } else if(!activeOrPause && interval!==null){
             clearInterval(interval)
      }
      return ()=>{clearInterval(interval)}

   }, [ activeOrPause, hours, minutes, seconds])

   const pauseTimer = () => {
    setActiveOrPause(false);
  };

  const startTimer = () =>{
    if(hours=== 0 && minutes ===0 && seconds === 0){
        setMessage("Please provide some input value in timer box")
    }
    else{
        setActiveOrPause(true)
        setMessage("")
    }
  }
  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setActiveOrPause(false);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

    return(
        <div className='container'>
        <span className='container__title'>Countdown Timer</span>
  
        <div className='container__inputs'>
          <input
            type='number'
            value={formatTime(hours)}
            onChange={(e) =>
              setHours(Math.max(0, Math.min(23, parseInt(e.target.value))))
            }
            className='container__inputs--time'
          />
          <p className='container__inputs--colon'>:</p>
          <input
            type='number'
            value={formatTime(minutes)}
            onChange={(e) =>
              setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value))))
            }
            className='container__inputs--time'
          />
          <p className='container__inputs--colon'>:</p>
          <input
            type='number'
            value={formatTime(seconds)}
            onChange={(e) =>
              setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value))))
            }
            className='container__inputs--time'
          />
        </div>
        <div className='container__btns'>
          {!activeOrPause ? (
            <button className='btn start' onClick={startTimer}>
              Start
            </button>
          ) : (
            <button className='btn stop' onClick={pauseTimer}>
              Pause
            </button>
          )}
          <button className='btn reset' onClick={resetTimer}>
            Reset
          </button>
        </div>
        {message && <div className='container__message'>{message}</div>}
      </div>
    )
}