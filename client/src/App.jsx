import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

export const Context = React.createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <Router>
        <Context.Provider value={userData}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
