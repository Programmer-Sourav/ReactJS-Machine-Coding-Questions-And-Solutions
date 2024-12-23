import { useState } from "react"
import "../transfer.css"

export default function TransferListTwo(){

    const listData = [{id: 1, fruit: "Apple", checked: false}, {id:2, fruit: "Blueberry", checked: false}, {id:3, fruit: "Mango", checked: false}, {id:4, fruit: "Chocolate", checked: false}, {id:5, fruit:"Pineapple", checked: false}, {id:6, fruit: "Strawberry", checked: false}]
    const [firstList, setFirstList] = useState(listData);
    const [secondList, setSecondList] = useState([]);
    const [selectedList, setSelectedList] = useState("")


    const onChangeHandler = (e, id) =>{
      const updatedList = firstList.map((firstItem)=>(firstItem.id === id ? {...firstItem, checked : !firstItem.checked} : firstItem))
      setFirstList(updatedList)
      setSelectedList("first")
    }

    const onSecondChangeHandler = (e, id) =>{
        const updatedList = secondList.map((firstItem)=>(firstItem.id === id ? {...firstItem, checked : !firstItem.checked} : firstItem))
        setSecondList(updatedList)
        setSelectedList("second")
    }

    const addToSecondList = () =>{
        const filteredList = firstList.filter((firstItem)=>firstItem.checked)
        const updatedList = filteredList.map((item)=>({...item, checked: false}))
        const updatedFirstList = firstList.filter((firstItem)=>!firstItem.checked)
        setSecondList([...secondList, ...updatedList]);  
        setFirstList(updatedFirstList);
    }

    
    const addToFirstList = () =>{
        const filteredList = secondList.filter((firstItem)=>firstItem.checked)
        const updatedList = filteredList.map((item)=>({...item, checked: false}))
        const updatedSecondList = secondList.filter((firstItem)=>!firstItem.checked)
        setFirstList([...firstList, ...updatedList]);  
        setSecondList(updatedSecondList);
    }

    const handleTransfer = () =>{
       if(selectedList==="first") 
       addToSecondList();
       else
       addToFirstList();
    }

    return(
        <>
        <div className="listbody">
          <div>  
          <h1>List A</h1>  
          <div className="listA">
            {

             firstList.map((firstItem)=>(
                <div>
                <label> 
                <input type="checkbox" checked = {firstItem.checked} onChange={(e)=>{onChangeHandler(e, firstItem.id)}} key={firstItem.id}/>{firstItem.fruit}
                </label>
                </div>   
             ))
            }
            </div>
          </div> 
          <div>
          <h1>List B</h1>
          <div className="listB">
             {
                 secondList.map((firstItem)=>(
                    <div>
                    <label> 
                    <input type="checkbox" checked = {firstItem.checked} onChange={(e)=>{onSecondChangeHandler(e, firstItem.id)}} key={firstItem.id}/>{firstItem.fruit}
                    </label>
                    </div>   
                 ))
             }
           </div>
           </div>
        </div>
         <div className="bottomBar">
         <button onClick={handleTransfer}>Transfer List</button>  
         </div>
         </>
    )
}