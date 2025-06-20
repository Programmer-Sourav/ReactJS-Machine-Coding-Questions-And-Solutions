import UserPresenter from "./UserPresenter";
import useUser from "./useUser"

export default function UserContainer(){

    const { user, setUser} = useUser();

     console.log(44455, user)

    return(
       <UserPresenter user = {user}/>
    )
}