// useUser.js
import { useEffect, useState } from "react";
import { UserService } from "./UserService";

export default function useUser(userService) {
  const [user, setUser] = useState(userService.getUser());

  useEffect(() => {
    const unsubscribe = userService.subscribe(setUser);
    return unsubscribe;
  }, [userService]);

  const handleUser = (someValue) => {
    userService.updateSaySomething(someValue);
  };

  return { user, handleUser };
}
