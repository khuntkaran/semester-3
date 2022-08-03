import { React } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultiesName from "./FacultiesName";
import FacultyDetail from "./FacultyDetail";
import Home from "./Home";

import Layout from "./Layout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/facultiesname" element={<FacultiesName />}></Route>
        <Route path="/faculty/:id" element={<FacultyDetail />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
