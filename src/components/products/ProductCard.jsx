import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="contents">
        <div className="buttons">
          <FavoriteIcon className="wish-list" />
          <ShoppingCartIcon className="cart" />
        </div>
        <h3>{product.name}</h3>
        <div className="price-stock">
          <span className="price">RWF{product.price}</span>
          <div className="stock">
            <span>Stock:</span> {product.quantity}{product.countingUnit}
          </div>
        </div>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
