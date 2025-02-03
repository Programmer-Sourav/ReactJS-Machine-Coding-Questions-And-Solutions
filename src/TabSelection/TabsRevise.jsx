import Tab from "./Tab"
import "./tabs.css"
import { useState } from "react"

export default function TabsRevise(){
 const [selectedTab, setSelectedTab] = useState(1)

 const contentForTabs = [{id: 1, title: "About Us", content: "We are XYZ corporation"},
    {id: 2, title: "Services", content: "Multiple industry services"},
    {id: 3, title: "Products", content: "Multiple industry products"},
    {id: 4, title: "Contact Us", content: "nowhere"}
 ]


 const handleSelection = (tabId) =>{
    console.log(1234, tabId)
    setSelectedTab(tabId)
 }

    return(
        <div className="tabbody"> 
        <div className="tabs-container">
        {contentForTabs.map((item, index)=>(
            <button onClick={()=>{handleSelection(item.id)}} key={index} className="tabs active">{item.title}</button>
        ))}
        </div>
        <div className="content">

         {selectedTab ? <Tab content={contentForTabs[selectedTab-1].content} />: <Tab content={"No Content"} /> } 
        </div>
        </div>
    )
}