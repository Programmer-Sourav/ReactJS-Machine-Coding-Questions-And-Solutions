import "../msd.css"

import { useState } from "react"
import Pills from "./Pills"

export default function MultiSelectDropdown(){
    
    const [selectedDd, setSelectedDd] = useState("Electronics")
    const [selectedCategory, setSelectedCategory] = useState([])
    const data = [{id: 1, category: "Electronics", product: "Laptop"}, 
        {id: 2, category: "Electronics", product: "Smartphone"},
        {id: 3, category: "Books", product: "Novel"}
    ]
    const [products, setProducts] = useState(data);

    const changeDdValue = (value) =>{
      setSelectedDd(value)
      if (!selectedCategory.find((item) => item.category === value)) {
      const item = {id: selectedCategory.length+1, category: value}
      setSelectedCategory([...selectedCategory, item])
      }
    }
    const deleteOnClick = (id) =>{
        const updatedList = selectedCategory.filter((item)=>item.id!==id)
        setSelectedCategory(updatedList)
    }
    let filteredProducts = [...products];
  
    const selectedCategories = selectedCategory.map((selected) => selected.category);
    if(selectedCategories.length>0){
        filteredProducts = products.filter((product) =>
            selectedCategories.includes(product.category))
    }
   
    return(
        <div> 
              {console.log(111, products, filteredProducts)}
          <div className="dropdown">  
            {selectedCategory.map((selectedCat)=><Pills id={selectedCat.id} category={selectedCat.category} deleteHandler ={deleteOnClick}/>)}
          <select value={selectedDd} onChange={(e)=>changeDdValue(e.target.value)} className="dropdown">
            <option>Electronics</option>
            <option>Books</option>
          </select>
          {
            filteredProducts.map((product)=>(
                <li>{product.product}</li>
            ))
          }
          </div>
        </div>
    )
}