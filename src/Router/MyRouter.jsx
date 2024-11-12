// import { useEffect } from "react";
// import HomePage from "./HomePage";
// import PageOne from "./PageOne";

// {/* <Routes>
//     <Route path="/navigate" element = <ComponentToNavigate/>
//       <Route path="/details/:id" element = <Details/></Route>
// </Routes> */}


// export function MyRouterPair(path , elementComponent){
//     //path is of type string, and elementComponent is of Generic type
//     //for each path, there will be a component
//     //key value pairs (Hashmap), Key = path, value = Component
//     //const hash = window.location.hash.substring(1) || 'home';
//     let routerMap = new Map();
//     routerMap.set(path, elementComponent);
//     //get the path (listen for hash changes) and render the component
//     console.log(333, routerMap.get("home"), routerMap.get("pageone"))
// }

// export default function MyRouter(/*path*/){

//     MyRouterPair("home", <HomePage/>)
//     MyRouterPair("pageone", <PageOne/>)

//     const getHashFromUrl = () =>{
//         const hash = window.location.pathname.substring(1) || 'home';
//         console.log(123, hash, window.location);
//           //get the path (listen for hash changes) from hashmap and render the component
          
//     }

//     useEffect(()=>{getHashFromUrl()})
// }

import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import PageOne from "./PageOne";
import UserProfile from "./UserProfile";


// Utility to match dynamic routes
function matchRoute(route, path) {
    const routeParts = route.split('/');
    const pathParts = path.split('/');

    if (routeParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < routeParts.length; i++) 
        if (routeParts[i].startsWith(':')) {
            const paramName = routeParts[i].substring(1); // Get the param name, e.g. 'id' from ':id'
            params[paramName] = pathParts[i]; // Assign the value from the path to the param
        } else if (routeParts[i] !== pathParts[i]) {
            return null;
        }
    return params;
}

export function MyRouterPair(routerMap, path, elementComponent) {
     // Add path-component pair to the map
     //path is of type string, and elementComponent is of Generic type
    //for each path, there will be a component
   //key value pairs (Hashmap), Key = path, value = Component
    routerMap.set(path, elementComponent);
}

export default function MyRouter() {
    const [currentComponent, setCurrentComponent] = useState(null);
    const routerMap = new Map();

    // Initialize router map
    MyRouterPair(routerMap, "home", ()=><HomePage />);
    MyRouterPair(routerMap, "pageone", ()=><PageOne />);
    MyRouterPair(routerMap, "user/:id", (params) => <UserProfile userId={params.id} />); //if the path contais ":" or
    //means dynamic, we can supply a props to the component <PageOne id={id}/>
    //if ":" is there, append the id to the route

    const getComponentForPath = () => {
        const path = window.location.pathname.substring(1) || 'home';
        
        for (const[route, elementComponent] of routerMap.entries()){
            const params = matchRoute( route, path)
            if(params){
                return elementComponent(params)
            }
        }
        return /*routerMap.get(path) ||*/ <div>404 - Page Not Found</div>;
    };

    const handleNavigation = () => {
        // Update the current component when URL path changes
        setCurrentComponent(getComponentForPath());
    };

    useEffect(() => {
        // Set the initial component based on current URL
        handleNavigation();

        // Listen for popstate event (back/forward navigation)
        window.addEventListener('popstate', handleNavigation);

        return () => {
            // Cleanup event listener on unmount
            window.removeEventListener('popstate', handleNavigation);
        };
    }, []);

    return (
        <div>
            {/* Render the component based on the current path */}
            {currentComponent}
        </div>
    );
}

