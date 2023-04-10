import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MobileNavbar from "./components/MobileNav";

function App() {
  return (
    <div className='body flex-col'>
        <Navbar />
        <MobileNavbar />
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
            </Route>
        </Routes>
        <h1 className="py-96 my-96">a</h1> {/* This is just to test navbar and scrolling */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
