// UserContext.js
import { createContext, useContext } from "react";
import { UserService } from "./UserService";

const defaultUser = {
  name: "Sourav Nath",
  age: "36",
  profession: "Software Engineer",
  saySomeThing: ""
};

const userService = new UserService(defaultUser);
const UserContext = createContext(userService);

export const useUserService = () => useContext(UserContext);
export { UserContext, userService };
