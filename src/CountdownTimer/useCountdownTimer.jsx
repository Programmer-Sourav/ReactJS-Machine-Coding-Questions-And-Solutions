import { useEffect, useState } from "react"

export default function useCountdownTimer({hourInput, minInput, secsInput}){
 

 //maxHour = 23(0 to 23), maxMin = 60, maxSecs = 60
 //if(hourInput!=="00"|| minInput!=="00" || secsInput!=="00" )
 //59 to 0 if 
 //11:58:30
 //second will decrease first
 //11:58: 29,28,27
 //second reaches 0, min will reduce by 1
 //second will start from 59
 //once it reaches 0, 
 //min will again reduce by 1

 useEffect(()=>{
        if(hourInput!=="00"|| minInput!=="00" || secsInput!=="00" ){
                const  hourInpt =  Number(hourInput);
                const  minInpt  =  Number(minInput);
                const  secsInpt =  Number(secsInput);
                console.log(123, hourInpt, minInpt, secsInpt)

        }

 }, [])

return { hour, minutes, seconds }
}