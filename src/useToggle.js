import { useState } from "react";

export default function useToggle(initialValue = false){

    const [value, setValue] = useState(initialValue)


    const toggle = () =>{
        setValue(value =>! value)
    }

    return { value, toggle}

}