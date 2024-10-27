import { useEffect, useState } from "react"

export default function FetchApiCountriesData(){
  const [countries, setCountries] = useState([])
  const [inputSearch, setInputSearch] = useState("")

  const fetchCountries = async() =>{
       try{
      const response = await fetch('https://restcountries.com/v3.1/all')
      const countries = await response.json();
      setCountries(countries);
       }
       catch(error){
        console.error("Error ", error)
       }
  }

  useEffect(()=>{
    fetchCountries()
  }, [])

  let filteredCountries = countries;
  if(inputSearch){
    filteredCountries = [...countries].filter((countryItem)=>(countryItem.capital?.[0].toLowerCase().includes(inputSearch.toLowerCase())))
  }

    return(
      <div> 
        <input type="text" value={inputSearch} placeholder="Filter by Capital" onChange={(e)=>{setInputSearch(e.target.value)}}/>
         {filteredCountries.map((filteredItem)=>(
            <li key={index}>
                {filteredItem.name.common} - {filteredItem.capital?.[0]} </li>
         ))}
      </div>
    )
}