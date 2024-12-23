import { useEffect, useRef } from "react";

export default function usePreviousRevise(value){

  const currentRef = useRef(null)

  useEffect(() => {

    currentRef.current = value; // Update the ref with the current value after render

  }, [value]); // Run effect when value changes

  return currentRef.current; // Return the previous value (before the update)
}