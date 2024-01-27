/*
  File Name: context/toasts.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Toast Provider: context for toasts
*/

/*
  File Name: context/ToastContext.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Toast Context
*/
import React, { createContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "success", onClose) => {
    const newToast = {
      id: Date.now(),
      message,
      type,
      onClose,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const closeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
