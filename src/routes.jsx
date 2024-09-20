/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/LoginPage";
import LandingPage from "./pages/Homepage";
import UserSignUp from "./pages/SignUp";
import ProductView from "./pages/ProductView";
import ShoppingCart from "./pages/shoppingCart";
import CustomersNotFound from "./pages/CustomersNotFound";
import VerifyAccount from "./pages/VerifyAccount";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<UserLogin />}></Route>
      <Route path="/signup" element={<UserSignUp />}></Route>
      <Route path="/verify-account" element={<VerifyAccount/>} />
      <Route path="/product/:id" element={<ProductView />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      <Route path="*" element={<CustomersNotFound />} />
    </Routes>
  );
}

export default AppRouter;
