import "./infinitescroll.css"

import { useEffect, useState } from "react"

export default function InfiniteScrollRevise(){

const [images, setImages] = useState(Array.from({length: 5}, (_, i)=>({
    id: i+1,
    url: `https://api.pexels.com/v1/curated?page=${i+1}&per_page=15`
})))
const [isFetching, setIsFetching] = useState(false)
const [nextImageId, setNextImageId] = useState(6)


const fetchImages = () =>{
    isFetching(true);
    setTimeout(()=>{
    const nextImages = Array.from({length: 5}, (_, i)=>({
        id: nextImageId+i,
        url: `https://api.pexels.com/v1/curated?page=${nextImageId+1}&per_page=15`
    }))
    setImages([...images, ...nextImages])
    setIsFetching(false)
    setNextImageId(nextImageId + 5)
},1000)
}

const handleScroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop>= document.documentElement.offsetHeight - 100 & !isFetching){
        fetchImages();
    }
}


useEffect(
    ()=>{
   window.addEventListener("scroll", handleScroll)
   return ()=>{window.removeEventListener("scroll", handleScroll)
   }
}, [isFetching, nextImageId, handleScroll])

return(
 <div className="container">
            <div className="image-container">
            {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Random ${image.id}`}
            height="256px"
            width="256px"
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