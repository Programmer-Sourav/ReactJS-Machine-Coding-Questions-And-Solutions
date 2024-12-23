import { useState } from "react"
import MultiSelect from "./MultiSelect"

export default function MultiSelectRunner(){
 const values = ["Apple", "Orange", "Banana", "Kiwi", "Strawberry", "Blueberry"]
 const [arrayOfSelections, setArrayOfSelections] = useState([])

 const onValuesSelected = (selectedItem) =>{
    setArrayOfSelections([...arrayOfSelections, selectedItem ])
 }


     return(
        <div> 
            <h1> Please select Fruits you want to buy:</h1>

            <MultiSelect options={values} selections = {onValuesSelected} />
            <h2>Here is your selections: </h2>
            {
                arrayOfSelections.map((item)=>(
                    <ul>
                        <li key={item} className="item-design">{item}</li>
                    </ul>
                ))
            }
            
        </div>
    )
}