import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProductToCart, getCartItems } from "../../store/redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddProductToCart = async (id, quantity) => {
    try {
      if (!localStorage.getItem("token")) {
        toast.error("Please login to add products to cart");
        navigate(`/login?next=/&productId=${id}&quantity=${quantity}`);
        return;
      }

      setIsLoading(true);

      const response = await dispatch(addProductToCart({ productId: id, quantity }));
      if (response.type === addProductToCart.rejected.type) {
        toast.error(response.payload?.error?.message || "Failed to add product to cart");
        setIsLoading(false);
        return;
      }

      const cartResponse = await dispatch(getCartItems());

      toast.success(response.payload?.message || "Product added to cart");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="product-card">
      <div className="img">
        <img
          src={product.images[0]}
          alt={"Image of " + product.name}
          onClick={() => navigate(`/product/${product._id}`)}
        />
      </div>
      <div className="contents">
        <div className="buttons">
          <button className="wish-list">
            <FavoriteIcon />
          </button>
          <button className="cart">
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <ShoppingCartIcon onClick={() => handleAddProductToCart(product._id, 1)} />
            )}
          </button>
        </div>
        <h3>
          <Link to={"/product/" + product._id}>
            {product.name}
          </Link>
        </h3>
        <div className="price-stock">
          <span className="price">RWF{product.price}</span>
          <div className="stock">
            <span>Stock:</span> {product.quantity}{product.countingUnit}
          </div>
        </div>
        <p className="description">
          <Link to={"/product/" + product._id}>
            {product.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
