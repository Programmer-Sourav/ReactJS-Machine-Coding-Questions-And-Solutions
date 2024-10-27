// comment1->comment2->comment3
// comment4->comment5->comment6
//styling 
//comment, reply to prev comment, reply to prev comment
//a comment can have multiple replies
//comment1 can have comment2, comment3 //comment1 can have an array of comments
//comment2 can have comment4, comment5, comment6 //comment2 can have array of comments
//comment3 can have comment7, comment8           //comment3 can have array of comments
//********************************************** */

import { useState } from "react"


export default function NestedComments(){
    
const [repliesArray, setReplies] =  useState([])
const [commentsArray, setComments] = useState([])

//JS CODE**********************************************************************

const comment1 = {id:1, text: "Hello", user: "Sn"}
const comment2 = {id:2, text: "Hi Guys", user: "Ari"}
//comments itself is an array of comments, 
//as multiple users will be commenting on a single post. 
const replies1 = [] //reply comments will be pushed to the array
const replies2 = []
//for each comment, there will be an array of reply {commentId, replies[]}
//map<Integer, String[]> 

const comments = []

comments.push(comment1);
comments.push(comment2);

const reply1 = {id: 1, text: "Hello! Evening", user: "XY"}
const reply2 = {id: 2, text: "Hey Guys", user: "AB"}
const reply3 = {id: 3, text: "Hello Folks", user: "CD"}
const reply4 = {id: 4, text: "Hello People", user: "EF"}
const reply5 = {id: 5, text: "Hello! Evening (R)", user: "GH"}
const reply6 = {id: 6, text: "Hey Guys (R)", user: "IJ"}
const reply7 = {id: 7, text: "Hello Folks(R)", user: "KL"}
const reply8 = {id: 8, text: "Hello People(R)", user: "MN"}

const mapOfRepliesForComment = new Map();
const mapOfRepliesForReplies = new Map();

replies1.push(reply1);
replies1.push(reply3);

replies2.push(reply2);
replies2.push(reply4);

const repliesForReplies = []

const repliesForReplies1 = []
const repliesForReplies2 = []

mapOfRepliesForComment.set(comment1.id, replies1);
mapOfRepliesForComment.set(comment2.id, replies2);

repliesForReplies1.push(reply5)
repliesForReplies1.push(reply6)

repliesForReplies2.push(reply6)
repliesForReplies2.push(reply7)
repliesForReplies2.push(reply8)



mapOfRepliesForReplies.set(reply1.id, repliesForReplies1 )
mapOfRepliesForReplies.set(reply2.id, repliesForReplies2)



return(
    <div>
        {
  comments.map((commentItem) => (
    <li key={commentItem.id}>
      {commentItem.user} - {commentItem.text}

      {/* Fetch replies for this comment */}
      {mapOfRepliesForComment.get(commentItem.id) &&
        mapOfRepliesForComment.get(commentItem.id).map((eachReply) => (
          <ul key={eachReply.id}>
            <li>{eachReply.user + ": " + eachReply.text}</li>
            {mapOfRepliesForReplies.get(eachReply.id) &&
             mapOfRepliesForReplies.get(eachReply.id).map((replyItem)=>(
                <ul key={replyItem.id}> 
               <li>{replyItem.user + ": " + replyItem.text}</li>
                </ul>
             ))}
          </ul>
        ))}
    </li>
  ))
}
    </div>
)

}

