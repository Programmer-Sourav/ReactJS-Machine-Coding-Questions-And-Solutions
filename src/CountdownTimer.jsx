import { useEffect, useState } from "react"

export default function CountdownTimer(){
const [timerCount, setTimerCount] = useState(10)

useEffect(()=>{
const interval = setInterval(()=>{
    if(timerCount>0){
        setTimerCount(timerCount-1)
    }
}, 1000)

return ()=>clearInterval(interval)

}, [timerCount])
    return(
        <div> 
           <h1>{timerCount}</h1>
        </div>
    )
}