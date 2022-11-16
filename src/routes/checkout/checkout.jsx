import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../contexts/cartContext";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
