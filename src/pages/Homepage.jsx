import { useEffect, useState } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
import ProductList from "../components/layout/ProductList";
import TopCategoryListing from "../components/layout/Category";
import { axiosInstance, getErrorMessage } from "../utils/axios/axiosinstance.js";
const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("api/v1/products/view-all-products"); 
        setProducts(response.data); 
        setLoading(false); 
      } catch (err) {
        setError(getErrorMessage(err));
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []); 

  return (
    <div>
      <Header />
      <div className="bg-[#C5D7E2]">
        <div className="container ml-2 mr-2 px-4 py-1">
          <TopCategoryListing />
          <h2 className="text-xl font-semibold mb-1">Hot deals</h2>
          {loading ? (
            <p>Loading products...</p> 
          ) : error ? (
            <p>Error: {error}</p> 
          ) : (
            <ProductList products={products} /> 
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
