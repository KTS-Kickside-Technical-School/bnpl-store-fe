
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = () => {
  return (
    <div className="border h-[280px] w-[200px] rounded-lg p-4 bg-white shadow-md ">
      <img src="" alt="" className="w-full h-32 object-cover" />
      <div className="flex justify-end items-center">
        <button className="text-blue-500 hover:text-blue-700">
          <AddShoppingCartIcon />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FavoriteBorderIcon />
        </button>
      </div>
      <h3 className="text-[12px] font-bold italic text-gray-800">Iphone 15</h3>
      <div className="flex justify-between items-center mb-1">
        <p className="text-[10px] text-[#008FE6]">RWF 111000</p>
        <p className="text-[10px] text-[#008FE6]">Stock: 134</p>
      </div>
      <p className="text-[10px] text-black mb-2 line-clamp-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
        voluptatibus, ipsam at perspiciatis perferendis voluptatum tempora alias
        excepturi debitis pariatur inventore, minima nisi optio iste! Quo
        similique vitae non nisi?
      </p>
    </div>
  );
};

export default ProductCard;
