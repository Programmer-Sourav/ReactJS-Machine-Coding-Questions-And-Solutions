import useCounter from "./useCounter";

export default function CounterComponent(){

    const {counter, increment, decrement, reset} = useCounter(10);

    return(
        <div> 
            <h1> Counter : {counter} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}