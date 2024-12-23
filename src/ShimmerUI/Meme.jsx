import "../meme.css"

export default function Meme({data}){
 
    const { url, title, author} = data;
    console.log(3333, url)
    return(
        <div className="mb"> 
        <img  src={url} alt="meme" className="meme"/>
        </div>
    )
}