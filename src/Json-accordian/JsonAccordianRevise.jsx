import { useEffect, useState } from "react"

export default function JsonAccordianRevise(){
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedFilter, setSelectedFilter] = useState("All")


  const fetchData = async() =>{
     try{
      const response = await fetch("https://okrcentral.github.io/sample-okrs/db.json")
      const jsonData = await response.json();
      const  data  = jsonData.data;
      const uniqueCategories = data.reduce((acc, item)=>(!acc.includes(item.category) ? [...acc, item.category] : acc), [])
      setCategories(["All", ...uniqueCategories])
      setData(processData(data))
     }
     catch(error){
        console.error("Error ", error);
     }
  }
 

  const processData = (data) =>{
    let filteredData = data;

    if(selectedFilter!=="All"){
         filteredData = [...data].filter((filterItem)=>(filterItem.category===selectedFilter))
    }
    const objectives = filteredData.filter((item)=>item.parent_objective_id==="")
    
       console.log(1111, objectives);
      //for each object we are adding a key "keyResults" with filtered data by parent_objective_id
      objectives.forEach(element => {
        element.keyResults = filteredData.filter((filteredItem)=>filteredItem.parent_objective_id===element.id)
      });
      return objectives;
  }

  const onChangeHandler = (value) =>{
      setSelectedFilter(value)
  }


  useEffect(()=>{fetchData()}, [])

    return(
        <div> 
           {
            data.map((dataItem)=>(
             <div key={dataItem.id}>
             <h3 style={{color: "red"}}>{dataItem.title}</h3>   
              {/* Display key results below the title */}
              {dataItem.keyResults.map((krItem)=>(
                <div key={krItem.id}>{krItem.title}</div>
              ))}
              <label>Select Filter: </label>
             
             </div>
            ))
           }
           
            <select value={selectedFilter} onChange={(e)=>{onChangeHandler(e.target.value)}}>
                {   
                   
                   <div>
                  
                    {categories.map((category, index)=>(
                        <li key={index}><option>{category}</option></li>
                    ))}
                      <p>{categories}</p>
                    </div>
                }
              </select>
        </div>
    )
}