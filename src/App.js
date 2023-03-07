import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import Products from "./Products";
import Verification from "./Verification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="verification" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
