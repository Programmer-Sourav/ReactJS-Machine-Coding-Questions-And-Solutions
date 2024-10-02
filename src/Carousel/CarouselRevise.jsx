import { useState } from "react"


export default function CarouselRevise({data}){
   
    const [slides, setSlides]  = useState(0)

    const previousSlide = () =>{
    setSlides(slides === 0 ?  data.length-1 : setSlides(slides-1))    
    }

    const nextSlide = () =>{
        //if it is last slide, then again start from 0th slide
     setSlides(slides === data.length-1 ? 0 : setSlides(slides+1) )
    }

    return(
        <div className="carousel"> 
        <img src={LeftArrow} alt="left-arrow" onClick={previousSlide} className='arrow arrow-left' />
         {
            data.map((item,idx=>{
                <CarouselItem src={item.src}
                  alt = {item.alt}
                  isActive = {slides === idx}
                />
            }
    ))
         }
         <span className="indicators">
            {
                data.map((item, index)=>(
                    <button key={index} className={`indicator ${slides!==index ? 'indicator-inactive' : ''}`} onClick={()=>{setSlides(index)}}></button>
                ))
            }
         </span>
         <img src={RightArrow} alt="right-arrow" onClick={nextSlide} className="arrow arrow-right"/>
        </div>
    )
}