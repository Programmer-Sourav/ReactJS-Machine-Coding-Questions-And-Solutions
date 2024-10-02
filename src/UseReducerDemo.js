import { useReducer } from "react"

const initialState = {
    count: 0
}

function counterReducer (state, action) {
    switch(action.type){
        case "INCREMENT": 
        return {...state, count: state.count + action.payload}
        case "DECREMENT":
        return {...state, count : state.count - action.payload} 
        default: 
        throw new Error();   
    }
}

export default function Counter(){
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return(
        <div> 
            <p>Count: {state.count}</p>
            <button onClick={()=>{dispatch({type: "INCREMENT", payload: 3})}}>Increment</button>
            <button onClick={()=>{dispatch({type: "DECREMENT", payload: 1})}}>Decrement</button>
        </div>
    )
}