import { createContext, useState } from "react";

export const ToggleContext = createContext({
  isCardOpen: false,
  setCardOpen: () => null,
});

export const ToggleProvider = ({ children }) => {
  const [isCardOpen, setCardOpen] = useState(false);
  const value = { isCardOpen, setCardOpen };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
