
import { useEffect, useState } from "react"
import "./infinitescroll.css"

export default function InfiniteScroll(){

const [images, setImages] = useState(Array.from({length: 5}, (_, i)=>({
    id : i + 1,
    url: `https://api.pexels.com/v1/curated?page=${i+1}&per_page=15`
})))

const [isFetching, setIsFetching] = useState(false)
const [nextImageId, setNextImageId] = useState(6)

const fetchImages = () =>{
    setIsFetching(true);
    
    setTimeout(()=>{
        const newImages = Array.from({length: 5}, (_, i)=>({
           id: nextImageId + i, 
           url : `https://source.unsplash.com/random/200x200?pic=${nextImageId + 1}`
            
        }))
        setImages((prevImages)=>([...prevImages, ...newImages ]))
        setNextImageId(nextImageId + 5);
        setIsFetching(false)
    }, 1000)
}

const handleScroll = () =>{
   if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isFetching){
    fetchImages();
   }
}

useEffect(()=>{
    window.addEventListener("scroll", handleScroll)

    return ()=>{window.removeEventListener("scroll", handleScroll)}

}, [nextImageId, isFetching, handleScroll])


    return(
        <div className="container">
            <div className="image-container">
            {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Random ${image.id}`}
            className='image'
          />
        ))}
      </div>
         {isFetching && <div className="loader">
            <h2>Loading... </h2>
          </div>}
        </div>
    )
}