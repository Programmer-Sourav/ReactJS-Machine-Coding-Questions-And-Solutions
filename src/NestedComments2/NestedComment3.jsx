import React, { useState } from "react";

export default function NestedComment3(){

    const [comments, setComments] = useState([])


    const addReply = (comments, parentId, newReply) =>{
        console.log(1234, parentId)
    return comments.map((comment)=>{
       if(comment.id===parentId){
         return {...comment, replies: [...comment.replies, newReply]}
       } 
       else{
        return {...comment, replies: addReply(comment.replies, parentId, newReply )}
       }
    })
    }


    const handleAddComment = (text, parentId=null) =>{
        const newComment = {id: Date.now(), text, replies: []}

        if(parentId===null){
            setComments([...comments, newComment])
        }
        else{
            setComments(addReply(comments, parentId, newComment))
        }
    }

    const CommentInput = ({onAddComment, parentId, isReply}) =>{

       const [inputCommentValue, setInputCommentValue] = useState("")

       return(
        <div style={{marginTop: 10, marginLeft: parentId ? 20 : 0}}>
        <input type="text" value={inputCommentValue} placeholder={isReply ? "Write a reply..." : "Write a comment..."} 
        onChange={(e)=>{setInputCommentValue(e.target.value)}}/>
        <button onClick={()=>{if (inputCommentValue.trim()) 
            onAddComment(inputCommentValue, parentId); setInputCommentValue("")}}>Add Comment</button>

        </div>
       )
    }

    const CommentList = ({comments, onAddReply}) =>{
        return(
            <div style={{ marginLeft: 20 }}>
             {
                comments.map((comment)=>(
                    <CommentItem key={comment.id} comment={comment} onAddReply={onAddReply}/>
                ))
             }
            </div>
        )
    }

    const CommentItem = ({comment, onAddReply}) =>{

      const [showReplies, setShowReplies] = useState(true)

      return(
        <div style={{ marginTop: 10, borderLeft: "1px solid #ddd", paddingLeft: 10 }}> 
        <strong>{comment.text}</strong>
        <button onClick={()=>{setShowReplies(!showReplies)}}>{showReplies? "Hide" : "Show"} Replies </button>
        <CommentInput onAddComment={onAddReply} parentId={comment.id} isReply={true}/>
        {showReplies && <CommentList comments={comment.replies} onAddReply= {onAddReply}/>}
        </div>
      )

    }

    return(
        <div> 
        <h2>Nested Comments!</h2>
        <CommentInput onAddComment={handleAddComment}  parentId={null} isReply={false}/>
        <CommentList comments={comments} onAddReply={handleAddComment}/>
        </div>
    )
}