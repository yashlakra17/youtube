import { useState } from "react";
import {
  Search,
  Heart,
  Share2,
  Play,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import "./Pages.css";

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [toasts, setToasts] = useState([]);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All", icon: "🔥" },
    { id: "music", label: "Music", icon: "🎵" },
    { id: "mixes", label: "Mixes", icon: "🎧" },
    { id: "gaming", label: "Gaming", icon: "🎮" },
    { id: "comedy", label: "Comedy", icon: "😂" },
    { id: "cooking", label: "Cooking", icon: "👨‍🍳" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "movies", label: "Movies", icon: "🎬" },
    { id: "tech", label: "Tech", icon: "💻" },
    { id: "travel", label: "Travel", icon: "✈️" },
    { id: "fashion", label: "Fashion", icon: "👗" },
    { id: "beauty", label: "Beauty", icon: "💄" },
  ];

  const videos = [
    {
      id: 1,
      title: "Mix - Bhaang Ragad Ke Piya Karu",
      channel: "Gaamdi Aala",
      views: "5M",
      thumbnail:
        "https://i.ytimg.com/vi/IkzlYyqexB8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB9Q4wm08RDecFV1U5QlLBATZt_Uw",
      category: "music",
      duration: "4:32",
    },
    {
      id: 2,
      title: "हिंदी Oggy and the Cockroaches FOOD ONLY",
      channel: "Oggy Hindi",
      views: "69M",
      thumbnail:
        "https://i.ytimg.com/vi/QxEW1NzE0mM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBylbYR_1cqG3Bi4_W0MTG4KHQCJQ",
      category: "comedy",
      duration: "24:21",
    },
    {
      id: 3,
      title: "Bairan",
      channel: "Banjaare",
      views: "1.3M",
      thumbnail:
        "https://i.ytimg.com/vi/oafxkMv4xnc/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgTSg2MA8=&rs=AOn4CLDeY2L1g_iDUzjGteK49OW4FoV_cg",
      category: "music",
      duration: "2:31",
    },
    {
      id: 4,
      title: "ATTACK ON TITAN KILL COUNT",
      channel: "Anime Studio",
      views: "12M",
      thumbnail:
        "https://i.ytimg.com/vi/-J3iLAKxOH4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBKsuLfIXheUTHIqtZ50E21A5fNSg",
      category: "gaming",
      duration: "18:45",
    },
    {
      id: 5,
      title: "Cricket Field Strategy",
      channel: "Sports Pro",
      views: "3.2M",
      thumbnail:
        "https://i.ytimg.com/vi/YRqzF3mj8GQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8rjJ2Gw7KX1lZt1uidGMFlwQUYQ",
      category: "sports",
      duration: "12:15",
    },
    {
      id: 6,
      title: "Instead build this - Gaming Guide",
      channel: "Builder Tips",
      views: "2.8M",
      thumbnail:
        "https://i.ytimg.com/vi/CFNPKIv1nn8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzrxq5KH8NYhhK2i1ySRvMnM0PZQ",
      category: "gaming",
      duration: "15:30",
    },
    {
      id: 7,
      title: "Chef Master Cooking Show",
      channel: "Chef Kitchen",
      views: "4.5M",
      thumbnail:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=170&fit=crop",
      category: "cooking",
      duration: "28:45",
    },
    {
      id: 8,
      title: "Fashion Week 2024 Highlights",
      channel: "Fashion TV",
      views: "5.6M",
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=170&fit=crop",
      category: "fashion",
      duration: "21:00",
    },
    {
      id: 9,
      title: "Tech Review 2024",
      channel: "Tech Hub",
      views: "3.9M",
      thumbnail:
        "https://i.ytimg.com/vi/Q1Q-lp-TARU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTP0Fi67ryA9OPW8W6IVm8FI_pEgp",
      category: "tech",
      duration: "19:30",
    },
    {
      id: 10,
      title: "Travel Vlog Japan",
      channel: "Travel Diaries",
      views: "6.2M",
      thumbnail:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=170&fit=crop",
      category: "travel",
      duration: "32:15",
    },
    {
      id: 11,
      title: "Makeup Tutorial Glam",
      channel: "Beauty Box",
      views: "2.1M",
      thumbnail:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=170&fit=crop",
      category: "beauty",
      duration: "16:20",
    },
    {
      id: 12,
      title: "Comedy Sketch Compilation",
      channel: "Laugh Factory",
      views: "8.3M",
      thumbnail:
        "https://i.ytimg.com/vi/1k41gt1ydmM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAwHyaiZ81pGQEeKtcq0yF5Px4npg",
      category: "comedy",
      duration: "42:50",
    },
  ];

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000,
    );
  };

  const toggleLike = (videoId) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
      addToast("Removed from liked videos", "info");
    } else {
      newLiked.add(videoId);
      addToast("Added to liked videos", "success");
    }
    setLikedVideos(newLiked);
  };

  const handleShare = (title) => {
    addToast(`Shared: ${title}`, "success");
  };

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const searchedVideos = searchQuery
    ? filteredVideos.filter((v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredVideos;

  return (
    <div className="explore-container">
      {/* Header */}
      <div className="explore-header">
        <div className="header-content">
          <div className="header-title">
            <Sparkles className="title-icon" size={32} />
            <h1>Explore</h1>
          </div>
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search in explore..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Trending Info */}
      <div className="trending-info">
        <div className="trending-item">
          <TrendingUp size={20} />
          <span>Trending Now</span>
        </div>
        <div className="trend-bar">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="trend-segment"
              style={{ animationDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="categories-carousel">
        <div className="categories-scroll">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`category-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <span className="category-emoji">{cat.icon}</span>
              <span className="category-label">{cat.label}</span>
              {activeCategory === cat.id && (
                <div className="active-indicator"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="explore-videos">
        {searchedVideos.map((video, index) => (
          <div
            key={video.id}
            className="explore-card"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Thumbnail */}
            <div className="video-card-wrapper">
              <div className="thumbnail-container">
                <img src={video.thumbnail} alt={video.title} />
                <div className="overlay-gradient"></div>

                {/* Play Button */}
                <button className="play-btn-explore">
                  <Play size={32} fill="white" color="white" />
                </button>

                {/* Duration Badge */}
                <div className="duration">{video.duration}</div>

                {/* Category Badge */}
                <div className="category-tag">{video.category}</div>

                {/* Like Button */}
                <button
                  className={`like-btn-explore ${likedVideos.has(video.id) ? "liked" : ""}`}
                  onClick={() => toggleLike(video.id)}
                  title="Like"
                >
                  <Heart
                    size={20}
                    fill={likedVideos.has(video.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Video Info */}
              <div className="video-info-explore">
                <h3>{video.title}</h3>
                <p className="channel-info">{video.channel}</p>
                <div className="video-meta">
                  <span className="views">👁️ {video.views} views</span>
                  <button
                    className="share-btn-explore"
                    onClick={() => handleShare(video.title)}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="card-glow"></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {searchedVideos.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h2>No videos found</h2>
          <p>Try searching for something else or browse other categories</p>
        </div>
      )}

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <div className="toast-content">
              <span className="toast-icon">
                {toast.type === "success" && "✓"}
                {toast.type === "info" && "ℹ"}
                {toast.type === "error" && "✕"}
              </span>
              <p>{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
