import { useEffect, useState } from "react";

export function useSearch({query}){
 const [gifyData, setGifyData] = useState([])

 const apiKey = "9VIa7o9sqHHSf0X4w00npWU4L5f4dEZP"; //should be saved in an environment variable

 const getGiffyData = async() =>{
    try{
     const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25`)
     const data = await response.json();
     console.log(33311, data)
     setGifyData(data.data)
    }
    catch(error){
        console.error("Error "+error)
    }
 }


 useEffect(()=>{
    if(query.trim())   
    debounced(getGiffyData, 1000)()
 }, [query])


const debounced = function(mainFn, delay){
    let timerId;
      return function debouncedVersion(...args){
          clearTimeout(timerId)
         timerId =setTimeout(()=>{
            console.log(3444, "Inside")
             mainFn.call(this, ...args)
          }, delay)
      }
  }


 return {gifyData}

}