import { useState } from "react"
import "./Carousel.css"
import CarouselItem from "./CarouselItem";
import LeftArrow from "./assets/left-arrow.svg"
import RightArrow from "./assets/right-arrow.svg"


export default function Carousel({data}){
   console.log(111, data, data.length)
    //carousel is simply map over image url and display in the same frame/position
    //left button and right button
    //indicators will be under each image

    const [slide, setSlide] = useState(0)

    
    const nextSlide = ()=> setSlide(slide === data.length - 1 ? 0 : slide+1);
    const prevSlide = ()=> setSlide(slide === 0 ? data.length - 1 : slide - 1 )

    
    return(
        <div className="carousel"> 
        <img src={LeftArrow} alt="left-arrow" onClick={prevSlide} className='arrow arrow-left' />
         {
            data.map((item, idx)=>(
                <CarouselItem
                key={item.id} // Assuming each item has a unique 'id'
                src={item.src}
                alt={item.alt}
                isActive={slide === idx}
              />
            ))
         }
         <span className="indicators">
            {
                data.map((item, index)=>(
                    <button key={index} className={`indicator ${slide!==index ? 'indicator-inactive' : ''}`} onClick={()=>{setSlide(index)}}></button>
                ))
            }
         </span>
         <img src={RightArrow} alt="right-arrow" onClick={nextSlide} className="arrow arrow-right"/>
        </div>
    )

}