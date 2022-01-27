import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EditUser } from "./Components/EditUser";
import { AddUser } from "./Components/AddUser";
import { GlobalProvider } from "./GlobalState";
import { Home } from "./Components/Home";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
