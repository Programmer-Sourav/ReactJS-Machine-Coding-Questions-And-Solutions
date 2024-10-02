import useFetch from "./useFetch"

export default function FetchDataComponent(){
  
    const { data, loading, error } = useFetch("https://dummyjson.com/products")

    return(
       <div> 
        <h1> Fetched Data </h1>
        {
          data.products && data.products.map((dataItem)=>(
            <li> 
              <p>{dataItem.id}</p>
              <p>{dataItem.title}</p>
              <p>{dataItem.description}</p>
              <p>{dataItem.category}</p>
              <p>{dataItem.price}</p>
            </li>
          ))
        }
       </div>
    )
}