import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Share2,
  Play,
  Lock,
  Globe,
  MoreVertical,
  X,
  Check,
} from "lucide-react";
import "./Playlist.css";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "Gaming Highlights",
      videos: 24,
      thumbnail:
        "https://i.ytimg.com/vi/nHgNCxu5Edc/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDeE-Ty8Z7Q_4h4RkX-x92C-OZEUA",
      private: false,
    },
    {
      id: 2,
      name: "Music Playlist",
      videos: 45,
      thumbnail:
        "https://i.ytimg.com/vi/nSZwWX9u0YU/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSEzEpSZkj_XMW-mkcRfX3LZDaHg",
      private: false,
    },
    {
      id: 3,
      name: "Learning Path",
      videos: 18,
      thumbnail:
        "https://i.ytimg.com/vi/F9gB5b4jgOI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDink08C9LRdbPdUkYPuDDlgGPUKQ",
      private: true,
    },
    {
      id: 4,
      name: "Travel Diary",
      videos: 32,
      thumbnail:
        "https://i.ytimg.com/vi/RlNSBk_vUrg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBW-PU6m1VdlvBF87Q1esVCHv8-vw",
      private: false,
    },
    {
      id: 5,
      name: "Cooking Recipes",
      videos: 56,
      thumbnail:
        "https://i.ytimg.com/vi/zatqQEjT2rg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD4FwDEEeH50mkp3cecLA4_MwSiog",
      private: false,
    },
    {
      id: 6,
      name: "Fitness Journey",
      videos: 38,
      thumbnail:
        "https://i.ytimg.com/vi/iTXnrkS8Oig/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB1nxJvylTzwouDh7HzYGWCREnFCA",
      private: false,
    },
    {
      id: 7,
      name: "Tech Reviews",
      videos: 21,
      thumbnail:
        "https://i.ytimg.com/vi/cWSsO0fTCvc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAhgOxlzZNChkPjEeem3vsKwdbxfQ",
      private: true,
    },
    {
      id: 8,
      name: "Movie Classics",
      videos: 67,
      thumbnail:
        "https://i.ytimg.com/vi/6Sk4OnZuFqE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDuyWtncMPOvs6mIV2EOHB59RkWjQ",
      private: false,
    },
    {
      id: 9,
      name: "Fashion Tips",
      videos: 43,
      thumbnail:
        "https://i.ytimg.com/vi/VzHlZYJlr8Q/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKtT9MCGlvA3bCdnkoRROKq4cH2Q",
      private: false,
    },
    {
      id: 10,
      name: "Comedy Specials",
      videos: 29,
      thumbnail:
        "https://i.ytimg.com/vi/aKETPb9SAG4/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnXSVK-FwNGukj1LtRRDoZp0oTQQ",
      private: false,
    },
    {
      id: 11,
      name: "Nature Documentary",
      videos: 52,
      thumbnail:
        "https://i.ytimg.com/vi/_4n0j0UsYiA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAwxTuVfvkep_P81BRtHk0zqbGGLA",
      private: true,
    },
    {
      id: 12,
      name: "DIY Projects",
      videos: 35,
      thumbnail:
        "https://i.ytimg.com/vi/DMwmo8Cl2jE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC97t3DKAX4TnM0wKlnEbE0Y3obdg",
      private: false,
    },
  ]);
  const [toasts, setToasts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const addToast = (msg, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message: msg, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000,
    );
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() === "") {
      addToast("Please enter a playlist name", "error");
      return;
    }

    const newPlaylist = {
      id: Date.now(),
      name: newPlaylistName,
      videos: 0,
      thumbnail: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 100)}00?w=200&h=120&fit=crop`,
      private: isPrivate,
    };

    setPlaylists((prev) => [newPlaylist, ...prev]);
    addToast(`Created playlist: "${newPlaylistName}"`, "success");
    setNewPlaylistName("");
    setIsPrivate(false);
    setShowModal(false);
  };

  const handleDelete = (id, name) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
    addToast(`Deleted playlist: ${name}`, "info");
  };

  const handleShare = (name) => {
    addToast(`Shared: ${name}`, "success");
  };

  const handleTogglePrivate = (id) => {
    setPlaylists((prev) =>
      prev.map((p) => (p.id === id ? { ...p, private: !p.private } : p)),
    );
    addToast("Privacy updated", "success");
  };

  return (
    <div className="playlists-container">
      {/* Header */}
      <div className="playlists-header">
        <div className="header-title">
          <h1>📋 Playlists</h1>
          <span className="playlist-count">{playlists.length} playlists</span>
        </div>
        <button className="create-btn" onClick={() => setShowModal(true)}>
          <Plus size={20} /> Create New
        </button>
      </div>

      {/* Stats */}
      <div className="playlists-stats">
        <div className="stat">
          <span className="stat-value">{playlists.length}</span>
          <span className="stat-label">Total Playlists</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {playlists.reduce((acc, p) => acc + p.videos, 0)}
          </span>
          <span className="stat-label">Total Videos</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {playlists.filter((p) => p.private).length}
          </span>
          <span className="stat-label">Private</span>
        </div>
      </div>

      {/* Playlists Grid */}
      <div className="playlists-grid">
        {playlists.map((playlist, index) => (
          <div
            key={playlist.id}
            className="playlist-card"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="playlist-thumbnail">
              <img src={playlist.thumbnail} alt={playlist.name} />
              <div className="overlay">
                <button className="play-btn-playlist">
                  <Play size={24} fill="white" color="white" />
                </button>
              </div>
              {playlist.private && (
                <div className="private-badge">
                  <Lock size={16} />
                </div>
              )}
              <div className="video-count-badge">{playlist.videos} videos</div>
            </div>

            <div className="playlist-info">
              <h3>{playlist.name}</h3>
              <p className="privacy-status">
                {playlist.private ? <>🔒 Private</> : <>🌍 Public</>}
              </p>

              <div className="playlist-actions">
                <button
                  className="action-btn share-btn"
                  onClick={() => handleShare(playlist.name)}
                  title="Share"
                >
                  <Share2 size={16} />
                </button>
                <button
                  className={`action-btn ${playlist.private ? "private-btn" : "public-btn"}`}
                  onClick={() => handleTogglePrivate(playlist.id)}
                  title="Toggle privacy"
                >
                  {playlist.private ? <Lock size={16} /> : <Globe size={16} />}
                </button>
                <button
                  className="action-btn delete-btn"
                  onClick={() => handleDelete(playlist.id, playlist.name)}
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
                <button className="action-btn more-btn" title="More options">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Playlist Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Playlist</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Playlist Name</label>
                <input
                  type="text"
                  placeholder="Enter playlist name..."
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleCreatePlaylist()
                  }
                  autoFocus
                  className="playlist-input"
                />
              </div>

              <div className="form-group">
                <label>Privacy Settings</label>
                <div className="privacy-toggle">
                  <button
                    className={`toggle-option ${!isPrivate ? "active" : ""}`}
                    onClick={() => setIsPrivate(false)}
                  >
                    <Globe size={18} />
                    Public
                  </button>
                  <button
                    className={`toggle-option ${isPrivate ? "active" : ""}`}
                    onClick={() => setIsPrivate(true)}
                  >
                    <Lock size={18} />
                    Private
                  </button>
                </div>
              </div>

              <div className="form-info">
                <p>
                  {isPrivate
                    ? "Only you can see this playlist"
                    : "Anyone can find and view this playlist"}
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn-create" onClick={handleCreatePlaylist}>
                <Check size={18} />
                Create Playlist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span className="toast-icon">
              {toast.type === "success" && "✓"}
              {toast.type === "info" && "ℹ"}
              {toast.type === "error" && "✕"}
            </span>
            <p>{toast.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
