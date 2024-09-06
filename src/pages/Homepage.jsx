import { useEffect } from "react";
import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";
import ProductList from "../components/products/ProductsList";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Homepage - Kickshop | Your first BNPL Store in Rwanda</title>
        <meta name="description" content="Welcome to Kickshop, your first BNPL Store in Rwanda. 
      Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"/>
        <meta name="keywords" content="e-commerce, Rwanda, Made in Rwanda, Exports, Shopping, Brand New, Our collections,
      BNPL, Store"/>
        <meta name="og:description" content="Welcome to Kickshop, your first BNPL Store in Rwanda. Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default LandingPage;
