import {Route,Routes} from "react-router-dom"
import UserLogin from "./pages/LoginPage";
import LandingPage from "./pages/Homepage";
import UserSignUp from "./pages/SignUp";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>

      {/* <Route path="" element></Route> */}

      {/* <Route path="**" element={NotFound}></Route> */}
    </Routes>
  );
};

export default AppRouter;