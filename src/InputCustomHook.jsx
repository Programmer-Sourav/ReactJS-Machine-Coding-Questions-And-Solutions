import { useState } from "react"
import useInput from "./useInput"

export default function InputComponentHook(){

  const usernameInput = useState("")
  const userPasswordInput = useState("")



    return(
        <div>
         <label>Username: 
        <input type="text" value={usernameInput.inputValue} onChange={usernameInput.handleChange}/>
         </label>
         <label>Password: 
         <input type="text" value={userPasswordInput.inputValue} onChange={userPasswordInput.handleChange}/>
         </label>
         </div>
    )
}