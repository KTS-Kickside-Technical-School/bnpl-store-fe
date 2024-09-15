import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate()
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
          <FavoriteIcon className="wish-list" />
          <ShoppingCartIcon className="cart" />
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
          </Link></p>
      </div>
    </div>
  );
};

export default ProductCard;
