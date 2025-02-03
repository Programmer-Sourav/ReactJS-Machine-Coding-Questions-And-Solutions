import { useState } from "react"
import uuid4 from "uuid4"
import Comment from "./Comment";


export default function NestedCommentTwo(){
 const [comments, setComments] = useState([])
 const [rootComment, setRootComment] = useState("")

 const addComment = (parentId, newCommentText) =>{
   let newComment = null;
   if(parentId){
    newComment  = getNewComment(newCommentText, false, parentId)
    setComments((comments)=>(
        {
            ...comments, [parentId] : {
                ...comments[parentId], 
                childCommments: [...comments[parentId].childCommments, newComment.id ]
            }
        }
    ))
   }
   else{
    newComment = getNewComment(newCommentText, true, null)
   }
   setComments((comments)=>({...comments, [newComment.id] : newComment}))
 }


 const commentMapper = (comment) =>{
    return {...comment, 
        childCommments: comment.childCommments.map((id)=>comment[id]).map((comment)=>commentMapper(comment))
    }
 }


 const enhancedComment = Object.values(comments).filter((comment)=>{ return !comment.parentNodeId}).map(commentMapper)


 const onAdd = () =>{
    addComment(null, rootComment)
    setRootComment("")
 }
 function getNewComment(commentValue){
    return {
        id: uuid4(),
        commentText: commentValue,
        childCommments: [],
        isRootNode: false,
        parentNodeId : "",
      };
 }

    return(
        <div> 
        <header style={{marginBottom : '2rem', fontSize : '2rem'}}>Nested Comment Example</header>
        <div className="comments-container">
        <input type="text"
        value={rootComment}
        onChange={(e)=>{setRootComment(e.target.value)}}
        placeholder="Add Comment"
        style={{ width: "80%", marginRight: "1rem" }}/>
    <button onClick={onAdd}>Add </button>
        </div> 
        <div
        style={{
          border: "1px solid blue",
          width: "60%",
          margin: "auto",
          overflowX: "auto",
          padding: "2rem",
        }}
      >
       {
        enhancedComment.map((commentItem, key)=>{
           return(
            <Comment comment={commentItem} key={key} addComment={addComment}/>
           )
          })
       }

        </div>   


        </div>
    )
}