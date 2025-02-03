import React, { Fragment, useState } from "react";
import explorer  from "./folderData";
import "./file-explorer.css"
import addfolder from "./addfolder.png";
import addfile from "./addfile.png";

export default function FileExplorer1(){

    const [initialData, setInitialData] = useState(explorer);


    const addFolder = (id) =>{
     console.log(111, id)
     if(explorer.id === id){
        explorer.items = [...explorer.items, {name: "New Folder", isFolder: true, items:[]}]
     }
     else{
       
     }
    }

    const addFile = (id) =>{
     console.log(222, id)
    }

    function addFileOrFolder(){

    }

    return(
        <div> 
          {
            <div>
            <React.Fragment key={initialData.id}>
                {initialData.isFolder? "📂" : "📄"} {initialData.name} <img src={addfolder} width="20px" height="20px" alt="plus" onClick={()=>{addFolder(initialData.id)}}/> <img src={addfile} width="20px" height="20px" alt="plus" onClick={()=>{addFile(initialData.id)}}/>
            </React.Fragment>
            <React.Fragment>
                {initialData.items.map((item)=>(
                    <React.Fragment>
                    <li key={item.id} className="listdesgin">{item.isFolder? "📂" : "📄"}{item.name} {item.isFolder? <img src={addfolder} width="24px" height="24px" alt="plus" onClick={()=>{addFolder(item.id)}}/>  : ""} {item.isFolder? <img src={addfile} width="24px" height="24px" alt="plus" onClick={()=>{addFile(item.id)}}/>   : ""} </li>
                     {item.items.map((item)=>(
                        <div>
                        <li className="listdesgin" key={item.id}>{item.isFolder? "📂" : "📄"} {item.name} {item.isFolder? <img src={addfolder} width="24px" height="24px" alt="plus" onClick={()=>{addFolder(item.id)}}/> : ""} {item.isFolder?  <img src={addfile} width="24px" height="24px" alt="plus" onClick={()=>{addFile(item.id)}}/> : ""}</li>
                        {item.items.map((item)=>(<li className="listdesgin" key={item.id}>{item.isFolder? "📂" : "📄"} {item.name} {item.isFolder? <img src={addfolder} width="24px" height="24px" alt="plus" onClick={()=>{addFolder(item.id)}}/>  : ""} {item.isFolder? <img src={addfile} width="24px" height="24px" alt="plus" onClick={()=>{addFile(item.id)}}/> : ""}</li>))}
                        </div>
                    ))}
                    </React.Fragment>
                ))}
            </React.Fragment>
          </div>
          }
        </div>
    )
}