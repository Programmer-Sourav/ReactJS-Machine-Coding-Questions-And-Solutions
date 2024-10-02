import "./template-container.css"
import { useState } from "react"
import { JobSelectionTemplate, ResignationTemplate } from "./TemplatesComponent"

export default function EmailTemplates(){
   const [selectedTemplate, setSelectedTemplate] = useState("job-selection")
   const [employeeName, setEmployeeName] = useState("")
   const [companyName, setCompanyName] = useState("")
   const [effectiveDate, setEffectiveDate] = useState("")
   const [lastDate, setLastDate] = useState("")
   const [showTemplate, setShowTemplate] = useState(false)

  

function showSelectedTemplate(){
  //render the specific component based upon selection 
  console.log(111, selectedTemplate)
  if(selectedTemplate==="job-selection"){
    return(
    <div className="template-output">
    <JobSelectionTemplate companyName={companyName} employeeName={employeeName}/>
    </div>
    )
    }
    else{
    return(
    <div className="template-output">
    <ResignationTemplate companyName={companyName} effectiveDate={effectiveDate} lastDate={lastDate} employeeName={employeeName}/>
    </div>
    )
    }
}

    return(
        <div className="template-container"> 
            <label>Select The Template:
              <select value={selectedTemplate} onChange={(e)=>{setSelectedTemplate(e.target.value)}}>
                <option value="job-selection"> Job Selection </option>
                <option value="resignation">Resignation</option>
                </select>  
             </label>
             <label>Employee Name: 
                <input type="text" value={employeeName} onChange={(e)=>{setEmployeeName(e.target.value)}}/>
             </label>
             <label>Company Name: 
                <input type="text" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}/>
             </label>
             <label>Effective Date: 
                <input type="date" value={effectiveDate} onChange={(e)=>{setEffectiveDate(e.target.value)}}/>
             </label>
             <label>Last Date: 
                <input type="date" value={lastDate} onChange={(e)=>{setLastDate(e.target.value)}}/>
             </label>
             <button onClick={()=>{setShowTemplate(true)}}>Show Template</button>
             {/* {showTemplate && (
        <div className="template-output">
          {selectedTemplate === "job-selection" ? (
            <JobSelectionTemplate
              companyName={companyName}
              employeeName={employeeName}
            />
          ) : (
            <ResignationTemplate
              companyName={companyName}
              employeeName={employeeName}
              effectiveDate={effectiveDate}
              lastDate={lastDate}
            />
          )}
        </div>
      )} */}
        {showTemplate && showSelectedTemplate()}
    </div>
  );
}