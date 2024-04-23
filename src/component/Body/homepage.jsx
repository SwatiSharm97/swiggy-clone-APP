import { useContext } from "react";
import UserContext from "../../utils/userContext";
const HomePage = () => {
  const { loggedInUser } = useContext(UserContext);
//   console.log(Username)
  return (
    <>
      <div>hello i am in home page</div>
      <div>USERCONTEXT NAME :{loggedInUser}</div>
    </>
  );
};
export default HomePage;
