import useToggle from "../CustomHooks/useToggle"

export default function CustomToggleComponent(){
     const {toggleState, toggleRef, toggleFunction, instanceId} = useToggle()
    
    return(
        <div> 
          <h1 ref={toggleRef}>Current State: {toggleState ? "ON" : "OFF"}</h1>
          <p>{instanceId}</p>
          <button onClick={toggleFunction}>Toggle State</button>
        </div>
    )
}