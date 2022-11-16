import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCardOpen: false,
  setCardOpen: () => null,
  cartItems: [],
  addCartItem: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => {
      return item.quantity + total;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearItemFromCart = (itemToRemove) => {
    setCartItems(clearCartItem(cartItems, itemToRemove));
  };

  const value = {
    isCardOpen,
    setCardOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
