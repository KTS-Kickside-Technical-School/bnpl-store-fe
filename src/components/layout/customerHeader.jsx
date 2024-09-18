import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/kickshop_logo.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userViewProfile } from "../../store/redux/slices/userSlice";
import CircularProgress from '@mui/material/CircularProgress'; // Import MUI CircularProgress for loading spinner

const Header = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await dispatch(userViewProfile());
        if (response?.payload?.data?.userProfile) {
          setIsLoggedIn(true);
          setProfile(response.payload.data.userProfile);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Failed to fetch user profile: ", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false); 
      }
    };
    getUserProfile();
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
          {loading ? (
            <div className="loading-spinner">
              <CircularProgress size={24} />
            </div>
          ) : isLoggedIn ? (
            <Link to="/profile" className="profile-button">
              <AccountCircleIcon fontSize="small" className="icon" />
              <p>{profile.email.split('@')[0]}</p>
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
              <span className="absolute top-[-1px] right-[10px] bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
              <b className="cart-amount">0.0 RWF</b>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
