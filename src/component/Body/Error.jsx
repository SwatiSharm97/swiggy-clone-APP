import { useRouteError } from "react-router-dom";
const Error =()=>{
    const error = useRouteError();
    return(
        <div>
            <h1>oopss!!!!! </h1>
            <p>something went wrong</p>
            <p>{error.status}</p>
        </div>
    )
}
export default Error;