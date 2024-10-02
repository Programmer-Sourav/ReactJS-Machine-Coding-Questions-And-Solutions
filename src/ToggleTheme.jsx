import "./theme.css"
import { createContext, useContext } from "react"
import { ThemeContext } from "./ThemeProvider"


export default function ToggleTheme(){

 const {theme, toggleTheme} = useContext(ThemeContext)


    return(
        <div className="container"> 
        <label>{theme === "light" ? "Light Mode" :  "Dark Mode"}</label>
        <button onClick={toggleTheme} className={`switch-button ${
            theme === 'dark' ? 'switch-button-on' : ''
          }`} > 
            Change Theme
          </button>
        </div>
    )
}