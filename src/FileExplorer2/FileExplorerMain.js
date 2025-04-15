import { useState } from "react"
import explorer from "../FileExplorer2/data/folderData"
import Folder from "./components/Folder"

export default function FileExplorerMain(){
   const [explorerData, setExplorerData] = useState(explorer)

    return(
        <div> 
           <Folder explorer = {explorerData}/>
        </div>
    )
}