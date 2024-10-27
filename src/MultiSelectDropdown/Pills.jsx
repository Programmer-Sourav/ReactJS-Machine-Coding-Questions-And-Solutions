import "./pills.css"

export default function Pills({id, category, deleteHandler}){



    return(
        <div className="pills"> 
          {category}
          <button onClick={()=>deleteHandler(id)} style={{color: "red"}}>X</button>
        </div>
    )
}