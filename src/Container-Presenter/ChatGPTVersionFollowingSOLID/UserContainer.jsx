// UserContainer.js
import useUser from "./useUser";
import UserPresenter from "./UserPresenter";
import { useUserService } from "./UserContext";

export default function UserContainer() {
  const userService = useUserService();
  const { user, handleUser } = useUser(userService);

  return (
    <UserPresenter user={user} handleUser={handleUser} />
  );
}
