import {useState } from "react"
import "./toastnotification.css"

export default function ToastNotification(){
      //steps
     //it will show a message
     //it may be a popup or dialog like 
     //it may have different positions //top, bottom, left, right
     //may have icons with different signs //warning, error, success
     //it shall be invisible
     //toast message generally disapears after a few seconds
     //once some button click/events occurs, it's visibility get changed 
     //basically a css thing

     const [toastPosition, setToastPosition] = useState("top-right");
     const [toastType, setToastType] = useState("info")
     const [show, setShow] =  useState(false)

     const showToast = () =>{
        setShow(show =>!show)
         // Automatically hide toast after 5 seconds
       setTimeout(() => {
        setShow(false);
      }, 5000);
     }

     const onToastTypeChange = (e) =>{
        setToastType(e.target.value)
     }

     const onPositionChange = (e) =>{
        setToastPosition(e.target.value)
     }

     const arryOfMsg = [{id: 1, type: "Info", message: "Notification Arrived!", color: "blue"}]
     const optionsArray = ["info", "warning", "error", "success"]

     function showMessage(typeOfMessage){
        console.log(333, toastType);
        switch(typeOfMessage){
            case "info": 
             return {id: 1,  message: "Notification Arrived!", color: "blue"}
            case "warning": 
             return {id: 2,  message: "You're warned!", color: "orange"}
            case "error": 
            return {id: 3,   message: "Error Occured!", color: "red"}
            case "success": 
            return {id: 4,   message: "Process Completed", color: "green"}
        }
     }

     const toastMessageDetails = showMessage(toastType);
     console.log(444, toastMessageDetails)
    
     // Function to render toastbox based on position and type
      const renderToastBox = () =>{
        return(
            <div className={`toastbox ${toastPosition}`}
               style={{backgroundColor: toastMessageDetails.color}}> 
              <p>{toastMessageDetails.message}</p>
            </div>
        )
      }
     
    return(
        <div className="toastbody"> 
        
        <p>{show && renderToastBox()}</p>
        <p>Select Toast Type </p>
        <select onChange={onToastTypeChange} value={toastType}>
         {optionsArray.map((optionItem)=>(
            <option value={optionItem}>{optionItem}</option>
         ))}
        </select>
          {/* Dropdown to select toast position */}
      <p>Select Position</p>    
      <select onChange={onPositionChange} value={toastPosition}>
        <option value="top-right">Top Right</option>
        <option value="top-left">Top Left</option>
        <option value="bottom-right">Bottom Right</option>
        <option value="bottom-left">Bottom Left</option>
      </select>
        <button onClick={showToast}>Show Toast Message</button>
        </div>
    )
}