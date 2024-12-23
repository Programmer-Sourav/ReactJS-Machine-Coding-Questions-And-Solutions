import "../multiselect.css"

import { useState } from "react";
import useMultiSelect from "./useMultiSelect";

export default function MultiSelect({options, selections}){

const { selectedValues, selectionChangeHandler} = useMultiSelect({selections})


return(
<div> 
<select value={selectedValues} multiple onChange={(e)=>{selectionChangeHandler(e)}} className="multi-select-design">
    {options.map((option, index)=>(
         <option key={index} value={option}>{option}</option>
    ))}
</select>
</div>   
)

}