import { useState } from "react"
import Child from "./Child";

export default function ParentComponent(){
  const [name, setName] = useState("");
  const [dummy, setDummy] = useState("Dummy")

  console.log(222, "Parent Rendered")

    return(
        <>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
       <input type="text" value={dummy} onChange={(e)=>{setDummy(e.target.value)}}/>
       <Child name={name}/>
       </>
    )
}