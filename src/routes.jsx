/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/LoginPage";
import LandingPage from "./pages/Homepage";
import UserSignUp from "./pages/SignUp";
import ProductView from "./pages/ProductView";
import ShoppingCart from "./components/layout/shoppingCart";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
      <Route path="/product/:id" element={<ProductView />}></Route>
      <Route path="/viewCart" element={<ShoppingCart />}></Route>

      {/* <Route path="" element></Route> */}

      {/* <Route path="**" element={NotFound}></Route> */}
    </Routes>
  );
}

export default AppRouter;
