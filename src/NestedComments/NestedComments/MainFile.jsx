import { useState } from "react"
import "./mainfile.css"

export default function MainFile(){

    const [commentsArray, setCommentArray] = useState([])
    const [comment, setComment] = useState("")
    const [replyInput, setReplyInput] = useState("")
    const [replyInputVisibility, setReplyInputsVisibility] = useState(false)
    const [mapOfRepliesForComment, setMapOfRepliesForComment] = useState(new Map());


  const handleComment = (e) => setComment(e.target.value);

  const postComment = () => {
    if (comment) {
      const newComment = { id: commentsArray.length + 1, text: comment};
      setCommentArray([...commentsArray, newComment]);
      setComment("");
    }
  };

  const handleReplyChange = (e) => setReplyInput(e.target.value);

  const postReply = (commentId) => {
    if (replyInput) {
      const newReply = { id: Date.now(), text: replyInput, user: "User" };

      // Copy the existing Map to update it immutably
      const updatedReplies = new Map(mapOfRepliesForComment);
      const existingReplies = updatedReplies.get(commentId) || [];
      updatedReplies.set(commentId, [...existingReplies, newReply]);

      // Update the replies state
      setMapOfRepliesForComment(updatedReplies);
      setReplyInput("");
    }
  };

    // const dummy = [{id: 1, text: "Global Comment"}]
    // const dummyReplies = [{id: 1, text: "Reply Comment"}, {id: 2, text: "Reply Comment2"}]
    return(
        <div className="mainbody"> 
        <div style={{display:"flex", flexDirection: "row"}}>
        <input type="text"  className="comment-input" placeholder="Enter your comment..."/>
        <button className="comment-submit">Post</button>
        </div>
        {commentsArray.map((item)=>(
            <li>{item.text} <button className="comment-submit">Reply</button></li>
        ))}
        <div style={{display:"flex", flexDirection: "row"}}>
        <input type="text"  className="comment-input" placeholder="Enter your comment..."/>
        <button className="comment-submit">Post Reply</button>
        </div>
        {mapOfRepliesForComment.get(commentItem.id) &&
              mapOfRepliesForComment.get(commentItem.id).map((item)=>(
            <li>{item.text} <button className="comment-submit">Reply</button></li>
        ))}
        </div>
    )
}