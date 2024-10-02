import { createContext, useState } from "react";
import ToggleTheme from "./ToggleTheme";

export const ThemeContext  = createContext();


export default function ThemeProvider(){
const [theme, setTheme] = useState("dark")

const toggleTheme = () =>{
  setTheme((prevTheme)=>(prevTheme ==="dark" ? "light" : "dark"))
}

return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ToggleTheme/>
    </ThemeContext.Provider>
)
}