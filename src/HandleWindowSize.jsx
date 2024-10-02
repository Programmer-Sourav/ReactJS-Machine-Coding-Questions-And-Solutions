import useWindowSize from "./useWindowSize";

export default function HandleWindowSize(){
   
    const { windowSize } = useWindowSize({height: window.innerHeight, width: window.innerWidth})
    console.log(222, windowSize)
    return(
        <div> 
            <h1>{windowSize}</h1>
        </div>
    )
}