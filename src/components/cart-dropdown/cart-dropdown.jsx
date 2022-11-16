import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cartContext";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>

      <Button onClick={goToCheckoutPage}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
