import { useCallback, useEffect, useRef, useState } from "react";

// const useToggle = () =>{
//     const [toggleState, setToggleState] = useState(false)


//     const toggleFunction = useCallback(()=>{
//         console.log(123, toggleState)
//         setToggleState(toggleState =>!toggleState)
//     }, [toggleState])


//     return [toggleState, toggleFunction]

// }

// export default useToggle;


export default function useToggle(){
    const [toggleState, setToggleState] = useState(false)
    
    const toggleRef = useRef(null);


    const instanceRef = useRef(Math.random()); // Unique identifier per instance
    console.log("useToggle instance:", instanceRef.current);

    // Storing the previous function reference to check if it changes
    const prevFunctionRef = useRef();

    const toggleFunction = useCallback(() =>{
       setToggleState(toggleState=>!toggleState)
    }, [])
    
      // Checking if the function reference changes on re-render
      console.log("useToggle instance:", instanceRef.current);
      console.log("Previous Function Ref:", prevFunctionRef.current);
      console.log("Current Function Ref:", toggleFunction);
      console.log(
       "Function reference changed?",
       prevFunctionRef.current !== toggleFunction
  );

  prevFunctionRef.current = toggleFunction; // Update the stored reference

   return {toggleState, toggleRef, toggleFunction, instanceId: instanceRef.current }
   }