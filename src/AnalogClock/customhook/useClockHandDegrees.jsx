import { useEffect, useState } from "react"

export function useClockHandDegrees(){

    const[currentTime, setCurrentTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{setCurrentTime(new Date())}, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    },[])

    const getDegrees = (unit, maxUnits) =>{
       return (unit/maxUnits)*360+90;
    }

    const secondDegrees = getDegrees(currentTime.getSeconds(), 60)
    const minDegrees = getDegrees(currentTime.getMinutes(), 60 )
    const hourDegrees = getDegrees(currentTime.getHours(), 12)


    return { secondDegrees, minDegrees, hourDegrees }
}