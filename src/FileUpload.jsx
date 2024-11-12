import { useEffect, useRef, useState } from "react"

import main from "../src/main"

export default function FileUpload(){

   const fileInputRef = useRef(null);
   const [uploadProgress, setUploadProgress] = useState(0);


    // Load external script when component mounts
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../src/main";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

   const handleUpload = async (e) =>{
    e.preventDefault();

    const file = fileInputRef.current.files[0];
    if(!file){
        alert("Please select a File!")
        return;
    }
     // Create a new ReadableStream to track the upload progress
     const totalSize = file.size;
     let uploadedSize = 0;

     const stream = new ReadableStream({
        start(controller){

            const reader = file.stream().getReader();

            function read(){
                reader.read().then(({done, value}) =>{
                    if(done){
                        controller.close();
                        return;
                    }
              // Update the uploaded size and calculate the percentage
              uploadedSize += value.length;
              const percentComplete = Math.round((uploadedSize / totalSize) * 100);
              setUploadProgress(percentComplete);

              // Enqueue the chunk into the controller
               controller.enqueue(value);
               read();
                })
            }
            read();
        }
     })
       // Create a new Request with the ReadableStream as the body
       const newFile = new File([stream], file.name, { type: file.type });
       const formData = new FormData();
       formData.append("file", newFile)
    try{
      const response = await fetch("https://d98bc0e9-1ba6-4bd2-a114-6294f5e79c51-00-2gzdzextztyni.sisko.replit.dev/upload",
          {method: "POST",
            body: formData
           }

      )
    
      if (response.ok) {
        alert("File uploaded successfully!");
    } else {
        alert("Error uploading file");
    }
    setUploadProgress(0); // Reset progress after completion
    } catch (error) {
    console.error("Error uploading file:", error);
    alert("There was an error uploading the file.");
    setUploadProgress(0);
    }
   }


   
    return(
        <div> 
            <h1> File Upload! </h1>
            <form onSubmit={handleUpload}>
                <input type="file" ref={fileInputRef} required/>
                <button type="submit">Upload</button>
            </form>
             {uploadProgress>0 && (
                <div> 
                    <p> Upload Progress: {uploadProgress}% </p>
                    {console.log(333, uploadProgress)}
                    <progress value={uploadProgress} max="100" />
                </div>
             )}
        </div>
    )
}