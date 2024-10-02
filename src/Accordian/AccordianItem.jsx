import React, { useState } from "react";
import "./Accordion.css"; // Import the CSS file
import ArrowDown from "./down-arrow.svg"; // Import SVGs
import ArrowUp from "./up-arrow.svg";

export default function AccordianItem({title, content}){

   const [isOpen, setIsOpen] = useState(false);

   const toggleAccordian = () =>{
    setIsOpen(isOpen=>!isOpen)
   }

    return(
        <div className="accordian-item">
            <div className="accordian-title" onClick={toggleAccordian}>
               <h3>{title}</h3>
               <img
                src={isOpen ? ArrowUp : ArrowDown}
                alt="Toggle Arrow"
                className="accordion-arrow"
               />
            </div>
            {isOpen && <div className="accordian-content">{content}</div> }
        </div>
    )
}