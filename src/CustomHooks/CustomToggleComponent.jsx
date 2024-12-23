import useToggle from "../CustomHooks/useToggle"

export default function CustomToggleComponent(){
     const [ toggleState, toggleFunction ] = useToggle()
    
    return(
        <div> 
          <h1>Current State: {toggleState ? "ON" : "OFF"}</h1>
          <button onClick={toggleFunction}>Toggle State</button>
        </div>
    )
}