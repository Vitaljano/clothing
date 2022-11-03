import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ToggleContext } from "../../contexts/toggleContext";
import "./card-icon.styles.scss";

const CardIcon = () => {
  const { isCardOpen, setCardOpen } = useContext(ToggleContext);
  const toggle = () => {
    setCardOpen(!isCardOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CardIcon;
