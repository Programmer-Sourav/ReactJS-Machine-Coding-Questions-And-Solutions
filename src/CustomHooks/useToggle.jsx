import { useCallback, useState } from "react";

const useToggle = () =>{
    const [toggleState, setToggleState] = useState(false)


    const toggleFunction = useCallback(()=>{
        console.log(123, toggleState)
        setToggleState(toggleState =>!toggleState)
    }, [toggleState])


    return [toggleState, toggleFunction]

}

export default useToggle;