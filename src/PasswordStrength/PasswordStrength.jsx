import "../passwordstrength.css"

import { useState } from "react"

export default function PasswordStrength(){

    const [passwordInput, setPasswordInput] = useState("")
    const [phoneNumberIp, setPhoneNumberIp] = useState("")
    const [strength, setStrength] = useState("")

    //Strength checker. It can be anything. Like some template
    //Like if input contains atleast one Uppercase, 2 smaller case, 3 special symbol, 2 numbers 
    //and may also contain some conditions like
    //it should not contain username, password, 123456 consucutive numbers 
    //as a part of the or registered phone number as a part of the password input

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const availableNumbers = "1234567890";
    const availableSymbols = "~`!@#$%^&*()_-+=";

   const checkPasswordStrength = () =>{
    //every incoming character should be checked against the sets
    //simple string check
    //presence of required length
      
    const lengthCriteria = passwordInput.length>= 10
    const upperCharCount = frequencyOfUpperCase(passwordInput);
    const lowerCharCount = frequencyOfLowerCase(passwordInput);
    const numbersCount =   frequencyOfNumbers(passwordInput);
    const symbolCount  =   frequencyOfSymbols(passwordInput);

    //console.log(upperCharCount, lowerCharCount, numbersCount, symbolCount)

    let score = 0;

    //if(lengthCriteria || upperCharCount>1 || lowerCharCount>2 || numbersCount>2 || symbolCount>3) score += 1;
    if(lengthCriteria) score += 1
    if(upperCharCount>1) score += 1;
    if(lowerCharCount>2) score += 1;
    if(numbersCount>2)  score += 1;
    if(symbolCount>3) score += 1;

    console.log(333, score)
    const phoneNumberMatch = phoneNumberIp && passwordInput.includes(phoneNumberIp);

    if(phoneNumberMatch){
        setStrength("Invalid, Includes Phone Number!");
        return;
    }

    if(score===5) setStrength("Very Strong");
    else if(score===4) setStrength("Strong")
    else if(score===3) setStrength("Average");
    else if(score===2) setStrength("Good")
    else
     setStrength("Very weak")    

    }
    
   

   function frequencyOfUpperCase(passwordInput){
   let count=0;
   for(const char of passwordInput){
    if(upperCaseLetters.includes(char))
        count++;
    console.log(666, char, count)
     }
     return count;
    }

    function frequencyOfLowerCase(passwordInput){
        let count = 0;
        for(const char of passwordInput){
            if(lowerCaseLetters.includes(char))
                count++;
        }
        return count;
    }

    function frequencyOfNumbers(passwordInput){
        let count = 0;
        for(const char of passwordInput){
            if(availableNumbers.includes(char))
                count++;
        }
        return count;
    }

    function frequencyOfSymbols(passwordInput){
        let count = 0;
        for(const char of passwordInput){
            if(availableSymbols.includes(char))
                count++;
        }
        return count;
    }


    
    const onChangePassword = (value) =>{
        setPasswordInput(value)
        checkPasswordStrength();
    }

    return(
        <div className="password-container">
        <label>
        Enter Phone number: 
        <input type="number" onChange={(e)=>{setPhoneNumberIp(e.target.value)}} value={onChangePassword} placeholder="Please enter a Phone number"/>
        </label>
        <label>
        Enter Password: 
        <input type="text" onChange={(e)=>{onChangePassword(e.target.value)}} value={passwordInput} placeholder="Please enter a password"/>
        </label>
        <p>Strength: {strength} </p>
        </div>
    )
}