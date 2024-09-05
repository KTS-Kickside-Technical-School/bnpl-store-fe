import { useState } from "react";
import Header from "./customerHeader"
import Footer from "./Footer"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Coat men's winter trend Korean version student sports cotton jacket men's cotton jacket",
      price: 35000,
    },
    {
      id: 2,
      name: "Coat men's winter trend Korean version student sports cotton jacket men's cotton jacket",
      price: 35000,
    },
    {
      id: 3,
      name: "Coat men's winter trend Korean version",
      price: 35000,
    },
    {
      id: 4,
      name: "Coat men's winter trend Korean version student sports cotton jacket men's cotton jacket",
      price: 35000,
    },
    {
      id: 5,
      name: "Coat men's winter trend Korean version student sports cotton jacket men's cotton jacket",
      price: 35000,
    },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-between p-6">
        <div className="w-full lg:w-2/3 relative">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="text-2xl text-[#008FE6] font-bold">Shopping Cart</h2>
            <div className="flex mr-7 space-x-5">
              <button className="bg-[#268F63] text-white px-3 py-1 rounded">
                Checkout
              </button>
              <button className="bg-[#F92626] text-white px-3 py-1 rounded">
                Clear cart
              </button>
            </div>
          </div>

          <div className="border border-black rounded-lg p-3 mr-5 ml-5">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 mb-2 border-b"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt={item.name}
                  className="w-20 h-20 rounded-md"
                />
                <div className="flex flex-col ml-4 flex-grow">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-blue-500">Price: {item.price} RWF</span>
                  <div className="flex items-center border mt-2">
                    <button className="bg-[#C5D7E2] px-3  rounded-l">-</button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="w-10 text-center border-t border-b "
                    />
                    <button className="bg-[#C5D7E2] px-3  rounded-r">+</button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 bg-red-500 text-white px-0.5 py-0 rounded"
                    >
                      <DeleteForeverIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ml-5 ">
          <h2 className="text-2xl text-[#008FE6] font-bold mb-4">
            Checkout details
          </h2>
          <div className="border border-black rounded-lg p-4 mr-9">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name.split(" ", 4).join(" ")} :</span>
                <span>{item.price} RWF</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4 border-t border-b  border-black">
              <span>Total amount:</span>
              <span>{cart.reduce((acc, item) => acc + item.price, 0)} RWF</span>
            </div>
            <div className="mt-4 ">
              <button className="bg-yellow-500 text-black text-xl w-full py-2 rounded">
                Pay With MTN MoMo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShoppingCart;
