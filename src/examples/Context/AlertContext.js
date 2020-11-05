import React, { createContext, useState, useContext } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <AlertContext.Provider
      value={{
        isVisible: visible,
        toggle: () => setVisible((prev) => !prev),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export default AlertProvider;
