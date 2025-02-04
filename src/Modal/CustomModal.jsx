import { useState } from "react"
import "./custommodal.css"

export default function CustomModal(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () =>{
       setIsModalOpen(true)
    }

    const closeModal = () =>{
      setIsModalOpen(false)
    }
    return(
       <div className="modal-container"> 
       <button onClick={openModal}>Open Modal</button>
       {isModalOpen && (
        <div className="modal">
           <div className="modal-content">
            <span className="close" onClick={closeModal}>
            &times;
           </span>
           <p>Modal Content Here...</p>
         </div> 
       </div>
       )}
       </div>
    )
}