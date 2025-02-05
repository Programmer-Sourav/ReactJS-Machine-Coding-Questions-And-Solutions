/*
 * 
 * Yes, useCallback can be used to memoize callback functions in your component
 *  so that they are not recreated on every render, which is particularly useful 
 * for functions that are passed as props to child components or used as dependencies
 *  in hooks like useEffect or useMemo.

When to use useCallback in the above code:
In your case, useCallback would be useful for functions like setSelectedValue,
 since this function is passed to the <select> element and could potentially 
 trigger a re-render when not memoized.

Here's how you could apply useCallback to optimize the function 
setSelectedValue:
 * 
 */
import React, { useEffect, useState, useMemo, useCallback } from "react";

export default function FetchPokemon() {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [offset, setOffset] = useState(0);
  const [cache, setCache] = useState({});
  const [limit, setLimit] = useState(5);
  const [selectedOptionValue, setSelectedOptionValue] = useState(5);
  const [totalCount, setTotalCount] = useState(null);

  const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  // Memoize options so that it's only recalculated when totalCount or limit changes
  const getOptions = useMemo(() => {
    const options = [];
    for (let i = 0; i < totalCount + 5; i = i + limit) {
      options.push(i);
    }
    return options;
  }, [totalCount, limit]);

  async function getDataFromApi(limit) {
    try {
      const url = `${API_BASE_URL}?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      setTotalCount(data.count);
      setData(data.results);
      setNextUrl(data.next)
      setCache((prevCache)=>({...prevCache, [url]: data.results}))
    } catch (error) {
      console.error("Error " + error);
    }
  }

  useEffect(() => {
    getDataFromApi(selectedOptionValue);
  }, [selectedOptionValue, offset]);

   // Use useCallback to memoize the setSelectedValue function
   const setSelectedValue = useCallback((value) => {
      setSelectedOptionValue(value);
      console.log(666, value, selectedOptionValue);
      setOffset(0);
    }, [selectedOptionValue]); // Memoize with respect to selectedOptionValue
  

  const onNextBtnClick = () =>{
   fetchDataOnNextClick(nextUrl)
  }

  const fetchDataOnNextClick = async(nextUrl) =>{
   if(cache[nextUrl]){
      setData(cache[nextUrl]);
      return;
   }
   try {  
      const response = await fetch(nextUrl);
      const data = await response.json();
      setTotalCount(data.count);
      setData(data.results);
      setNextUrl(data.next)
      setCache((prevCache)=>({...prevCache, [nextUrl]: data.results}))
    } catch (error) {
      console.error("Error " + error);
    }
  }
  return (
    <div>
      <select onChange={(e) => setSelectedValue(e.target.value)} value={selectedOptionValue}>
        {getOptions.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      {data.map((item, index) => (
        <li key={item.name} style={{ listStyle: "none" }}>
          <p>
            <span>{index + 1}.</span> {item.name}
          </p>
        </li>
      ))}
      <button onClick={onNextBtnClick}>Next</button>
    </div>
  );
}
