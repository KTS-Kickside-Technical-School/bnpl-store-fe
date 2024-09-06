import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/redux/slices/productSlice";
import LoadingSpinner from "../layout/LoadingSpinner";
import ErrorComponent from "../layout/ErrorComponent";
import { toast } from "react-toastify";
import defaultImage from "../../assets/images/kickshop_logo.png";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [cartQuantity, setCartQuantity] = useState(1);

  const { product, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.length) {
      setCurrentImage(product.images[0]);
    } else {
      setCurrentImage(defaultImage);
    }
  }, [product]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return <ErrorComponent error={error} />;
  }

  if (!product) {
    return <div>No product data available</div>;
  }

  const handleQuantityChange = (sign, currentValue) => {
    if (sign === "-") {
      if (currentValue - 1 < 1) {
        toast.error("Quantity cannot be less than 1");
        return;
      }
      setCartQuantity(currentValue - 1);
    } else {
      setCartQuantity(currentValue + 1);
    }
  };

  const relatedImages = product?.images?.length > 0 ? product.images : [defaultImage];

  return (
    <div className="single-product-container">
      <div className="row">
        <div className="left">
          <div className="other-images">
            {relatedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Related product ${index}`}
                onMouseEnter={() => setCurrentImage(image)}
              />
            ))}
          </div>
          <div className="current-image">
            <img src={currentImage} alt="Main product" />
          </div>
        </div>

        <div className="details">
          <h2>{product.name}</h2>
          <p className="price">
            <span>Price:</span> RWF{product.price}
          </p>
          <p className="shipping">Free Shipping</p>
          <div className="form">
            <button onClick={() => handleQuantityChange("-", cartQuantity)}>-</button>
            <input type="number" value={cartQuantity} readOnly />
            <button onClick={() => handleQuantityChange("+", cartQuantity)}>+</button>
          </div>

          <div className="cart-wishlist">
            <button>
              <AddShoppingCartIcon fontSize="small" /> Add to Cart
            </button>
            <button>
              <FavoriteBorderIcon fontSize="small" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="title">
         Product Description
        </div>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
