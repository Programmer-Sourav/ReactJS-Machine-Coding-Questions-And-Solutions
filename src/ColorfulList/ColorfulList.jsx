import { useState } from "react"

export  default function ColorfulList(){
    const [text, setText] = useState("")
    const [color, setColor] = useState('#FF0000');
    const [items, setItems] = useState([])

    const addItems = () =>{
        const idx = items.length+1;
        const itemObject = { id: idx, text: text, color: color}
        setItems([...items, itemObject]);
    }

    return(
        <div> 
         
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Text"/>
            <select onChange={(e)=>{setColor(e.target.value)}} value={color}>
             <option value='#FF0000'>Red</option>
             <option value='#00FF00'>Green</option>
             <option value='#0000FF'>Blue</option>
            </select>
             <button onClick={addItems}> Add Colourful Item </button>
             <div>
             <h1>Colourful List</h1>
                {
                    items.map((item)=>(
                        <li key = {item.id} style={{color: item.color}}>{item.text} </li>
                    ))
                }
             </div>
        </div>
    )
    
}