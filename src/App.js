//parent component
import React from "react";
import Albums from "./components/albums/index.album.js";
import Posts from "./components/Posts/index.posts";
import Home from "./components/Home/index.home";
import Navigation from "./components/Layouts/nav.layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";

const App = () => {
  return (
    <MainLayouts>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Home title="Home" description="Website Albums and Posts" />
            }
          />
          <Route
            path="/albums"
            element={<Albums title="Album" description="Album photos API" />}
          />
          <Route
            path="/posts"
            element={<Posts title="Posts" description="Posts API" />}
          />
          <Route
            path="*"
            element={<h1 className="text-center text-danger">404 Not Found</h1>}
          />
        </Routes>
      </Router>
    </MainLayouts>
  );
};

export default App;
