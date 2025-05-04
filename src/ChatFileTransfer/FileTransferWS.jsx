import { useEffect, useState } from "react"
import { deserialize, serialize } from "bson"
import { Buffer } from "buffer"



export default function FileTransferWS(){
   
    const [file, setFile] = useState("")
    const [receivedData, setReceivedData] = useState([])
    const [textData, setTextData] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const socket = new WebSocket("wss://333c15b5-2302-4273-9108-f95ec17702f8-00-26a3vze1h0yiv.pike.repl.co:3000/");
    console.log(222, socket)
    let fileReceived = "";
    let fileUrl= "";
    const reader = new FileReader();
    let rawData = new ArrayBuffer();

    socket.onopen = (event) => {
        console.log(333, event)
        JSON.stringify({ event: "connected", data: "Client connected" })
        alert('You are Connected to WebSocket Server');
    };

    socket.onmessage = async (event)=>{
        console.log("Data "+event.data)
        //const data = JSON.parse(event.data);
        const rawBinarryArrayBuffer = await event.data.arrayBuffer();
        const data = deserialize(new Uint8Array(rawBinarryArrayBuffer));

        if(data.file && data.fileName && data.fileType){
            const receivedFile = new File([data.file.buffer], data.fileName, {type: data.fileType})
            console.log(8888, receivedFile)
            setReceivedData(receivedFile)
        }
      
    }

    socket.onclose =(event)=>{
        alert("Discounnected From Server")
    } 
    const onHandleFile = (e) =>{
      const file = e.target.files[0];
      setFile(file);
      console.log(555, file)
    //setTextData(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();   
        sendAttachedMessage();    
    }

    function sendAttachedMessage(){
        console.log(444, file, textData)
        //socket.send(textData)
        //socket.send(JSON.stringify({ event: "attachedmessage", data: "text" }))
        //setFile("")
        if (socket.readyState === WebSocket.OPEN) {
            //socket.send(JSON.stringify({ event: "attachedmessage", data: file}))
            reader.onload = () => {
                const arrayBuffer = reader.result; // This is an ArrayBuffer
                const bsonData = serialize({
                  file: new Uint8Array(arrayBuffer), // use Uint8Array to preserve binary
                  route: 'TRANSFER',
                  action: 'FILE_UPLOAD',
                  fileName: file.name,
                  fileType: file.type,
                });
            
                socket.send(bsonData);
              };
            
              reader.readAsArrayBuffer(file); // read file content as binary
          } else {
            console.log("WebSocket not connected");
          }
    }

    if(receivedData){
        console.log(receivedData instanceof Blob); // should be true
        console.log(receivedData.type); // check if it has a type
        console.log(receivedData.size); // see size
        fileUrl = URL.createObjectURL(receivedData);
       //setImageUrl(fileURL);
    }
    console.log(777, fileUrl)
    return(
        <form onSubmit={handleSubmit}> 
            {/* <input type="file" placeholder="Upload File" accept="image/*" onChange={(e)=>{onHandleFile(e)}}/> */}
            <input type="file" placeholder="send text" onChange={(e)=>{onHandleFile(e)}}/>
            <button>Upload</button>
            {receivedData ? <h1>Received Data</h1> : "Waiting For Data"}
            {fileUrl ? <img src={fileUrl} alt="downloaded" width="128px" height="128px"/>: ""}
        </form>
    )
}