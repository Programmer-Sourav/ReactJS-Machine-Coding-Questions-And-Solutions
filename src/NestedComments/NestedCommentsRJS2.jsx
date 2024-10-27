import { useState } from "react";


export default function NestedCommentsRJS2() {
  const [commentsArray, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [replyInput, setReplyInput] = useState(""); // Stores the text for the new reply
  const [replyInputsVisibility, setReplyInputsVisibility] = useState(new Map()); // Controls visibility of reply input boxes
  const [mapOfRepliesForComment, setMapOfRepliesForComment] = useState(new Map()); // Manages replies for comments

  const handleComment = (e) => setComment(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const postComment = () => {
    if (comment && username) {
      const newComment = { id: commentsArray.length + 1, text: comment, user: username };
      setComments([...commentsArray, newComment]);
      setComment("");
      setUsername("");
    }
  };

  const toggleReplyInput = (commentId) => {
    setReplyInputsVisibility((prev) => new Map(prev).set(commentId, !prev.get(commentId)));
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

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={comment}
          onChange={handleComment}
          placeholder="Type your comment here..."
        />
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Type your username"
        />
        <button onClick={postComment}>Post Comment</button>
      </div>

      <ul>
        {commentsArray.map((commentItem) => (
          <li key={commentItem.id} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>
                {commentItem.user} - {commentItem.text}
              </span>
              <button onClick={() => toggleReplyInput(commentItem.id)}>Post Reply</button>
            </div>

            {/* Reply input for this comment */}
            {replyInputsVisibility.get(commentItem.id) && (
              <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "10px" }}>
                <input
                  type="text"
                  value={replyInput}
                  onChange={handleReplyChange}
                  placeholder="Write a reply..."
                />
                <button onClick={() => postReply(commentItem.id)}>Post Reply</button>
              </div>
            )}

            {/* Display replies */}
            {mapOfRepliesForComment.get(commentItem.id) &&
              mapOfRepliesForComment.get(commentItem.id).map((reply) => (
                <ul key={reply.id} style={{ marginLeft: "20px" }}>
                  <li style={{ display: "flex", gap: "10px" }}>
                    {reply.user}: {reply.text}
                    <button onClick={() => toggleReplyInput(reply.id)}>Reply to this</button>

                    {/* Nested reply input */}
                    {replyInputsVisibility.get(reply.id) && (
                      <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginLeft: "20px" }}>
                        <input
                          type="text"
                          value={replyInput}
                          onChange={handleReplyChange}
                          placeholder="Write a reply..."
                        />
                        <button onClick={() => postReply(reply.id)}>Post Reply</button>
                      </div>
                    )}
                  </li>
                </ul>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
