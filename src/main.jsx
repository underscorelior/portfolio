import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className='body flex-col'>
        <Navbar />
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
            </Route>
        </Routes>
        
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
        <h1 className="p-10">a</h1>
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
