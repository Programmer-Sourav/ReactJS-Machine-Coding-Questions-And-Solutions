import BuggyComponent from "./BuggyComponent";
import ErrorBoundary from "./ErrorBoundary";


export default function ErrorBoundaryApp(){


    return(
        <div>
            <ErrorBoundary>
                <BuggyComponent/>
            </ErrorBoundary>
        </div>
    )
}