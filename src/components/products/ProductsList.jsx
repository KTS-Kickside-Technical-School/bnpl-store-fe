import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/redux/slices/productSlice";
import LoadingSpinner from "../layout/LoadingSpinner";
import ErrorComponent from "../layout/ErrorComponent";  // Import ErrorComponent

const ProductList = () => {
  const dispatch = useDispatch();  // Add parentheses to call useDispatch
  const { products, status, error } = useSelector((state) => state.products);
  console.log("Products");
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return <ErrorComponent error={error} />;  // Use ErrorComponent
  }

  return (
    <div className="products-list-container">
      <h1>
        Hot deals
      </h1>
      <div className="products-list">

        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ErrorComponent error={"No products available"} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
