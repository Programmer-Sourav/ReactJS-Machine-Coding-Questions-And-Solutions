import "./pills.css"

export default function Pills({id, category, deleteHandler}){

  console.log(444, id, category)

    return(
        <div className="pills"> 
          {category}
          <button onClick={()=>deleteHandler(id)} style={{color: "red"}}>X</button>
        </div>
    )
}