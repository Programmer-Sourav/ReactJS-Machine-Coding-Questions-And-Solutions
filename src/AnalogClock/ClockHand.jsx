export default function ClockHand({type, degrees}){
   return(
    <div className={`hand ${type}`} style={{transform: `rotate(${degrees}deg)`}}> </div>
   )

}

// ClockHand.prototype = {
//     type: prototype.string.isRequired,
//     degrees: prototype.number.isRequired,
//   };