/*
  File Name: layouts/RootLayout.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Root Layout of the app
*/
import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "../components/common/Toast";
import { ToastProvider } from "../context/ToastContext";

export default function RootLayout() {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className="flex-grow">
          <ToastProvider>
            <div className="relative w-full h-full container mx-auto p-4">
              <ToastContainer />
              <Outlet />
            </div>
          </ToastProvider>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
