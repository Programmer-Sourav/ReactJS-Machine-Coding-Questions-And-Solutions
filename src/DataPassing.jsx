// export function DataParent(){
//     return <Child message = "Passing props in TOP DOWN"/>
// }

import { useState } from "react";

// function Child(props){
//     console.log(222, props)
// return <h1>{props.message}</h1>
// }


//In Bottom Up we will use a callback function

export function DataParent() {
    const [message, setMessage] = useState("")

    const setMessageHandler = (childData) =>{
        setMessage(childData)
    }
 return(
    <div>
    <div>Message from Child : {message}</div>
    {/*Pass the handler as a prop to the child*/}
    <Child callbackProp = {setMessageHandler}/>
    </div>
 )
    
}


function Child({callbackProp}){

   const handleChildData = () =>{
     const someDummyData = "Passing data from Child! Hello Parent... I am here..."
     callbackProp(someDummyData);
   }

    return(
      <button onClick={handleChildData}> Pass data from Child</button>
    )

}

