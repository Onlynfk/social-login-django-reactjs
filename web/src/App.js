import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import SocialAuth from "./pages/social-auth"

const App = () => {

  return (
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/google" element={<SocialAuth />} />
    </Routes>
  );
};

export default App;
