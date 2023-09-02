import React, { useState } from "react";
import Mycontext from "./Mycontext/Mycontext";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
// router
import { Routes, Route } from "react-router-dom";
import Addmovies from "./Components/Addmovies";
import Details from "./Components/Details";
// login and register
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  const [login, setlogin] = useState(false);
  const [userName, setuserName] = useState("");
  return (
    <Mycontext.Provider value={{ login, setlogin, userName, setuserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovies" element={<Addmovies />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Mycontext.Provider>
  );
};

export default App;
