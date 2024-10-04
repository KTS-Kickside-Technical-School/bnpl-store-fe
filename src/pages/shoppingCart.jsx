import { useEffect, useState } from "react";
import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CircularProgress from "@mui/material/CircularProgress"; // Import spinner
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import ErrorComponent from "../components/layout/ErrorComponent";
import {
  addProductToCart,
  getCartItems,
  removeProductFromCart,
} from "../store/redux/slices/cartSlice";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const removeItem = async (id) => {
    try {
      setIsLoading(true);
      const response = await dispatch(
        removeProductFromCart({ productId: id })
      ).unwrap();

      if (response.status !== 200) {
        toast.error(response.message || "Error removing product from cart");
        setIsLoading(false);
        return;
      }
      const cartResponse = await dispatch(getCartItems()).unwrap();
      toast.success(response.message || "Product removed from cart successfully");
    } catch (error) {
      toast.error(error?.message || "Failed to remove product from cart");
    } finally {
      setIsLoading(false);
    }
  };

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const { cartItems, totalQuantity, totalPrice, status, error } = useSelector(
    (state) => state.carts
  );
  const { profile, isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    navigate("/login?next=/shopping-cart");
    return;
  }

  const handleIncrementQuantity = async (itemId, quantity) => {
    await handleAddProductToCart(itemId, quantity + 1);
  };
  const handleDecrementQuantity = async (itemId, quantity) => {
    if (quantity <= 1) {
      toast.error("Can't be below the minimum quantity");
      return;
    }
    await handleAddProductToCart(itemId, quantity - 1);
  };

  const handleAddProductToCart = async (itemId, quantity) => {
    try {
      setIsLoading(true);
      const response = await dispatch(
        addProductToCart({ productId: itemId, quantity: quantity })
      ).unwrap();
      if (response.status !== 200) {
        toast.error(response.message || "Failed to update product quantity in cart");
        setIsLoading(false);
        return;
      }
      const cartResponse = await dispatch(getCartItems()).unwrap();
      toast.success(response.message || "Cart quantity updated successfully");
    } catch (error) {
      toast.error(error?.message || "Failed to add product to cart");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Shopping cart | Kickside Shop - Your first BNPL Store in Rwanda</title>
        <meta
          name="description"
          content="Welcome to Kickshop login Page, your first BNPL Store in Rwanda. 
        Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"
        />
        <meta
          name="keywords"
          content="e-commerce, Rwanda, Made in Rwanda, Exports, Shopping, Brand New, Our collections, BNPL, Store"
        />
        <meta
          name="og:description"
          content="Welcome to Kickshop, your first BNPL Store in Rwanda. Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"
        />
        {currentUrl && <meta property="og:url" content={currentUrl} />}
      </Helmet>

      <Header />

      <div className="shopping-cart">
        {status === "loading" ? (
          <LoadingSpinner />
        ) : cartItems.length < 1 ? (
          <ErrorComponent error={"Your cart is empty"} />
        ) : (
          <>
            <div className="title">
              <h2>Shopping Cart</h2>
              <div className="buttons">
                <button className="clear-cart-button">
                  <DeleteForeverIcon fontSize="12px" className="icon" />
                  Clear cart
                </button>
              </div>
            </div>

            <div className="row">
              <div className="cart-products">
                <div className="products-list">
                  {cartItems.map((item, index) => (
                    <div key={index} className="product">
                      <img
                        src={item.productId.images[0]}
                        alt={`Image of ${item.productId.name}`}
                      />
                      <div className="details">
                        <span className="name">
                          <Link to={"/product/" + item.productId._id}>
                            {item.productId.name}
                          </Link>
                        </span>
                        <span className="price">RWF{item.productId.price}</span>
                        <div className="quantity-controls">
                          <div className="controllers">
                            <button
                              className="decrement controls"
                              onClick={() =>
                                handleDecrementQuantity(item.productId._id, item.quantity)
                              }
                            >
                              -
                            </button>
                            <input value={item.quantity} readOnly />
                            <button
                              className="increment controls"
                              onClick={() =>
                                handleIncrementQuantity(item.productId._id, item.quantity)
                              }
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.productId._id)}
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
                <h2>Cart checkout</h2>
                <div className="list">
                  <div className="one">
                    {cartItems.map((item, index) => (
                      <div key={index} className="product">
                        <span className="name">
                          {item.productId.name.split(" ", 4).join(" ")} :
                        </span>
                        <span className="price">RWF{item.productId.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="product">
                    <span className="name">
                      <b>Total amount:</b>
                    </span>
                    <span className="price">
                      <b>
                        RWF{cartItems.reduce((acc, item) => acc + item.productId.price, 0)}
                      </b>
                    </span>
                  </div>
                  <div className="pay">
                    <form action="">
                      <p>
                        <input type="checkbox" />
                        <span>
                          I accept the <a href="">terms and conditions</a>
                        </span>
                      </p>
                      <button className="pay">Pay</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ad"></div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ShoppingCart;
