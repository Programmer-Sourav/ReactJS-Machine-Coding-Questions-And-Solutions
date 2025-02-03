import { useState } from "react";

export default function Comment({comment, addComment}){
  const { commentText, childComments, id} = comment;
  const [childComment, setChildComments] = useState([])
  const [showAddComponent, setShowAddComponent] = useState(false)
  const [show, setShow] = useState(false)


  const onAdd = () =>{
     addComment(id, childComment);
     setChildComments("")
     setShowAddComponent(false);
  }


    return(
        <div className="Comment"> 
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <div style={{textAlign: "left"}}>{commentText}</div>
        {childComments.length>0 && (
            <button onClick={()=>{setShow(show =>! show)}}>{show ? "Hide" : "Show"}</button>
        )}
        <div>
        <div>
            {showAddComponent ? <> <input type="text" value={childComment} placeholder="Enter Something..." onChange={(e)=>{setChildComments(e.target.value)}}/>
            <button onClick={onAdd}>Submit</button> </>:
            <a style={{cursor: "pointer", fontSize: "0.7rem", color: "blue"}}
             onClick={()=>showAddComponent(true)}
            >
            Add Reply
            </a> 
            }
        </div>    
        </div>
        {
          childComments.map((childCommentItem, key)=>(
             <Comment key={key}
                comment = {childCommentItem}
                addComment={onAdd}/>
          ))
        }
        </div>
        </div>
    )
}