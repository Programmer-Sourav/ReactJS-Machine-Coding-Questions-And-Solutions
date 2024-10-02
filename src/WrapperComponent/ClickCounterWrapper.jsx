// createContext and useContext

import { createContext, useContext, useState } from "react";

const ClickContext = createContext(null)


export const ClickCounterWrapper = ({children}) =>{

  const [count, setCount] = useState(0)


  const incrementClickCount = () =>{
    setCount((count)=>count+1)
  }

  return(
    <ClickContext.Provider value={incrementClickCount}>
        <div>
            <p>Click Count : {count}</p>
            {children}
        </div>
    </ClickContext.Provider>
  )

    
}

//consume the context

export const ChildButton = () =>{
    const handleClick = useContext(ClickContext)

    return <button onClick={handleClick}> Increment Count</button>

}