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
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

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
    <>
      {product && (
        <Helmet>
          <title>{`${product.name}`} - Kickshop | Your first BNPL Store in Rwanda</title>
          <meta
            name="description"
            content={
              `${product.description}`
                ? `${product.description}` + " E-Commerce, Kickshop, Rwanda Delivery"
                : "E-Commerce, Kickshop, Rwanda Delivery"
            }
          />
          <meta
            name="keywords"
            content="e-commerce, Rwanda, Made in Rwanda, Exports, Shopping, Brand New, Our collections, BNPL, Store"
          />
          <meta
            property="og:description"
            content="Welcome to Kickshop, your first BNPL Store in Rwanda. Browse our new brand collection from different countries like China, Korea, Turkey and even made in Rwanda"
          />
          {currentUrl && <meta property="og:url" content={currentUrl} />}
        </Helmet>
      )}
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
                <AddShoppingCartIcon fontSize="small" className="cart" /> Add to Cart
              </button>
              <button>
                <FavoriteBorderIcon fontSize="small" className="wishlist" /> Add to Wishlist
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
    </>
  );
};

export default ProductPage;
