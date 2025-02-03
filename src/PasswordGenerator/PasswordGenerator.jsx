import "../password-geerator.css"

import { useState } from "react"

export default function PasswordGenerator(){

    const [password, setPassword] = useState("")
    const [uppercaseLetters, setUppercaseLetters] = useState(false)
    const [lowercaseLetters, setLowercaseLetters] = useState(true)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(true)
    
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const availableNumbers = "1234567890";
    const availableSymbols = "~`!@#$%^&*()_-+=";

    let characterPool = "";
    if(uppercaseLetters) 
        characterPool = characterPool + upperCaseLetters;
    if(lowercaseLetters)
        characterPool = characterPool + lowerCaseLetters;
    if(numbers)
        characterPool = characterPool + availableNumbers;
    if(symbols)
        characterPool = characterPool + availableSymbols;

    function createARandomPassword(length){
            //string concatenation 
            //upto certain length
            //Random
            //char will be selected randomly
            let passwordToBeGenerated = "";
            for(let i =0; i<length ; i++){
              const randomIndex = Math.floor(Math.random()*characterPool.length)
              passwordToBeGenerated = passwordToBeGenerated + characterPool.charAt(randomIndex)
               }
        return passwordToBeGenerated;
        }
    

    const generatePassword = () =>{
         //setPassword(password)
         const password1 = createARandomPassword(12)   
         console.log(111, password1) 
    }


    
    return(
        <div>
            <div className="selection-container">
            <label>
            <input type="checkbox" onChange={()=>{setUppercaseLetters(uppercaseLetters=>!uppercaseLetters)}} checked={uppercaseLetters}/>
            Include Uppercase Letters
            </label>
            <label>
            <input type="checkbox" onChange={()=>{setLowercaseLetters(lowercaseLetters=>!lowercaseLetters)}} checked={lowercaseLetters}/>
            Include Lowercase Letters
            </label>
            <label>
            <input type="checkbox" onChange={()=>{setNumbers(numbers=>!numbers)}} checked={numbers}/>
            Include Numbers
            </label>
            <label>
            <input type="checkbox" onChange={()=>{setSymbols(symbols=>!symbols)}} checked={symbols}/>
            Include Symbols
            </label>
            </div>
            <div className="bottom-container">
            <button onClick={generatePassword}>Generate Password</button>
            <h2>Generated Password: {password}</h2>
            </div>
        </div>
    )
}