import { useEffect, useRef } from "react"

// export default function useTimeoutRevise(callback, delay){

//     const callbackRef = useRef(null)

//     useEffect(()=>{

//         if (delay === null || delay === undefined) return;  

//        callbackRef.current = callback;

//        const timerId =  setTimeout(()=>{callbackRef.current()}, delay)

//        return ()=>clearTimeout(timerId);

//     }, [callback, delay ])
// }


export default function useTimeoutRevise(callback, delay){

  const callbackRef = useRef(null);

    useEffect(()=>{
       if(delay === null || delay === undefined) return;

       callbackRef.current = callback;

       const timerId = setTimeout(()=>{callbackRef.current()}, delay)

       return () => clearTimeout(timerId)

    }, [ delay])
}