import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shorts from "./pages/Shorts/Shorts";
import History from "./pages/History/History";
import Podcasts from "./pages/Podcast/Podcast";
import Gaming from "./pages/Gaming/Gaming";
import Music from "./pages/Music/Music";
import Explore from "./pages/Explore/Explore";
import Sports from "./pages/Sports/Sports";
import Movies from "./pages/Movie/Movie";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Playlists from "./pages/Playlists/Playlists";
import Liked from "./pages/Liked/Liked";
import Anime from "./pages/Anime/Anime";
import Downloads from "./pages/Downloads/Downloads";
// Styles
import "./styles/Global.css";
import Live from "./pages/Live/Live";

const Layout = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="main-container">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/history" element={<History />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/watchlater" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/trending" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/live" element={<Live />} />
            <Route path="/podcast" element={<Podcasts />} />
            <Route path="/channel" element={<Home />} />
            <Route path="/settings" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { darkMode } = useAuth();

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--bg-primary", "#0f0f0f");
      root.style.setProperty("--bg-secondary", "#181818");
      root.style.setProperty("--bg-tertiary", "#272727");
      root.style.setProperty("--border-color", "#303030");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#aaaaaa");
      root.style.setProperty("--accent-red", "#ff0000");
      root.style.setProperty("--accent-blue", "#065fd4");
    } else {
      root.style.setProperty("--bg-primary", "#ffffff");
      root.style.setProperty("--bg-secondary", "#f9f9f9");
      root.style.setProperty("--bg-tertiary", "#f0f0f0");
      root.style.setProperty("--border-color", "#e0e0e0");
      root.style.setProperty("--text-primary", "#030303");
      root.style.setProperty("--text-secondary", "#606060");
      root.style.setProperty("--accent-red", "#ff0000");
      root.style.setProperty("--accent-blue", "#065fd4");
    }

    document.body.style.background = "var(--bg-primary)";
  }, [darkMode]);

  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
