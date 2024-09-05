import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="contents">
        <div className="buttons">
          <FavoriteIcon className="wish-list" />
          <ShoppingCartIcon className="cart" />
        </div>
        <h3>{product.name}</h3>
        <div className="price-stock">
          <span className="price">{product.price}</span>
          <div className="stock">
            <span>Stock:</span> {product.stock} Units
          </div>
        </div>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
