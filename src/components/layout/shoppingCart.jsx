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
      <div className="shopping-cart">
        <div className="title">
          <h2 className="">Shopping Cart</h2>
          <div className="buttons">
            <button className="checkout-button">
              Checkout
            </button>
            <button className="clear-cart-button">
              <DeleteForeverIcon fontSize="12px"
                className="icon" />
              Clear cart
            </button>
          </div>
        </div>
        <div className="row">
          <div className="cart-products">

            <div className="products-list">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="product"
                >
                  <img
                    src="https://res-console.cloudinary.com/dpu6ljn5c/media_explorer_thumbnails/a89d18cd20cf9f16bbceaf71092d7946/detailed"
                    alt={item.name}
                  />
                  <div className="details">
                    <span className="name">{item.name}</span>
                    <span className="price"> <span>Price:</span> RWF{item.price}</span>
                    <div className="quantity-controls">
                      <div className="controllers">
                        <button className="decrement controls">-</button>
                        <input
                          value="1"
                          readOnly
                          className="w-10 text-center border-t border-b "
                        />
                        <button className="increment controls">+</button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove"
                      >
                        <DeleteForeverIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="checkout-details">
            <h2>
              Cart checkout
            </h2>
            <div className="list">
              <div className="one">
                {cart.map((item, index) => (
                  <div key={index} className="product">
                    <span className="name">{item.name.split(" ", 4).join(" ")} :</span>
                    <span className="price">RWF{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="product">
                <span className="name">Total amount:</span>
                <span className="price">RWF{cart.reduce((acc, item) => acc + item.price, 0)}</span>
              </div>
              <div className="pay">
                <form action="">
                  <p>
                    <input type="checkbox" name="" id="" />
                    <span>
                      I accept to the <a href="">terms and conditions</a>
                    </span>
                  </p>
                  <button className="pay">
                    Pay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShoppingCart;
