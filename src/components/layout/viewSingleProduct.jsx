import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image2.jpeg";
import image4 from "../../assets/image2.jpeg";
import mainImage from "../../assets/mainImage.jpeg"

const ProductPage = () => {
  const [currentImage, setMainImage] = useState(mainImage); // Set initial main image
  const relatedImages = [
    image1,image2,image3,image4
  ];

  return (
    <div className=" p-4 m-7  w-90  lg:w-auto items-center  bg-white shadow-md  flex flex-col md:flex-row ">
      <div className="flex flex-col   md:flex-row">
        <div className="flex  md:flex-col mr-12 gap-1 ">
          {relatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Related product ${index}`}
              className={`w-16 h-14 md:w-16 md:h-14 lg:w-16 lg:h-16 mb-2 cursor-pointer hover:opacity-75 ${
                currentImage === image ? "border-2 rounded border-blue-500" : ""
              }`}
              onMouseEnter={() => setMainImage(image)}
            />
          ))}
        </div>
        <img
          src={currentImage}
          alt="Main product"
          className={`w-full md:w-64 lg:w-96 h-64 lg:h-96 object-cover rounded-lg ${
            currentImage !== mainImage ? "border-2 border-blue-500" : ""
          }`}
        />
      </div>

      <div className="mt-4 md:mt-0 md:ml-14  flex flex-col justify-between">
        <div>
          <h2 className="text-[20px] font-bold ">
            Mini Electric Shaver Pocket Size Waterproof Razor
          </h2>
          <p className="text-gray-600 text-[17px] mb-1">
            Washable Portable 2 Head Shaving Beard Trimmer Rechargeable Men
            Shaver Machine
          </p>
          <p className="text-sm  font-bold text-blue-600">Price: RWF19,938</p>
          <p className="bg-blue-100 text-blue-500 py-1 px-2 rounded-full inline-block my-2">
            Free Shipping
          </p>
          <div className="flex items-center mb-4">
            <button className="border border-gray-300 px-3 rounded-l-lg">
              -
            </button>
            <input
              type="number"
              value="1"
              className="border-t border-b border-gray-300 w-12 text-center"
            />
            <button className="border border-gray-300 px-3  rounded-r-lg">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-52">
          <button className="bg-[#008FE6] text-[14px] text-white py-2 px-3  rounded-lg flex items-center justify-center">
            <AddShoppingCartIcon fontSize="small" className="mr-1" /> Add to
            Cart
          </button>
          <button className="bg-[#008FE6] text-[14px] text-white py-2 px-3 rounded-lg flex items-center justify-center">
            <FavoriteBorderIcon fontSize="small" className="mr-1" /> Add to
            wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
