import { useState } from "react"

export default function useInput(){
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) =>{
           setInputValue(e.target.value)
    }

    return {inputValue, handleChange}
}