import BuggyComponent from "./BuggyComponent";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorApp(){


    return(
        <div>
        <h1> My Application!</h1>
        <ErrorBoundary>
            <BuggyComponent/>
        </ErrorBoundary>
        </div>
    )
}