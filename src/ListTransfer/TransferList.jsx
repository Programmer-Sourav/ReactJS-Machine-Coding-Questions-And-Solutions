import { useState } from "react"

export default function TransferList(){

    const listData = [{id: 1, fruit: "Apple", checked: false}, {id:2, fruit: "Blueberry", checked: false}, {id:3, fruit: "Mango", checked: false}, {id:4, fruit: "Chocolate", checked: false}, {id:5, fruit:"Pineapple", checked: false}, {id:6, fruit: "Strawberry", checked: false}]
    const[firstList, setFirstList] = useState(listData)
    const [secondList, setSecondList] = useState([])
 

   const onCheckChangeListener = (id) =>{
    const updatedList = firstList.map((firstItem)=>(firstItem.id===id ? {...firstItem, checked: !firstItem.checked } : firstItem))
    setFirstList(updatedList)
   }

   const handleTransfer = () =>{
    const selectedList = firstList.filter((item)=>item.checked)
    const selList = selectedList.map((selItem)=>({...selItem, checked: false}))
    setSecondList([...secondList, ...selList])
    setFirstList(firstList.filter((item)=>!item.checked))
   }
    return(
        <div> 
            
               <h2>List A</h2>
               {firstList.map((listItem)=>(
                <label>
                <input type="checkbox" checked={listItem.checked} onChange={()=>{onCheckChangeListener(listItem.id)}}/>
                {listItem.fruit}</label>
               ))} 
               <button onClick={handleTransfer}>Transfer Items to Second List</button>
              {secondList.map((listItem)=>(
                <label>
                 <input type="checkbox" checked={listItem.checked} onChange={()=>{onCheckChangeListener(listItem.id)}}/>
                 {listItem.fruit}</label>
              ))}
        </div>
    )
}