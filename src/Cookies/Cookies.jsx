import { useState } from "react"
import Cookies from "js-cookie"

export default function CookiesComponent(){
  
    const [user, setUser] = useState("")


    const saveUserToCookie = () =>{
      Cookies.set("username", "Souravnath", {expires: 7})
      alert("Cookie set: username= Souravnath")
    }

    const getUserFromCookie = () =>{
       const storedUser = Cookies.get("username")
       if(storedUser){
          setUser(storedUser)
       }
       else{
        console.log("No cookies Found")
       }
    }

    const removeUserFromCookie = () =>{
       Cookies.remove("username")
       setUser("")
       alert("Cookie Removed")
    }
    
    return(
        <div>     
        <button onClick={saveUserToCookie}>Save User</button>
        <button onClick={getUserFromCookie}>Get User Details</button>
        <button onClick={removeUserFromCookie}>Remove User</button>
        {user && <h1>{user}</h1>}
        </div>
    )
}