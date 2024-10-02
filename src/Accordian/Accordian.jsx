import "./Accordion.css"; // Import the CSS file
import AccordianItem from "./AccordianItem"
import React from "react"

export default function Accordian(){
    return(
    <div className="accordian">
      <AccordianItem title="Accordion Item 1" content="This is the content of item 1." />
      <AccordianItem title="Accordion Item 2" content="This is the content of item 2." />
      <AccordianItem title="Accordion Item 3" content="This is the content of item 3." />
    </div>
    )
}