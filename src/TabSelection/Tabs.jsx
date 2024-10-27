import Tab from "./Tab";
import "./tabs.css"

import { useState } from "react"

export default function Tabs(){
     
    const [selectedTab, setSelectedTab] = useState(1);

    const arrayOfTabsAndValues = [{id: 1, title: "About us", content: "We are an app development company."}, 
                                  { id: 2, title: "Web", content: "We use tech stack React, node, java"}, 
                                  {id: 3, title: "Mobile", content: "We use Android native in our apps."}, 
                                  {id: 4, title: "Projects", content: "We have worked on multiple projects with 500+ clients."}
    ]
    //for index, I can either hardcode values in onlcikc, 
    //or keep an array

    function showContentForTab(itemId){
        return arrayOfTabsAndValues.at(itemId-1).content;        
    }

    return(
        <div className="tabbody">
        <div className="tabs-container"> 
        <div>{arrayOfTabsAndValues.map((item)=>(<button key={item.id}  className={`tabs ${selectedTab === item.id ? "active" : ""}`} onClick={()=>{setSelectedTab(item.id)}}>{item.title}</button>))}</div>
        </div>
        <div className="content">
        <Tab content={showContentForTab(selectedTab)}/>
        </div>
        </div>
    )
}