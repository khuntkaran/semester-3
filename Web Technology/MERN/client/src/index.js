// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyLayout from "./Layout";
import Home from "./Home";
import About from "./About";
import History from "./History";
import Logout from "./Logout";
import Payment from "./Payment";
import Login from "./Login";
import Register from "./Register";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<MyLayout />}>
        <Route path="/login" element={<Home />}></Route>
        <Route path="/login/about" element={<About />}></Route>
        <Route path="/login/history" element={<History />}></Route>
        <Route path="/login/payment" element={<Payment />}></Route>
        <Route path="/login/logout" element={<Logout />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
