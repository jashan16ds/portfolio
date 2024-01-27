/*
  File Name: hook/useToast.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: useToast hoot for showing toasts
*/
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
