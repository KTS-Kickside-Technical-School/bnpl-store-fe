import { useEffect } from "react";
import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";
import ProductList from "../components/products/ProductsList";

const LandingPage = () => {

  return (
    <>
      <Header />
      <ProductList/>
      <Footer />
    </>
  );
};

export default LandingPage;
