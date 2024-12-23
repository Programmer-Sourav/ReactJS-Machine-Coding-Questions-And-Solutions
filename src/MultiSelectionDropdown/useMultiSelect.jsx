import { useState } from "react";

export default function useMultiSelect({selections}){
    const [selectedValues, setSelectedValue] = useState([])

    const selectionChangeHandler = (e) =>{
       const selectedValue = e.target.value;
       if (!selectedValues.includes(selectedValue)) {
       setSelectedValue((pSelected)=>[...pSelected, selectedValue])
       selections(selectedValue)
       }
    }

    return { selectedValues, selectionChangeHandler}
}