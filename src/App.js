//parent component
import React, { useState } from "react";
import Albums from "./components/albums/index.album.js";
import Posts from "./components/Posts/index.posts";
import Home from "./components/Home/index.home";
import Navigation from "./components/Layouts/nav.layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import { BsFillSunFill } from "react-icons/bs";

const App = () => {
  const [dark, setDark] = useState(false);
  const theme = () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    setDark(true);

    if (dark) setDark(false);
  };

  return (
    <MainLayouts>
      <Router>
        <Navigation />
        <div>
          <span onClick={() => theme()} className="fixed-bottom fs-3 theme-btn m-3">
            <BsFillSunFill />
          </span>
        </div>
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
            element={
              <Posts title="Posts" description="Posts API" theme={dark} />
            }
          />
          <Route
            path="*"
            element={<h1 className="text-center text-danger">404 Not Found</h1>}
          />
        </Routes>
      </Router>
      <footer className="text-center py-4">Made with ❤️ by Nicho</footer>
    </MainLayouts>
  );
};

export default App;
