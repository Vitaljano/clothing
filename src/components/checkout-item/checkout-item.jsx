import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, quantity, price } = cartItem;
  const clearItemHandle = () => clearItemFromCart(cartItem);
  const incrementHandle = () => addItemToCart(cartItem);
  const decrementHandle = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandle}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={incrementHandle}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandle}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
