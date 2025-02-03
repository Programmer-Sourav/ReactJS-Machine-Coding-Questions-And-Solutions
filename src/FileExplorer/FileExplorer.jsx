import React, { useState } from "react"
import explorer  from "./folderData";
import "./file-explorer.css"

export default function FileExplorer(){

const [initialData, setInitialData] = useState(explorer);
const [inputData, setInputData] = useState("");
const [expandMap, setExpandMap] = useState({}); // Track expand state per folder
const [fileOrFolder, setFileOrFolder] = useState(false);


const handleToggleExpland = () =>{
  setExpandMap((prev)=>({...prev, [id] : !prev[id]}))
}


const addNewFileOrFolder = (currentFolder, id, newItem) =>{
    if(currentFolder.id===id){
      return {...currentFolder, items: [...currentFolder.items, newItem]}
    }
    return {
      ...currentFolder, 
      items: currentFolder.items.map((item)=>item.isFolder? addNewFileOrFolder(item, id, newItem): item)
    }
}

const handleAddItem = (id) =>{
  if(!inputData.trim()) return;

  const newItem = {
    id: Date.now().toString(),
    name: inputData,
    isFolder: fileOrFolder, 
    items: fileOrFolder ? [] : []
  }

  const updatedData = addNewFileOrFolder(initialData, id, newItem)
  setInitialData(updatedData);
  setInputData("")

}

const Folder = ({node, expandMap, onToggleExpand, onAddItem, setFileOrFolder, setInputData, inputData})
   return(
    <div style={{marginLeft: 20}}>
      <div> 
        {node.isFolder ? <span onClick={()=>{onToggleExpand(node.id)}} style={{ cursor: "pointer", fontWeight: "bold" }}>
          {expandMap[node.id]?"📂" : "📁"}{node.name}
        </span> : <span>📄 {node.name}</span>}

        {node.isFolder && (
          <>
          <button onClick={()=>{setFileOrFolder(true)}}>Folder +</button>
          <button onClick={()=>{setFileOrFolder(false)}}> File +</button>
          <input type="text" value={inputData} placeholder="Please enter name..." onChange={(e)=>{setInputData(e.target.value)}}/>
          <button onClick={()=>{addNewFileOrFolder(node.id)}}>Add Item</button> 
          </>
        )}
      </div>
      {
        node.isFolder && expandMap[node.id] && 
        node.items.map((item)=>(
          <Folder key={item.id} node={item} expandMap={expandMap} onToggleExpand= {handleToggleExpland}
          onAddItem = {handleAddItem} setFileOrFolder= {setFileOrFolder} setInputData={setInputData} inputData={inputData} />
        ))
      }
    </div>
   )
}