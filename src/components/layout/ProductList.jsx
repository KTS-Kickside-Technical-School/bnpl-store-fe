/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className=" grid grid-cols-2 gap-3  md:grid-cols-3   lg:grid-cols-5 lg:gap-x-11 2xl:grid-cols-7   ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
  );
};

export default ProductList;
