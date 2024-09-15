import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../../store/redux/slices/productSlice";
import LoadingSpinner from "../layout/LoadingSpinner";
import ErrorComponent from "../layout/ErrorComponent";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return <ErrorComponent error={error} />;
  }

  if (!products || products.length === 0) {
    return <ErrorComponent error="No products available" />;
  }

  return (
    <div className="products-list-container">
      <h1>Recent products</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
