import { useState, useEffect, useRef } from "react";
import {
  Menu,
  Search,
  Plus,
  Link2,
  Bell,
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
  X,
  FileVideo,
  PlayCircle,
  Music,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {type === "success" && <span>✓</span>}
        {type === "info" && <AlertCircle size={20} />}
        {type === "error" && <span>✕</span>}
        <p>{message}</p>
      </div>
    </div>
  );
};

// Advanced Center Search Component
const CenterSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef(null);

  const allSuggestions = [
    { text: "React Hooks Tutorial", icon: "📚", category: "Education" },
    { text: "Web Design Trends 2024", icon: "🎨", category: "Design" },
    { text: "Advanced JavaScript", icon: "⚡", category: "Code" },
    { text: "CSS Grid & Flexbox", icon: "📐", category: "CSS" },
    { text: "TypeScript Guide", icon: "🔧", category: "Code" },
    { text: "Node.js Best Practices", icon: "🚀", category: "Backend" },
    { text: "Database Design", icon: "💾", category: "Database" },
    { text: "API Development", icon: "🌐", category: "API" },
  ];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const filtered = allSuggestions.filter((s) =>
        s.text.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(
        filtered.length > 0 ? filtered : allSuggestions.slice(0, 6),
      );
      setShowSuggestions(true);
    } else {
      setSuggestions(allSuggestions.slice(0, 6));
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (text) => {
    setSearchQuery(text);
    setShowSuggestions(false);
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsOpen(false);
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setShowSuggestions(false);
    }
  };

  return (
    <div className={`center-search-container ${isOpen ? "active" : ""}`}>
      {/* Center Search Wrapper */}
      <div className="center-search-wrapper">
        {/* Left Icon */}
        <div className="search-side-icon left">
          <Search size={20} />
        </div>

        {/* Search Input */}
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search videos, playlists, channels..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          onFocus={() => {
            setIsOpen(true);
            if (searchQuery.trim().length > 0) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          className="center-search-input"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            className="search-clear-btn"
            onClick={() => {
              setSearchQuery("");
              setSuggestions(allSuggestions.slice(0, 6));
              searchInputRef.current?.focus();
            }}
          >
            <X size={16} />
          </button>
        )}

        {/* Right Icon (Search Button) */}
        <div
          className="search-side-icon right"
          onClick={() => handleSearch(searchQuery)}
        >
          <Search size={20} />
        </div>

        {/* Suggestions Dropdown */}
        {isOpen && showSuggestions && (
          <div className="search-suggestions-dropdown">
            <div className="suggestions-header">
              <TrendingUp size={14} />
              <span>Popular searches</span>
            </div>
            <div className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <span className="suggestion-icon">{suggestion.icon}</span>
                  <div className="suggestion-info">
                    <span className="suggestion-text">{suggestion.text}</span>
                    <span className="suggestion-category">
                      {suggestion.category}
                    </span>
                  </div>
                  <Search size={14} className="suggestion-arrow" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="search-dropdown-backdrop"
          onClick={() => {
            setIsOpen(false);
            setShowSuggestions(false);
          }}
        />
      )}
    </div>
  );
};

// Create Content Modal
const CreateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Content</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="create-options">
          <button className="create-option">
            <div className="option-icon upload">
              <FileVideo size={32} />
            </div>
            <div className="option-text">
              <h3>Upload Video</h3>
              <p>Upload a file from your device</p>
            </div>
          </button>

          <button className="create-option">
            <div className="option-icon live">
              <PlayCircle size={32} />
            </div>
            <div className="option-text">
              <h3>Go Live</h3>
              <p>Start streaming to your audience</p>
            </div>
          </button>

          <button className="create-option">
            <div className="option-icon short">
              <Music size={32} />
            </div>
            <div className="option-text">
              <h3>Create Short</h3>
              <p>Make a short video (&lt;60 seconds&gt;)</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ sidebarOpen, setSidebarOpen, onNavigate }) => {
  const { user, isLoggedIn, logout, darkMode, toggleTheme } = useAuth();
  const navigate = useNavigate();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Random notifications data
  const notifications = [
    '🎉 Your video "React Tips" reached 1K views!',
    "💬 5 new comments on your latest upload",
    "👍 10 new likes in the last hour",
    "🔔 New subscriber: @CodeMaster",
    "📊 Your analytics are ready to view",
    "🚀 Try the new Studio features",
    "💡 New trending category: AI Development",
    "🎬 Shorts are getting 50% more engagement",
  ];

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleBellClick = () => {
    const randomNotification =
      notifications[Math.floor(Math.random() * notifications.length)];
    addToast(randomNotification, "info");
  };

  const handleLogout = () => {
    logout();
    setProfileDropdown(false);
    addToast("Logged out successfully", "success");
    setTimeout(() => navigate("/signin"), 1500);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="logo" onClick={() => onNavigate("home")}>
            <span className="logo-play">▶</span>
            <span className="logo-text">YouTube</span>
          </Link>
        </div>

        {/* Center Search Bar */}
        <CenterSearch />

        <div className="header-right">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${darkMode ? "Light" : "Dark"} Mode`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="icon-btn"
            onClick={() => setCreateModalOpen(true)}
            title="Create new content"
          >
            <Plus size={24} />
          </button>

          <button
            className="icon-btn"
            onClick={handleBellClick}
            title="Notifications"
          >
            <Bell size={24} />
          </button>

          <button className="icon-btn" title="Share">
            <Link2 size={24} />
          </button>

          <div className="profile-menu">
            <button
              className="profile-btn"
              onClick={() => setProfileDropdown(!profileDropdown)}
              title="Profile menu"
            >
              {isLoggedIn && user ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="profile-avatar"
                />
              ) : (
                <User size={24} />
              )}
            </button>

            {profileDropdown && (
              <div className="dropdown-menu">
                {isLoggedIn && user ? (
                  <>
                    <div className="dropdown-header">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="header-avatar"
                      />
                      <div>
                        <p className="user-name">{user.name}</p>
                        <p className="user-email">{user.email}</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/channel"
                      className="dropdown-item"
                      onClick={() => setProfileDropdown(false)}
                    >
                      <User size={18} /> My Channel
                    </Link>
                    <Link
                      to="/settings"
                      className="dropdown-item"
                      onClick={() => setProfileDropdown(false)}
                    >
                      <Settings size={18} /> Settings
                    </Link>
                    <button
                      className="dropdown-item logout-btn"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      className="dropdown-item"
                      onClick={() => setProfileDropdown(false)}
                    >
                      <User size={18} /> Sign In
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

      {/* Create Modal */}
      <CreateModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </>
  );
};

export default Header;
