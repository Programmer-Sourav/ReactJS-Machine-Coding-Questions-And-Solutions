import "./accordian.css"
import  {data}  from "./accdata"
import { useState } from "react"

export default function Accordian(){

    const [selected, setSelected] = useState(null)

    const data = [
        {
            question: "Question 1", 
            answer: "Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test test test 1 test 11111   test t1 test1 test1 test test1 test1 test1. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test test test 1 test 11111   test t1 test1 test1 test test1 test1 test1. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test test test 1 test 11111   test t1 test1 test1 test test1 test1 test1. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test test test 1 test 11111   test t1 test1 test1 test test1 test1 test1."
        }, 
        {
            question: "Question 2", 
            answer: "Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test2 test test test test test2 test2 test2 test2 test2 test2 test test test. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test2 test test test test test2 test2 test2 test2 test2 test2 test test test. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test2 test test test test test2 test2 test2 test2 test2 test2 test test test. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test2 test test test test test2 test2 test2 test2 test2 test2 test test test.Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test2 test test test test test2 test2 test2 test2 test2 test2 test test test."
        },
    
        {
            question: "Question 3", 
            answer: "Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test1 test test2 test2 test2 22222 test 2 test2 test 222222 test2 test2 test2 test2. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test1 test test2 test2 test2 22222 test 2 test2 test 222222 test2 test2 test2 test2. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test1 test test2 test2 test2 22222 test 2 test2 test 222222 test2 test2 test2 test2. Loren inpsum xyz abc def ghi jkl mno pqrst uv wx abc loren ipsum test1 test test2 test2 test2 22222 test 2 test2 test 222222 test2 test2 test2 test2."
        }
    
    ]
  
    const toggleTheView = (i) =>{
        console.log(1234, i)
      setSelected(i)
    }

    return(
        <div className="wrapper"> 
        <div className="accordian">
            {
                data.map((item, i)=>(
                    <div className="item">
                        <div className="title" onClick={()=>toggleTheView(i)}> 
                         <h2>{item.question}</h2>
                         <span>{selected == i? "-" : "+"}</span>
                        </div>  
                        <div className={selected== i ? "content show": "content" }> 
                            <p>{item.answer}</p>
                        </div>
                   </div>
                ))
            }
        </div>
        </div>
    )
}