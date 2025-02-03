import { useState } from "react"
import explorer from "./folderData"

export default function FileExplorerRevise(){

    const [initialData, setInitialData] = useState(explorer);
    const [inputData, setInputData] = useState("");
    const [expandMap, setExpandMap] = useState({});
    const [fileOrFolder, setFileOrFolder] = useState(false);



const addNewFileOrFolder = (currentFolder, id, newItem) =>{
   if(currentFolder.id===id){
    return {...currentFolder, items: [{...currentFolder.items, newItem}]}
   }
   return{
    ...currentFolder, items: currentFolder.items.map((item)=>item.isFolder? addNewFileOrFolder(item, id, newItem): item)
   }
}    
 
const addFileOrFoler = () =>{
   if(!inputData.trim()) return;

   const newItem = {
    id: Date.now().toString(),
    name: inputData,
    isFolder: fileOrFolder,
    items: fileOrFolder ? [] : []
   }
   const updatedData = addNewFileOrFolder(initialData, id, newItem)
   setInitialData(updatedData)
   setInputData("")
}    

const handleExpandMap = (id ) =>{
    setExpandMap((prev)=>({...prev, [id] : !prev[id]}))
}



const Folder = ({node, inputData, onExpandMap, setFileOrFolder, addFilehandler}) =>{
    return(
    <div style={{marginLeft: 20}}> 
    <div>
      {node.isFolder ? <span onClick={()=>{onExpandMap(node.id)}} style={{ cursor: "pointer", fontWeight: "bold" }}>
        {expandMap[node.id] ? "📂" : "📁"}{node.name}
      </span> : <span>📄 {node.name}</span>}  
      {node.isFolder && (
      <>
      <button onClick={()=>{setFileOrFolder(true)}}>Folder +</button>
      <button onClick={()=>{setFileOrFolder(true)}}>File +</button>
      <input type="text" value={inputData} onChange={(e)=>{setInputData(e.target.value)}} placeholder="Enter name..."/>
      <button onClick={()=>{addFilehandler()}}>Create </button>
      </>
      )}
    </div>
     {
      node.isFolder && expandMap[node.id] &&
      node.items.map((item)=>
      (
        <Folder key={item.id} node={item} inputData={inputData} 
        onExpandMap={handleExpandMap} fileOrFolder={setFileOrFolder}
         addFilehandler={addFileOrFoler}/>
      ))
     }
    </div>
   )
 }
}