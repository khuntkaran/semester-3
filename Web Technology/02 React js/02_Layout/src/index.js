// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyLayout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Exp10Name from "./Faculty10+";
import FacultyName from "./FacultyName";
import FacultyDesign from "./FacultyDesign";
import StudentName from "./RestAPI/StudentName"
import StudentAdd from "./RestAPI/StudentAdd";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/facultyname" element={<FacultyName />}></Route>
        <Route path="/exp10+" element={<Exp10Name />}></Route>
        <Route path="/facultydesign" element={<FacultyDesign />}></Route>
        <Route path="/studentname" element={<StudentName/>}></Route>
        <Route path="/studentadd" element={<StudentAdd/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
