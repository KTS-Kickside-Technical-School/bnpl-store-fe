import {Route,Routes} from "react-router-dom"
import UserLogin from "./pages/LoginPage";
import LandingPage from "./pages/Homepage";
import UserSignUp from "./pages/SignUp";
import ProductView from "./pages/ProductView";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
      <Route path="/productview" element={<ProductView />}></Route>

      {/* <Route path="" element></Route> */}

      {/* <Route path="**" element={NotFound}></Route> */}
    </Routes>
  );
};

export default AppRouter;