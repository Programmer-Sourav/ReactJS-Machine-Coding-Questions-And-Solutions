import { useEffect, useState } from "react"
import { fetchUsers } from "./SortService"
import WebWorker from "./WebWorker";


const WorkerExample = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([])
    const [isSorting, setIsSorting] = useState(false);
    const webWorker = new WebWorker(worker);

    useEffect(()=>{
        fetchUsers().then(users=>{ setUsers(users); setIsLoading(false)});
        return() =>{
            webWorker.terminate();
        }
    }, [])

    const sortAscending = () =>{
        //const sortedUsers = users.sort((a, b)=>a.commentCount - b.commentCount);
        webWorker.postMessage({users, type: "ASC"})
        setIsSorting(true);
        webWorker.addEventListener('message', (event)=>{
            const sortedList = event.data;
            setUsers(sortedList);
            setIsSorting(false);
        })
        return;
    }

    const sortDescnding = () =>{
        webWorker.postMessage({users, type: "DESC"})
        setIsSorting(true);
        webWorker.addEventListener('message', (event)=>{
            const sortedList = event.data;
            setUsers(sortedList);
            setIsSorting(false);
        })
        return;
    }

    return(
        <div>
            {
                users.map((user, index)=>{
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                     </div>
                })
            }
        </div>
    )
    }