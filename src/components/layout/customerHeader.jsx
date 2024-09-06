import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/kickshop_logo.png"
const Header = () => {
  return (
    <header className="customerHeader">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="right">
        <div className="search-form">
          <SearchIcon fontSize="small" className="searchIcon" />
          <input
            type="text"
            placeholder="Search For Products"
            className="search-field"
          />
        </div>
        <div className="account">
          <Link to="/login" className="login-button">
            <AccountCircleIcon fontSize="small" className="icon" />
            <p>Login</p>
          </Link>

        </div>
        <div className="buttons">
          <Link to="/" className="wishlist-button wish-cart">
            <div className="container">
              <FavoriteIcon fontSize="small" className="icon" />
              <span className="absolute top-[-1px] right-[10px] bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
          </Link>
          <Link to="/viewCart" className="cart-button wish-cart">
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
