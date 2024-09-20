import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/kickshop_logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userViewProfile } from "../../store/redux/slices/userSlice";
import { getCartItems } from "../../store/redux/slices/cartSlice"; 
import CircularProgress from '@mui/material/CircularProgress';

const Header = () => {
  const dispatch = useDispatch();

  const { cartItems, totalQuantity, totalPrice, status, error } = useSelector((state) => state.carts);
  const { profile, isLoggedIn } = useSelector((state) => state.user);
  const loadingCart = status === "loading"; 
  const loadingProfile = status === "loading";

  useEffect(() => {
    dispatch(userViewProfile());
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <header className="customerHeader">
      <div className="logo">
        <Link to="/" aria-label="Homepage">
          <img src={logo} alt="KickShop Logo" />
        </Link>
      </div>
      <div className="right">
        <div className="search-form">
          <SearchIcon fontSize="small" className="searchIcon" />
          <input
            type="text"
            placeholder="Search For Products"
            className="search-field"
            aria-label="Search Products"
          />
        </div>
        <div className="account">
          {loadingProfile || loadingCart ? (
            <div className="loading-spinner">
              <CircularProgress size={24} />
            </div>
          ) : profile ? (
            <Link to="/profile" className="profile-button">
              <AccountCircleIcon fontSize="small" className="icon" />
              <p>{profile?.email.split('@')[0]}</p>
            </Link>
          ) : (
            <Link to="/login" className="login-button">
              <AccountCircleIcon fontSize="small" className="icon" />
              <p>Login</p>
            </Link>
          )}
        </div>
        <div className="buttons">
          <Link to="/wishlist" className="wishlist-button wish-cart">
            <div className="container">
              <FavoriteIcon fontSize="small" className="icon" />
              <span className="absolute top-[-1px] right-[10px] bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
          </Link>
          <Link to="/shopping-cart" className="cart-button wish-cart">
            <div className="container">
              <ShoppingCartIcon fontSize="small" />
              {/* Dynamically display total quantity and total price */}
              <span className="absolute top-[-1px] right-[10px] bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalQuantity || 0}
              </span>
              <b className="cart-amount">{totalPrice ? totalPrice.toFixed(2) : '0.00'} RWF</b>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
