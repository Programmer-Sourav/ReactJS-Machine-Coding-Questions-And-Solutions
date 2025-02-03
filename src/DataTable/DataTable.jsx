import "../datatable.css"

import { useState } from "react"
import { initialData } from "./contants"

export default function DataTable(){
 
    const [data, setData] = useState(initialData)
    const [searchTerm, setSearchTerm] = useState("")
    const [sort, setSort] = useState(true)
    const [sortValue, setSortValue] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)


    let filteredData = [...data];

    const onSearchChange = (e) =>{
        setSearchTerm(e.target.value)
    }

    console.log(4444, sort, sortValue)  
    const handleSort = (value) =>{
      setSort((prevSort) => !prevSort);
      setSortValue(value);
           switch(value){
              case "Name": 
               {
                console.log(555, sort)
                if(sort){
                filteredData = [...data].sort((a,b)=>(a.name>b.name? 1 : -1))
                }
                else{
                  filteredData = [...data].sort((a,b)=>(a.name<b.name? 1 : -1))
                 
                }
               }
               break;
              case "Ingredients":
  
                filteredData =  [...data].sort((a, b) => {
                    // Helper to sort individual ingredients alphabetically in each cell
                    const sortIngredients = (ingredients) =>
                      ingredients
                        .split(",") // Split into an array by commas
                        .map((ing) => ing.trim()) // Trim spaces around ingredients
                        .sort((i1, i2) => i1.localeCompare(i2)) // Sort alphabetically
                        .join(", "); // Join back into a string
                
                    // Handle rows with single or multiple ingredients
                    const aSorted = sortIngredients(a.ingredient || ""); // Default to an empty string if ingredient is missing
                    const bSorted = sortIngredients(b.ingredient || "");

                    return sort ? aSorted.localeCompare(bSorted) : bSorted.localeCompare(aSorted);
                  });
                break;

              case "Weight":
                {
                  if(sort){
                    filteredData = [...data].sort((a,b)=>(parseInt(a.weight.replace(/\D/g,''),10) > parseInt(b.weight.replace(/\D/g,''),10) ? 1: -1))
                   
                 }
                 else{
                   filteredData = [...data].sort((a,b)=>(parseInt(a.weight.replace(/\D/g,''),10) < parseInt(b.weight.replace(/\D/g,''),10) ? 1 : -1))
                  
                 }
                }
                break;

              case "Price":{
                if(sort){
                  filteredData = [...data].sort((a,b)=>(parseInt(a.price.replace(/\D/g,''), 10) > parseInt(b.price.replace(/\D/g,''),10) ? 1: -1))
                 
               }
               else{
                 filteredData = [...data].sort((a,b)=>(parseInt(a.price.replace(/\D/g,''), 10) < parseInt(b.price.replace(/\D/g,''), 10) ? 1 : -1))
                
               }
              }
              break;
              default: 
              break;
           }
           setData(filteredData)
    }

    if(searchTerm){
      filteredData = [...data].filter((dataItem)=>dataItem.name.toLowerCase().includes(searchTerm.toLowerCase()) || dataItem.ingredient.toLowerCase().includes(searchTerm.toLowerCase()) || dataItem.price.includes(searchTerm) ||  dataItem.weight.includes(searchTerm))
    }

    return(
      <div className='table-container'>
         <input type="search" value={searchTerm} placeholder="Search..." onChange={(e)=>onSearchChange(e)}  className='search-input'/>  
         <table className='table'>
          <thead>
          <tr>  
          <th onClick={()=>{handleSort("Name")}} >Name</th>
          <th onClick={()=>{handleSort("Ingredients")}} >Ingredients</th>
          <th onClick={()=>{handleSort("Weight")}} >Weight</th>
          <th onClick={()=>{handleSort("Price")}} >Price</th>
          </tr>
          </thead>  
          <tbody>
            {filteredData.map((dataItem, index)=>(
              <tr key={index}>
                <td>{dataItem.name}</td>
                <td>{dataItem.ingredient}</td>
                <td>{dataItem.weight}</td>
                <td>{dataItem.price}</td>
              </tr>
            ))}
          </tbody>
         </table> 
        </div>
    )
}