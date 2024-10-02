import "./traficLight.css"
import { useEffect, useState } from "react"

export default function TraficLight(){
   const trafficLights = [{id: 1, color: "red", timeout: 10}, 
    {id: 2, color: "green", timeout: 5},
    {id: 3, color: "yellow", timeout: 15}      
   ]

   const [activeLight, setActiveLight] = useState("");
   const [acitvity, setActivity] = useState(false);


   //while activity true, loop will continue to run
   //for each element, light will start for specified seconds
   const runTrafficLights = async () => {
    for (const element of trafficLights) {
      setActiveLight(element.color);
      await new Promise((resolve) =>
        setTimeout(resolve, element.timeout * 1000) // Multiply by 1000 to convert to milliseconds
      );
    }
    runTrafficLights(); // Repeat the loop to cycle through lights continuously
  };

  useEffect(() => {
    runTrafficLights();
  }, []);
   

  console.log(123, acitvity)

    return(
        <div> 
            <h1>Active Light: {activeLight}</h1>
            {activeLight === "red" ? <div className="redlight">R</div>   : <div className="defaultLight"></div>}
            {activeLight === "green" ? <div className="greenlight">G</div>   : <div className="defaultLight"></div>}
            {activeLight === "yellow" ? <div className="yellowLight">Y</div>   : <div className="defaultLight"></div>}
        </div>
    )
}