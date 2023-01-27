import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import List from "./pages/list";
import Details from "./pages/Details";
import Comdetails from "./pages/comdetails";

function App() {
  return (
    <div className="App">
      {/* <p>Hello</p> */}

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/details" element={<Details />} />
          <Route path="/comdetails" element={<Comdetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
