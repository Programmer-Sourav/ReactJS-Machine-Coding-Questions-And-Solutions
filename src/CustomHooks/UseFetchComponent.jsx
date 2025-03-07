import useFetch from "./useFetch";

export default function UseFetchComponent(){

    const url = "https://jsonplaceholder.typicode.com/posts";

    const { fetchedData, loading, error} = useFetch(url)

    console.log(3333, fetchedData)
    if(loading)
        return <div>Loading....</div>

    if(error)
        return <div>{error.message}</div>

    return(
        <div> 
             {
                fetchedData.map((dataItem)=>(
                    <div style={{border: "1px solid gold", margin: "8px"}}> 
                     <p>{dataItem.id}</p>
                     <p> {dataItem.title}</p>
                     <p>  {dataItem.body} </p>
                    </div>
                ))
             }
        </div>
    )
}