import { useEffect, useRef, useState } from "react";

export default function useFocus(){
  const [focus, setIsFocused] = useState(false)
  const ref = useRef()


  useEffect(()=>{
    const currentElement = ref.current;
    if(!currentElement) return;

    const onFocus = () =>setIsFocused(true)
    const onBlur = () =>setIsFocused(false)

    currentElement.addEventListener("focus", onFocus)
    currentElement.addEventListener("blur", onBlur)

    return () =>{
        currentElement.removeEventListener("focus", onFocus)
        currentElement.removeEventListener("blur", onBlur)
    }
  }, [ref.current])

  return [ref, focus] 
}