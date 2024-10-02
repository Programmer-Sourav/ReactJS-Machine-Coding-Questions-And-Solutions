import { useState } from "react"

export default function AddRemoveItem(){
    const [itemsList, setItemsList] = useState([])

    const item1 = {id: 1, itemname: "Paper"}
    const item2 = {id: 2, itemname: "Pen"}

    const addItemToAList = () =>{
      setItemsList([...itemsList, item2])
    }
    const deleteItemFromAList = (id) =>{
      setItemsList(itemsList.filter((item)=>(item.id!==id)))
    }
    return(
        <div> 
            <h1>Items List!</h1>
                
               {
                <div>
                <button onClick={addItemToAList}>Add Item to A List</button>
                 {
                    itemsList.map((item)=>(
                        <li key={item.id}>{item.itemname}
                        <button onClick={()=>{deleteItemFromAList(item.id)}}>Delete</button>
                        </li>
                    ))
                 }
                </div>
                  
               }
                
            

        </div>
    )
}