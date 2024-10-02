import useFetch from "./useFetch"

export default function DataFetchingComponent(){

    const {data, loading, error } = useFetch("https://dummyjson.com/products"); 
    console.log("444test", data.products);
    return(
        <div>
        <h1>Fetched Data: </h1>
        {data.products && data.products.map((product)=>(
            <li>
                <p>{product.id}</p> 
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.category}</p> 
                <p> {product.price}</p>
            </li>
            ))}
        </div>
    )
}

// function DataFetchingComponent() {
//     const { data, loading, error } = useFetch('https://dummyjson.com/products');
    
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h1>Fetched Data:</h1>
//             <pre>{JSON.stringify(data.products, null, 2)}</pre>
//         </div>
//     );
// }

// export default DataFetchingComponent;