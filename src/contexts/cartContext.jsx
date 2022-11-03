import { createContext, useState } from "react";

export const CartContext = createContext({
  isCardOpen: false,
  setCardOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setCardOpen] = useState(false);
  const value = { isCardOpen, setCardOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
