import { useEffect, useState } from "react"

export default function useClockHandDegreesRevise(){ 

    const [currentTime, setCurrentTime] = useState(new Date())


    useEffect(()=>{
      const interval = setInterval(()=>{setCurrentTime(new Date())}, 1000)

       return ()=> clearInterval(interval)
    }, [])



    function calculateDegrees(unit, maxUnits){
      return (unit/maxUnits)*360 + 90;
    }

    const secondDegrees = calculateDegrees(currentTime.getSeconds, 60);
    const minDegrees = calculateDegrees(currentTime.getMinutes, 60)
    const hourDegrees = calculateDegrees(currentTime.getHours, 12)


    return {secondDegrees, minDegrees, hourDegrees}
}