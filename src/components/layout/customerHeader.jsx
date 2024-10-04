import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/kickshop_logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userViewProfile } from "../../store/redux/slices/userSlice";
import { getCartItems } from "../../store/redux/slices/cartSlice";
import CircularProgress from '@mui/material/CircularProgress';
import LogoutIcon from "@mui/icons-material/Logout"
import { userLogout } from "../../store/redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, totalQuantity, totalPrice, status, error } = useSelector((state) => state.carts);
  const { profile } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector(state => state.auth)
  const loadingCart = status === "loading";
  const loadingProfile = status === "loading";
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  useEffect(() => {
    dispatch(userViewProfile());
    dispatch(getCartItems());
  }, [dispatch]);

  const handleDropDownToggle = async () => {
    if (isProfileDropDown === false) {
      setIsProfileDropDown(true);
    }
    else {
      setIsProfileDropDown(false);
    }
    return
  }

  const handleLogout = async () => {
    const response = await dispatch(userLogout())
    localStorage.clear();
    navigate("/login")
  }

  return (
    <>
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
              <>
                <button className="profile-button"
                  onClick={() => handleDropDownToggle()}>
                  <AccountCircleIcon fontSize="small" className="icon" />
                  <p>{profile?.email.split('@')[0]}</p>

                </button>
                {isProfileDropDown && (<div className="profile-dropdown">
                  <ul>
                    <li>
                      <Link to="/profile">
                        <FavoriteIcon className="icon" />
                        <span>Wishlist</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile">
                        <AccountCircleIcon />
                        <span>My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLogout()}
                        className="signout">
                        <LogoutIcon className="icon" />
                        <span>Signout</span>
                      </button>
                    </li>
                  </ul>
                </div>)}

              </>
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
                <span className="">
                  0
                </span>
              </div>
            </Link>
            <Link to="/shopping-cart" className="cart-button wish-cart">
              <div className="container">
                <ShoppingCartIcon fontSize="small" />
                <span className="">
                  {profile ? (
                    totalQuantity) : 0}
                </span>
                <b className="cart-amount">
                  {profile
                    ? (totalPrice ? totalPrice.toFixed(2) : '0.00')
                    : '0.00'}
                  RWF
                </b>

              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
