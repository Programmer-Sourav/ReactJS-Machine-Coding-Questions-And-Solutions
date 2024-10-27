import { useEffect } from "react";
import useAsync from "./useAsync";

export default function AsyncComponent(){


    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      };

      const { execute, loading, value: posts, error} = useAsync(fetchData);

      useEffect(()=>{execute()}, [execute]);

      if(loading) return <div>Loading... </div>
      if(error) return <div>Error: {error}</div>

    return(
      <div> 
        {posts && posts.map((post)=>(
            <div key={post.id}>
                <p>Title : {post.title}</p>
                <p>{post.body}</p>
             </div>
        ))}
      </div>
    )
}