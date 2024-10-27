import { useCallback, useState } from "react";

const useToggle = () =>{
    const [toggleState, setToggleState] = useState(false)


    const toggleFunction = useCallback(()=>{
        setToggleState(toggleState =>!toggleState)
    }, [])


    return [toggleState, toggleFunction]

}

export default useToggle;