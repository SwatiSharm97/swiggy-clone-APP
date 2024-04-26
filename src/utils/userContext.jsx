import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  DefaultTheme: "Light",
});

export default UserContext;
