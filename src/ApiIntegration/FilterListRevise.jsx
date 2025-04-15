import { useState } from "react"

export default function FilterListRevise(){

   const [pokemonData, setPokemonData] = useState([])
   const [inputValue, setInputValue] = useState("")
   const [error, setError] = useState("")


   const asyncFunction = async() =>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        const data = await response.json();
        setPokemonData(data)
   }
   catch(error){
     console.error("Error "+error)
   }
   }

 

   let filteredList = pokemonData;
   if(inputValue!==""){
     filteredList = pokemonData.filter((item)=>(
        item.name.toLowerCase().includes(inputValue.toLowerCase())
     ))
   }


    return(
        <div> 
        {   
            <div>
            <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
             {filteredList.map((item, index)=>(
                <li key={index}>
                    <p>{item.name}</p>
                </li>
             ))}
             </div>
        }
        </div>
    )
}