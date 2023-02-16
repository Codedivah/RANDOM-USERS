import { Routes, Route } from "react-router-dom";
import Home from "./Pages.js/Home";
import About from "./Pages.js/About";
import Nav from "./Components/Nav";
import Users from "./Pages.js/Users";
import Error from "./Pages.js/Error";
import UserDetails from "./Pages.js/UserDetails";
import React from "react";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/Users">
          <Route index element={<Users />} />
          <Route path=":Userid" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
