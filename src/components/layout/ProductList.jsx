import { useEffect, useState } from 'react'; // Import useState to manage local state
import ProductCard from './ProductCard';
const BACKEND_URL = "https://bnpl-store-be.onrender.com";

const ProductList = () => {
  // State to hold the products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/v1/product/view-all-products`);
        setProducts(response); // Assuming the data is in response.data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array means this effect runs once on mount
console.log(products)
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-60 2xl:grid-cols-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
