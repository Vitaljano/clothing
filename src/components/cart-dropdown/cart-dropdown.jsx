import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cartContext";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItems.id} cartItem={cartItem} />;
        })}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
