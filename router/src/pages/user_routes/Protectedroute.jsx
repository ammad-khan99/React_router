import { Navigate, Outlet } from "react-router-dom";

function Protectedroute() {
  let authenticated = JSON.parse(localStorage.getItem("isLogged"));
  console.log("before", typeof authenticated, authenticated);

  return authenticated === true ? <Outlet /> : <Navigate to="/" />;
}

export default Protectedroute;
