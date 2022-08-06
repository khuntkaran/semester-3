import React from "react";
import ReactDom from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

//----Header part
const name = "Darshan uni.";
const css = {color:"MediumSeaGreen",backgroundColor:"Gray"};

//----Main Container
import "./style.css"
const student = [
  { name: "karan", spi: "9.9", city: "rajkot" },
  { name: "raj", spi: "8.4", city: "surat" },
  { name: "jay", spi: "7.6", city: "rajkot" }
];
const studentdetail = student.map((s) => {
  return (
    <h3 className="abc">
      {s.name} get spi = {s.spi} city = {s.city}
    </h3>
  );
});

//---- Footer part
// import "./style.css"
import "./style.css"
import sty from "./style.module.css";
function Footer(props) {
  return (
    <>
      <h1 className="abc">&copy; {props.name}</h1>
      <h3 className={sty.abc}>{props.year}</h3>
    </>
  );
}
root.render(
  <>
    <h1 style={{color:"red",backgroundColor:"ActiveCaption"}}>hello world</h1>
    <h2 style={css}>from {name} rajkot</h2>
    <hr />
    {studentdetail}
    <hr />
    <Footer name="Darshan university" year="2022" />
  </>
);
