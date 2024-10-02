import { useEffect, useState } from "react"

export default function CountdownTimerRevise(){
  
    const [countDownTime, setCountDownTime] = useState(10)

    useEffect(()=>{
        
     const interval = setInterval(() => {
        if(countDownTime>0){
        setCountDownTime((countDownTime)=>countDownTime-1)
        }
     }, 1000);

     return ()=>clearInterval(interval)

    }, [countDownTime])

    return(
        <div> 
          <h1>{countDownTime}</h1>
        </div>
    )
}