/*
  File Name: App.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Main App Component with routes
*/

import "./styles/tailwind.css";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import routes from "./routes";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {routes.map((route, index) => (
            <Route
              key={`route-${index}`}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
