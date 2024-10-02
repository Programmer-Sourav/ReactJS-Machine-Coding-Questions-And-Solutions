import { useEffect, useState } from "react"

export default function CountdownTimerV2(){
  const [time, setTime ] =  useState({hours: 0, minutes: 0, seconds: 0 })
  const [isRunning, setIsRunning] = useState(false)

  //start the countdown
  const startCountdown = () =>{
    if(time.hours ===0 && time.minutes===0 && time.seconds ===0){
        return; // Prevent countdown from starting if time is 0
    }
    setIsRunning(true)
  }

  //stop the countdown
  const stopCountdown = () =>{
    setIsRunning(false)
  }

  const resetCountdown = () =>{
    setIsRunning(false)
    setTime({hours: 0, minutes: 0, seconds: 0})
  }


  useEffect(()=>{



  }, [])

    return(
        <div> 

        </div>
    )
}