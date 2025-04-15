export default function Folder({explorer}){


    return(
        <div style={{marginTop: "5px"}}> 
            <div>{explorer.name}</div>
            <div>{explorer.items.map((item)=>(
                <p>{item.name && Array.isArray(item.items)}</p>
            ))}</div>
        </div>
    )
}