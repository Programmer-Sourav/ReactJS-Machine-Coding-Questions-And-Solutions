// import { useEffect, useState } from "react";
// import { progressBarData } from "./data";
// import "./progressbar.css"

// export default function ProgressBar({props}){

//     const [data, setData] = useState(progressBarData)
//     const [isStarted, setStarted] = useState(false)
//     const [progress, setProgressBar] = useState(0)
//     const [itemId, setItemId] = useState(0);

//     //traversing each object in the array
//     //show progressbar for that
//     //once progressbar completes
//     //go to the next iteration
//     //and continue with the other progressbar

    
//     useEffect(()=>{
//         if(isStarted){
//        for(let i = 0; i<data.length; i++){     
//        let timer = setInterval(()=>{
//         console.log(12345, progress, data[i].value )
//              setItemId(i+1);
//              if(progress< Number(data[i].value)){
//                 console.log(progress, Number(data[i].value))
//                 setProgressBar(progress+5)
//              }  
//              else if(progress === Number(data[i].value)){
//                  setProgressBar(0)
//              }
//            timer = clearInterval(timer);
//        }, 250)
//        //return () =>clearInterval(timer);
//     }
//     }

//     }, [isStarted, progress])



//     function startProgressBars(){
//        setStarted(isStarted=>!isStarted)
//     }

//     return(
//         <div className="container"> 
//         <button onClick={startProgressBars}>Start</button>
//         {data.map((item)=>(
//          item.id===itemId ? (
//         <div className="progressbar">
//             <div
//           className={`progressbar-filled`} style={{ width: `${progress}%` }}
//         ></div>
//         </div>
//          ) : ""
//         ))}
//         </div>
//     )

// }


import { useEffect, useState } from "react";
import { progressBarData } from "./data";
import "./progressbar.css";

export default function ProgressBar() {
  const [data, setData] = useState(progressBarData);
  const [isStarted, setStarted] = useState(false);
  const [progress, setProgressBar] = useState(0);
  const [currentItem, setCurrentItem] = useState(0); // To track the current item being processed
  const [progressCompleted, setProgressCompleted] = useState([])
  // Start or stop the progress
  const startProgressBars = () => {
    setStarted(true); // Start the progress
  };

  useEffect(() => {
    if (isStarted && currentItem < data.length) {
      const targetProgress = Number(data[currentItem].value);
      
      const interval = setInterval(() => {
        setProgressBar((prevProgress) => {
          if (prevProgress < targetProgress) {
            const pC = {id: progressCompleted.length, value: prevProgress}
            setProgressCompleted([...progressCompleted, pC])
            return prevProgress + 5; // Increment progress by 5%
          } else {
            clearInterval(interval); // Stop the interval once target is reached
            setProgressBar(0); // Reset progress for the next task
            setCurrentItem( currentItem+ 1); // Move to the next item
            return prevProgress;
          }
        });
      }, 250); // Adjust the speed of progress

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [isStarted, currentItem, data]);

  return (
    <div className="container">
      <button onClick={startProgressBars}>Start</button>

      {data.map((item, index) => {
        // Render progress bar only for the current item being processed
        if (index <= currentItem) {
          return (
            <div key={item.id} className="progressbar">
              <div
                className="progressbar-filled"
                style={{
                  width: index === currentItem ? `${progress}%` : `${progressCompleted[item.id].value}`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          );
        }
        return null; // Do not render other progress bars until the current item is processed
      })}
    </div>
  );
}
