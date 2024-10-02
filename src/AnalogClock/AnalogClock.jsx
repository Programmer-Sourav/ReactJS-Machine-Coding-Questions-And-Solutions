import ClockHand from "./ClockHand";
import { useClockHandDegrees } from "./customhook/useClockHandDegrees";
import "../AnalogClock.css"

export default function AnalogClock(){

    const { secondDegrees, minDegrees, hourDegrees }  = useClockHandDegrees()

    return(
        <div className='clock'> 
           <div className='clock-face'>
             <ClockHand type = "hour-hand" degrees = {hourDegrees}/>
             <ClockHand type = "min-hand" degrees = {minDegrees}/>
             <ClockHand type = "second-hand" degrees = {secondDegrees}/>
           </div>
        </div>
    )

}