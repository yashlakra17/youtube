import { useState } from "react";
import {
  Heart,
  Share2,
  Download,
  Play,
  Grid3x3,
  List,
} from "lucide-react";
import "./Liked.css";


  const mockLikedVideos = [
    {
      id: 1,
      title: "Amazing Gaming Moment",
      channel: "Pro Gamer",
      views: "5.2M",
      duration: "12:45",
      thumbnail:
        "https://i.ytimg.com/vi/kBUir84CjHQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5gOjdOGyuIiHpdPkURSFe63VV2Q",
      category: "gaming",
    },
    {
      id: 2,
      title: "Incredible Music Performance",
      channel: "Music Star",
      views: "3.8M",
      duration: "4:32",
      thumbnail:
        "https://i.ytimg.com/vi/R_GJrANOzpE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCUaDv4qe7XKtaLLEs_45JOO-063A",
      category: "music",
    },
    {
      id: 3,
      title: "React Advanced Tutorial",
      channel: "Code Expert",
      views: "2.1M",
      duration: "45:20",
      thumbnail:
        "https://i.ytimg.com/vi/G9zNMvANyG0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBVgZkghng13N6gcZzZZAZa0lV1iQ",
      category: "education",
    },
    {
      id: 4,
      title: "Podcast Deep Dive",
      channel: "Talk Show",
      views: "1.5M",
      duration: "1:23:45",
      thumbnail:
        "https://i.ytimg.com/vi/XqAeGu5QC4I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDekpApHVY_j9b9Tus_HmV7VGjDfw",
      category: "podcast",
    },
    {
      id: 5,
      title: "Travel Vlog Adventure",
      channel: "Travel Bug",
      views: "4.2M",
      duration: "28:15",
      thumbnail:
        "https://i.ytimg.com/vi/xLTCivIB4kU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCQj7o-fTfIsjnI5vno1XP-RDJkA",
      category: "vlog",
    },
    {
      id: 6,
      title: "Cooking Masterclass",
      channel: "Chef Master",
      views: "2.8M",
      duration: "35:50",
      thumbnail:
        "https://i.ytimg.com/vi/ocALSDB2NTg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA3AaLrIjVg6DJiFT6F8nSVidce2A",
      category: "cooking",
    },
    {
      id: 7,
      title: "Fitness Transformation",
      channel: "Fit Life",
      views: "6.1M",
      duration: "22:30",
      thumbnail:
        "https://i.ytimg.com/vi/szm4Kx2CCyQ/hq2.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCMzfTQGb6VS8xQSR0bo3i5lBqxLw",
      category: "fitness",
    },
    {
      id: 8,
      title: "Tech Review 2024",
      channel: "Tech Hub",
      views: "3.5M",
      duration: "18:42",
      thumbnail:
        "https://i.ytimg.com/vi/unCxztVM0Y0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2bR2SnHY56R22ZtCUSjdDV9UqJw",
      category: "tech",
    },
  ];

const Liked = () => {
 const [likedVideos, setLikedVideos] = useState(mockLikedVideos);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [toasts, setToasts] = useState([]);

  function addToast(message, type = "success") {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveLike = (videoId) => {
    setLikedVideos((prev) => prev.filter((v) => v.id !== videoId));
    addToast("Removed from liked videos", "info");
  };

  const handleDownload = (videoId, title) => {
    addToast(`Downloading: ${title}...`, "info");
    setTimeout(() => {
      addToast(`Downloaded: ${title}`, "success");
    }, 2000);
  };

  const handleShare = (title) => {
    addToast(`Shared: ${title}`, "success");
  };

  const filtered =
    selectedFilter === "all"
      ? likedVideos
      : likedVideos.filter((v) => v.category === selectedFilter);

  return (
    <div className="liked-container">
      {/* Header */}
      <div className="liked-header">
        <div className="header-top">
          <h1>❤️ Liked Videos</h1>
          <div className="header-controls">
            <div className="filter-group">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="gaming">Gaming</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
                <option value="podcast">Podcast</option>
              </select>
            </div>
            <div className="view-toggle">
              <button
                className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">{filtered.length}</span>
          <span className="stat-label">Videos</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">
            {Math.floor(
              filtered.reduce((acc, v) => acc + parseInt(v.views), 0) / 1000000,
            )}
            M
          </span>
          <span className="stat-label">Total Views</span>
        </div>
      </div>

      {/* Videos Grid/List */}
      <div className={`videos-container ${viewMode}`}>
        {filtered.map((video, index) => (
          <div
            key={video.id}
            className="video-item"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-overlay">
                <button className="play-btn-liked">
                  <Play size={32} fill="white" />
                </button>
              </div>
              <span className="duration-badge">{video.duration}</span>
              <span className="category-badge">{video.category}</span>
            </div>
            <div className="video-details">
              <h3>{video.title}</h3>
              <p className="channel-name">{video.channel}</p>
              <p className="video-stats">{video.views} views</p>
              <div className="video-actions">
                <button
                  className="action-btn like-btn liked"
                  onClick={() => handleRemoveLike(video.id)}
                  title="Remove from liked"
                >
                  <Heart size={20} fill="currentColor" />
                </button>
                <button
                  className="action-btn download-btn"
                  onClick={() => handleDownload(video.id, video.title)}
                  title="Download"
                >
                  <Download size={20} />
                </button>
                <button
                  className="action-btn share-btn"
                  onClick={() => handleShare(video.title)}
                  title="Share"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <div className="toast-content">
              {toast.type === "success" && <span>✓</span>}
              {toast.type === "info" && <span>ℹ</span>}
              {toast.type === "error" && <span>✕</span>}
              <p>{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liked;
