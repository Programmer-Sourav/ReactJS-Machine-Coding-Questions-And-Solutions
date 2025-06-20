import UserPresenter from "./UserPresenter";
import useUser from "./useUser"

export default function UserContainer(){

    const { user, setUser, handleUser} = useUser();

     console.log(44455, user)

    return(
       <UserPresenter user = {user} handleUser = {handleUser}/>
    )
}