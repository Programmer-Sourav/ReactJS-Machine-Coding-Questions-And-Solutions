import { useState } from "react"
import "../msd.css"
import Pills from "./Pills"


export default function MultiSelectDropdownRevise(){

    const data = [{id: 1, category: "Electronics", product: "Laptop"}, 
        {id: 2, category: "Electronics", product: "Smartphone"},
        {id: 3, category: "Books", product: "Novel"},
        {id: 4, category: "Books", product: "Text Book"}
    ]
    const [products, setProducts] = useState([...data]);
    const [selectedDDs, setSelectedDds] = useState([])
    const [selectedDd, setSelectedDd] = useState("Electronics")
   

    let filteredList = products;
    if(selectedDd.length>0){  
      filteredList = products.filter((dataItem)=>(dataItem.category.includes(selectedDd)))
      console.log(333, filteredList)
    }


    const handleSelectedDd = (selected) => {
            setSelectedDd(selected)
            if(!selectedDDs.find((selectedItem)=>(selectedItem===selected))){
                const selCat = { id: selectedDDs.length+1, category: selected}
                setSelectedDds((prevSelectedDDs) => [...prevSelectedDDs, selCat]);
            }
      
    };
    
    const  handleDeleteOnClick = (id) =>{
        setSelectedDds(selectedDDs.filter((selectedDd)=>selectedDd.id!==id))
    }

    console.log(selectedDd)

    return(
        <div> 
            <select value={selectedDd} onChange={(e)=>{handleSelectedDd(e.target.value)}}>
                {/* {data.map((dataItem)=>(
                    <option key={dataItem.id}>{dataItem.category}</option>
                ))} */}
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
            </select>
            {selectedDDs.map((selDds)=>(
                <Pills id={selDds.id} category={selDds.category} deleteHandler={handleDeleteOnClick}/>
            ))}
            {
                filteredList.map((dataItem)=>(<li key={dataItem.id}>{dataItem.product}</li>))
            }

        </div>
    )
}