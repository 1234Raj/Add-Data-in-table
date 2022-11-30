import React from "react";
import Home from './component/pages/Home1';
 import Add1 from './component/layout/Add1';
//  import Edit from './component/layout/Edit';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import './App.css';
import Navbar from "./component/layout/Navbar";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// import "./component/layout/Navbar.css";


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/Add" element={<Add1/>} />
          {/* <Route  path="/Edit/:id" element={<Edit/>} /> */}
        </Routes>
      </BrowserRouter>
       


    </>
  );
}

export default App;
