import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardetail from './Cardetail';
import Carall from './Carall';
import Home from './Home';
import Layout from './Layout';
import Caradd from './Caradd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/AllCar' element={<Carall/>}></Route>
          <Route path='/YourCar/:id' element={<Cardetail/>}></Route>
          <Route path='/AddCar' element={<Caradd/>}></Route>
          <Route path='/EditCar/:id' element={<Caradd/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

