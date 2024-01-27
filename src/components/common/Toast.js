/*
  File Name: components/Toast.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Toast and Toast Container Components
*/
import React, { useEffect } from "react";

import { useToast } from "../../hooks/useToast";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`bg-white text-green-500 py-2 px-4 rounded-md shadow-md mb-4`}
    >
      {message}
    </div>
  );
};

const ToastContainer = () => {
  const { toasts, closeToast } = useToast();

  return (
    <div id="toast-container" className="fixed top-[100px] right-[10px]">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => {
            if (toast.onClose) toast.onClose();
            closeToast(toast.id);
          }}
        />
      ))}
    </div>
  );
};

export { ToastContainer, Toast };
