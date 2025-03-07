import { useState } from "react"


export default function MyForm(){
   const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    password: ""
   })


   const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("Form Submitted:", formData);
      setFormData({name: "", email: "", password: ""})
   }

   const handleChange = (e) =>{
    console.log(222, e.target.name, e.target.value)
    setFormData({...formData, [e.target.name] : e.target.value })
   }

    return(
        <div> 
            <h2> React Form</h2>
            <form onSubmit={handleSubmit}>
              <label> 
               Name: 
               <input type="text" placeholder="Enter your Name..." onChange={(e)=>{handleChange(e)}} name="name" value={formData.name} required/>
              </label>
              <label> 
               Email: 
               <input type="email" placeholder="Enter your Email..." onChange={(e)=>{handleChange(e)}} name="email" value={formData.email} required/>
              </label>
              <label> 
                Password: 
               <input type="password" placeholder="Enter your Password..." onChange={(e)=>{handleChange(e)}} name="password" value={formData.password} required/>
              </label>
              <button type="submit">Submit</button>
            </form>
        </div>
    )
}