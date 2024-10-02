import useToggle from "./useToggle"

export default function ToggleComponent(){

 const {value, toggle} = useToggle();


    return(
        <div>
            <p>{value? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}