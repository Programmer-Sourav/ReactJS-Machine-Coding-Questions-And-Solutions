import { useState } from "react";

export default function MyForm(){

   const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Submitted Value", inputValue)
        setInputValue("")
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button type="submit">Submit</button>
        </form>
    )
}