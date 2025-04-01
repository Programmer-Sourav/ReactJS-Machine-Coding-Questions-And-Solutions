import { useCallback, useRef, useState } from "react"

export default function useToggle(){

  const [toggleState, setToggleState] = useState(false)


  const toggleFunction = useCallback(() =>{
         setToggleState(toggleState=>!toggleState)
  }, [])



   return { toggleState, toggleFunction}
}