import { useEffect, useState } from "react"

export default function InfiniteScroll(){
     const [dataToLoad, setDataToLoad] = useState([]);
     const [page, setPage] = useState(1);
    // const images = [];

     const loadData = () =>{
      //"https://d98bc0e9-1ba6-4bd2-a114-6294f5e79c51-00-2gzdzextztyni.sisko.replit.dev/employees"
         fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`).then((response)=>response.json()).then((data)=>(
            //setDataToLoad(data.message)
            //setDataToLoad({id: data.id, name: data.employee_name, salary: data.employee_salary})
            setDataToLoad([...dataToLoad, ...data])
         ))
         
     }

     const loadImages = (imageUrl) =>{
        // console.log(222, imageUrl)
        // for(let i = 0 ; i<5; i++){
        //     images.push(imageUrl);
        // }
        // console.log(images)
        // setDataToLoad(images);

     }

     console.log(111, dataToLoad);


     useEffect(()=>{
        console.log(111, page)
        loadData();
     }, [page])

     useEffect(()=>{
      console.log("Visible "+ window.scrollY)
      console.log("Inner Height" + window.innerHeight)
      console.log("Scroll Height "+ document.documentElement.scrollHeight);
        console.log(222, page)
        window.addEventListener("scroll", () =>{
            if(window.innerHeight + document.documentElement.scrollTop + 1>=  document.documentElement.scrollHeight){
                setPage((prev)=>prev+1)
            }
        })
     }, [])



    return(
       
            <div>
            <h1>Images</h1>
             { 
             dataToLoad.length>0 ?dataToLoad.map((imageitem)=>(
               
                <li style={{background: "yellow", listStyle: "none"}}>
                <h4>Id: {imageitem.id} </h4>
                <p>Name: {imageitem.title}</p>
                <p>Salary: {imageitem.body}</p>
                </li>
             )) : "No data"
          
             } 
           </div>
        
    )
}