import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";
import "./cart-icon.styles.scss";

const CardIcon = () => {
  const { isCardOpen, setCardOpen, cartCount } = useContext(CartContext);
  const toggle = () => {
    setCardOpen(!isCardOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
