import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react"; //import React to use createContext

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";


export const UserDataContext = React.createContext(); // create context to use as provider

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <UserDataContext.Provider value={{userData}}> {/*or user: userData and render {context.user.username} to AppHeader.jsx*/}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
