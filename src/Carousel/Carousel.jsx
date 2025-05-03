import { ChevronLeft, ChevronRight} from "lucide-react";
import { useState } from "react"
import "../carousel.css"

import CI1 from "../../assets/ci1.jpg"
import CI2 from "../../assets/ci2.jpg"
import CI3 from "../../assets/ci3.jpg"

//bit cleaner approach according to me.
export default function Carousel(){

    const arrOfImages = [
        {id: 1, src: CI1, alt: "image1"},
        {id: 2, src: CI2, alt: "image2"},
        {id: 3, src: CI3, alt: "image3"}
    ]
    const [images, setImages] = useState(arrOfImages)
    const [slideId, setSlideId] = useState(0);

  const onLeftBtnClick = () => {
    setSlideId((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const onRightBtnClick = () => {
    setSlideId((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = [images[slideId]];

    return(
        <div className="container"> 
          <ChevronLeft  color="green" className="w-8 h-8 m-2" onClick={onLeftBtnClick}/>
         
          {currentImage.map((imageItem, index)=>(
            <div className="imagePos" key={index}>
                <img src={imageItem.src} alt={imageItem.alt}/>
                 </div>
          ))}
         
          <ChevronRight color="green" className="w-8 h-8 m-2" onClick={onRightBtnClick}/>
        </div>
    )
}


/**
 * 
 * 
 * export default function Carousel(){

    const arrOfImages = [
        {id: 1, src: CI1, alt: "image1"},
        {id: 2, src: CI2, alt: "image2"},
        {id: 3, src: CI3, alt: "image3"}
    ]
    const [images, setImages] = useState(arrOfImages)
    const [slideId, setSlideId] = useState(0)
    const [filteredList, setFilteredList] = useState(images)
    let selectedImages  = [...images];

    const onLeftBtnClick = () =>{
        setSlideId(slideId-1)
        const filteredList = selectedImages.find((imageItem)=>imageItem.id===slideId-1)
        setFilteredList([filteredList])
    }

    const onRightBtnClick = () =>{
        setSlideId((slideId)=>slideId+1)
        const filteredList = selectedImages.find((imageItem)=>imageItem.id===slideId+1)
        console.log(111, filteredList, slideId)
        setFilteredList([filteredList])
    }
  console.log(2222, images, slideId)
    return(
        <div className="container"> 
          <ChevronLeft  color="green" className="w-8 h-8 m-2" onClick={onLeftBtnClick}/>
         
          {filteredList.map((imageItem, index)=>(
            <div className="imagePos">
                <img src={imageItem.src} alt={imageItem.alt}/>
                 </div>
          ))}
         
          <ChevronRight color="green" className="w-8 h-8 m-2" onClick={onRightBtnClick}/>
        </div>
    )
}
 * 
 * 
 */