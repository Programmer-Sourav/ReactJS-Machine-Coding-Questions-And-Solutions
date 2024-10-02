import { useEffect, useState } from "react"

export default function JsonAccordian(){

    const [data, setData] = useState([])
    const [selectedFilter, setFilter] = useState("All")
    const [categories, setCategories] = useState([])



    const fetchData = async () =>{  
        try{
       const response = await fetch("https://okrcentral.github.io/sample-okrs/db.json")
       const jsonData = await response.json();
       const data = jsonData.data;
    //    //set allows unique entries only
    //    const uniqueCategories = new Set(data.map((dataItem)=>dataItem.category))
    //    console.log(111, uniqueCategories)
    //    setCategories([...categories, ...Array.from(uniqueCategories)])
    //    console.log(2222, categories)
        const uniqueCategories = data.reduce((acc, currentItem)=>(!acc.includes(currentItem.category)? [...acc, currentItem.category] : acc), [])
        setCategories(["All", ...uniqueCategories])
        setData(processData(data))
        }
        catch(error){
            console.error("Error", error)
        }
    }

    const processData = (dataToBeOperated) =>{
      let filteredData = dataToBeOperated; //initially, filteredData and data will be same for "ALL"
   
      if(selectedFilter!=="All"){
       filteredData = dataToBeOperated.filter((dataItem)=>dataItem.category===selectedFilter)
       console.log(333, filteredData.length)
      }

      const objectives = filteredData.filter((eachItem)=>eachItem.parent_objective_id==="") //parent visible items
     
      //for each object we are adding a key "keyResults" with filtered data by parent_objective_id
      objectives.forEach(element => {
        element.keyResults = filteredData.filter((dataItem)=>dataItem.parent_objective_id===element.id)
      });
      console.log(6161, objectives)
      return objectives;
    }

    const setFilterChange = (value) =>{
        console.log(1234, value)
        setFilter(value)

    }

    useEffect(()=>{fetchData()}, [])

    return(
        <div>
        <div> 
            {data.map((item) => (
            <div key={item.id}>  
            <h3 style={{ color: "red" }}>{item.title}</h3>
    
    {/* Display key results below the title */}
    {item.keyResults.map((krItem) => (
      <p key={krItem.id}> {krItem.title} </p>  
    ))}
  </div>
))}

          {/* {data.map((item)=>(
            <h3 style={{color: "red"}}>{item.title}</h3>
          ))}
         { 
            data.map((krItem)=>(
               <p> {krItem.keyResults.map((krItem)=>(krItem.title))} </p>
            ))
         } */}

        </div>
        <label>Select Filter: 
            <select  value={selectedFilter} onChange={(e)=>{setFilterChange(e.target.value)}}>
                {categories.map((categoryItem)=>(
                    <li><option key={categoryItem}>{categoryItem}</option></li>
                ))}
            </select>    
            </label>
        </div>
    )
}