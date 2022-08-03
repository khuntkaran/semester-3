import React from "react";
import ReactDom from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);
const name = "Darshan uni.";

const student = [
  { name: "karan", spi: "9.9", city: "rajkot" },
  { name: "raj", spi: "8.4", city: "surat" },
  { name: "jay", spi: "7.6", city: "rajkot" }
];

const studentdetail = student.map((s) => {
  return (
    <h3>
      {s.name} get spi = {s.spi} city = {s.city}
    </h3>
  );
});

function Footer(props) {
  return (
    <>
      <h1>&copy; {props.name}</h1>
      <h3>{props.year}</h3>
    </>
  );
}
root.render(
  <>
    <h1>hello world</h1>
    <h2>from {name} rajkot</h2>
    <hr />
    {studentdetail}
    <hr />
    <Footer name="Darshan uni." year="2022" />
  </>
);
