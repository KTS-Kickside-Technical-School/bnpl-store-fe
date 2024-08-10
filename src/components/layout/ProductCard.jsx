/* eslint-disable react/prop-types */
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div className="border h-[270px] w-[200px] rounded-lg p-2 bg-white shadow-md ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="flex justify-end items-center">
        <button className="text-blue-500 hover:text-blue-700">
          <AddShoppingCartIcon />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FavoriteBorderIcon />
        </button>
      </div>
      <Link to="/productview">
        <h3 className="text-[12px] font-bold italic text-gray-800">
          {product.name}
        </h3>
        </Link>
        <div className="flex justify-between items-center mb-1">
          <p className="text-[10px] text-[#008FE6]">RWF {product.price}</p>
          <p className="text-[10px] text-[#008FE6]">Stock: {product.stock}</p>
        </div>
        <p className="text-[10px] text-black mb-2 line-clamp-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          voluptatibus, ipsam at perspiciatis perferendis voluptatum tempora
          alias excepturi debitis pariatur inventore, minima nisi optio iste!
          Quo similique vitae non nisi?
        </p>
    </div>
  );
};

export default ProductCard;
