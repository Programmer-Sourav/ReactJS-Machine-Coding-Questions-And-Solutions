import useFetch from "./useFetch"

export default function DataFetchingComponent(){

  const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos/1")

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  /**
   * 1. Call custom hooks on top of the Components
   * 2. Call custom hooks from other components or other custom hooks
   * 3. Custom hooks can not be called inside loop, condition or nested functions 
   * 
   */

    return(
        <div> 
           <h2>Fetched Data</h2>
           {
            <ul>
            <h2>Serial : {data.id}</h2>
            <h2>Title: {data.title}</h2>
            <h2>User Id: {data.userId}</h2>
            <h2>Status: {data.completed ? "Completed" : "Not yet Completed"}</h2>
            </ul>
           }

        </div>
    )
}