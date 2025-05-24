import { useEffect, useState } from "react"

export default function SearchBar(){

    const [searchValue, setSearchValue] = useState("")

    const setOfDummySearches = [{id:1, prompt: "Search Grocery items"},{id:2, prompt: "Search Fruits"},{id:3, prompt: "Search Daily use product"}, {id:4, prompt: "Buy Tooth Brush, Tooth paste"} ]
    const [allValues, setAllValues] = useState(setOfDummySearches)

    useEffect(()=>{
        setSearchValue("Test Value")
        let timer = null;
        let index=0;
        let length = allValues.length;
        timer = setInterval(()=>{
            const currentValue = allValues.find((item)=>(item.id===index+1))
            setSearchValue(currentValue.prompt)
          index++;
          if(index===length)
            index =0;
        }, 2000)

        return ()=>clearInterval(timer)
    }, [])

    return(
        <div> 
            <h2 className="text-2xl text-black">Search</h2>
            <input type="search" className="border border-red-500 w-[512px] h-[44px] bg-red-300"  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        </div>
    )
}