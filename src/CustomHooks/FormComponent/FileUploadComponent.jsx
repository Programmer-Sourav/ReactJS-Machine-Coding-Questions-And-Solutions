import { useEffect, useState } from "react"

//form component
export default function FileUploadComponent(){
 const [formData, setFormData] = useState({username: "", file: ""})
 const [preview, setPreview] = useState(null)
 const [errors, setErrors] = useState("")




 const handleSubmit = (e) =>{
    e.preventDefault();

 }

 const handleFormText = (e) =>{
     const { value, name} = e.target;

     setFormData((prev)=>({...prev, [name]: value}))
 }

 const handleFileData = (e) =>{
    const file = e.target.files[0];
    setFormData((prev)=>({...prev, file}))
    setPreview(URL.createObjectURL(file))

 }

// Clear preview URL on unmount
useEffect(() => {
  return () => {
    if (preview) URL.revokeObjectURL(preview);
  };
}, [preview]);

    return(
        <form onSubmit={handleSubmit}>
            <h2>Upload Form</h2>
            <label>
                Username: 
                <input type="text"  value={formData.username} name="username" onChange={(e)=>{handleFormText(e)}}/>
            </label>
            <label>
                Upload A File: 
                <input type="file" accept="image/*" onChange={(e)=>{handleFileData(e)}}/>
            </label>
            {preview && (
        <div>
          <p>Preview:</p>
          <img src={preview} alt="preview" width={150} />
        </div>
      )}
         <button type="button">Submit</button>   
        </form>
    )
}