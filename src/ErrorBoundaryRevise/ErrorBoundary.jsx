import { Component } from "react";

class ErroBoundary extends Component{
     constructor(props){
        super(props)
        this.state = {hasError: false, error: null, errorInfo: null}
     }

     static getDerivedStateFromError(error){
       // Update state so the next render shows the fallback UI
       console.log("2222", this.state.hasError)
        return {hasError: true}
     }

     componentDidCatch(error, errorInfo){
        console.log(`Error caught`, error, errorInfo)
        this.setState({error, errorInfo})
     }

     render(){
      console.log("11111", this.state.hasError)
        if(this.state.hasError){
            return (
               <div> 
                <h1>Some Error Occurred!</h1>
                <details  style={{whiteSpace: "pre-wrap"}}>
                {this.state.hasError && this.state.error.toString()}
                console.log("11111", this.state.hasError)
                <br/>
                {this.state.errorInfo?.componentStack}
                </details>
               </div>
            )
        }
        return this.props.children;
     }
}

export default ErroBoundary;