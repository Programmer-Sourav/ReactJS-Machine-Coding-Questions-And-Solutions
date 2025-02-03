// import { useState } from "react"
// import "./nestedcomments.css"

// export default function NestedComments(){

//    const [comment, setComment] = useState("")
//    const [allComments, setAllComments] = useState([])
//    const [showReplyInput, setShowReplyInput] = useState(false)
  
//    //comment->(pushed in an parent comment array)
//    //{id:1, comment: "text", replies: [{id:1, comment: "text reply", replies: [{id:1, comment: "text reply", replies: []}]}], }
//    //comment item->replies->replies->replies //it will traverse each item in comment and go
//    //to replies item -> then again it will traverse each element in replies array and go to replies element. 

//    const addComment = () =>{
//        const commentItem = { id: allComments.length + 1, comment: comment, replies:[]}
//        setAllComments([...allComments, commentItem])
//        setComment("")
//    }

//    const addReply = (id) =>{
//     console.log(123, id, allComments)
//     setShowReplyInput(true)
//    }
//    const addReplyComment = (id) =>{
//     //search by comment id
//     //if 
//     const replyItem = { id: Date.now().toString(), comment: comment, replies:[]}
//     //const updated = allComments.map((commentItem)=>(commentItem.replies))
//     setAllComments([...allComments.replies, replyItem])
//     setComment("")
//    }
//    console.log(134, allComments)
//     return(
//         <div> 
//             <input type="text" value={comment} 
//             placeholder="Add Comment..." 
//             className="inputcommentbox"
//             onChange={(e)=>{setComment(e.target.value)}}/>
//             <button onClick={()=>{addComment()}} className="btn">Add</button> 
//             {
//                 allComments.map((commentItem)=>(
//                     <div>
//                     <li key={commentItem.id}>{commentItem.comment} <span><button onClick={()=>{addReply(commentItem.id)}} className="replybtn">Add Reply</button></span></li>
//                     <li key={commentItem.id}>{commentItem.replies.map((replyItem)=>(replyItem.comment))} <span><button onClick={()=>{addReply(commentItem.id)}} className="replybtn">Add Reply</button></span></li>
//                     </div>
//                 ))
//             }
//             {showReplyInput ?   <div><input type="text" value={comment} 
//             placeholder="Add Comment..." 
//             className="inputcommentbox"
//             onChange={(e)=>{setComment(e.target.value)}}/>
//             <button onClick={()=>{addReplyComment()}} className="btn">Submit</button></div> : ""}
//         </div>
//     )
// }