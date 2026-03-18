import React, { useState } from "react";
import {
  Play,
  Heart,
  Bookmark,
  Share2,
  MoreVertical,
  Search,
  ChevronRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./Anime.css";
const Anime = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [expandedSections, setExpandedSections] = useState({});
  const [likedAnime, setLikedAnime] = useState(new Set());
  const [bookmarkedAnime, setBookmarkedAnime] = useState(new Set());
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const animeData = [
    // Trending Now
    {
      id: 1,
      title: "Attack on Titan",
      japaneseTitle: "進撃の巨人",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      banner: "https://i.pinimg.com/1200x/6c/64/c8/6c64c8f007f63c4de3a38b3970dfcc31.jpg",
      rating: 8.5,
      episodes: 139,
      status: "Completed",
      genre: ["Action", "Dark Fantasy"],
      studio: "Wit Studio / MAPPA",
      season: "Fall",
      year: 2013,
      category: "trending",
    },
    {
      id: 2,
      title: "Demon Slayer",
      japaneseTitle: "鬼滅の刃",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
      banner:
        "https://images.unsplash.com/photo-1489599810694-b5473e7eb244?w=1200&h=400&fit=crop",
      rating: 8.7,
      episodes: 55,
      status: "Ongoing",
      genre: ["Action", "Supernatural"],
      studio: "ufotable",
      season: "Spring",
      year: 2019,
      category: "trending",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen Season 2",
      japaneseTitle: "呪術廻戦",
      poster:
        "https://i.pinimg.com/736x/52/25/52/522552f2b3e2b4e458db2abff957a467.jpg",
      banner:
        "https://images.unsplash.com/photo-1535745675520-d7d8c97f97e8?w=1200&h=400&fit=crop",
      rating: 8.6,
      episodes: 47,
      status: "Ongoing",
      genre: ["Action", "Dark Fantasy"],
      studio: "MAPPA",
      season: "Fall",
      year: 2020,
      category: "trending",
    },
    {
      id: 4,
      title: "My Hero Academia",
      japaneseTitle: "僕のヒーローアカデミア",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_.jpg",
      banner:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop",
      rating: 7.8,
      episodes: 113,
      status: "Ongoing",
      genre: ["Action", "School"],
      studio: "Bones",
      season: "Spring",
      year: 2016,
      category: "trending",
    },
    {
      id: 5,
      title: "Hell's Paradise",
      japaneseTitle: "地獄楽第二期",
      poster:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/f2f944d703ff54b7705593f608180b8a.jpg ",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/edb439410a78d22ec940f8a938e144f5.jpg",
      rating: 9.0,
      episodes: 24,
      status: " Currently Airing",
      genre: ["Action", "Shounen", "Samuri", "Adventures", "Supernatural"],
      studio: "MAPPA",
      season: "2",
      year: 2024,
      category: "toprated",
    },
    {
      id: 6,
      title: "One Piece",
      japaneseTitle: "ONE PIECE",
      poster:
        "https://i.pinimg.com/736x/96/17/93/9617932ff74cbf3016b35c8417ef12eb.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
      rating: 8.73,
      episodes: 1155,
      status: "Currently Airing",
      genre: [
        "Action",
        "Supernatural",
        "Pirates",
        "Adventures",
        "shounen",
        "Comedy",
        "Drama",
      ],
      studio: "Toei Animation",
      season: "-",
      year: 2006,
      category: "toprated",
    },
    {
      id: 7,
      title: "Jack-of-All-Trades, Party of None",
      japaneseTitle: "勇者パーティを追い出された器用貧乏",
      poster:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/4e3ff3c84a8f72d159184d79bb7308e8.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f8eeb1246bfa4b3415953560ccdcf5b1.jpg",
      rating: 7.7,
      episodes: 11,
      status: "Currently Airing",
      genre: ["Action", "Fantasy", "Adventure"],
      studio: "animation studio42",
      season: "1",
      year: 2026,
      category: "toprated",
    },
    {
      id: 8,
      title: "Spy x Family",
      japaneseTitle: "SPY×FAMILY",
      poster:
        "https://i.pinimg.com/736x/05/2f/36/052f3630f5ae2fc2194164ce78f8e943.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/162bbe5c3e6529b2449e735ae48c270e.jpg",
      rating: 8.34,
      episodes: 11,
      status: "Finished Airing",
      genre: [
        "Action",
        "Comedy",
        "Slice of Life",
        "Spy",
        "Family",
        "Supernatural",
      ],
      studio: " Wit Studio, CloverWorks",
      season: "Spring",
      year: 2022,
      category: "latest",
    },
    {
      id: 9,
      title: "There was a Cute Girl in the Hero's Party, so I Tried Confessing to Her",
      japaneseTitle: " 勇者パーティーにかわいい子がいたので、告白してみた。",
      poster:
        "https://i.pinimg.com/1200x/3e/98/77/3e9877df1d9489d1d8bee156fb8fb906.jpg",
      banner:
        "https://anix.com.pl/wp-content/uploads/2026/01/there-was-a-cute-girl-in-the-heros-party-so-i-tried-confessing-to-her-2026-1.jpg",
      rating: 8.0,
      episodes: 63,
      status: "Currently Airing",
      genre: ["Romance", "Comedy", "isekai", "Adventure"],
      studio: " Gekkou",
      season: "Winter",
      year: 2026,
      category: "romance",
    },
    {
      id: 10,
      title: "Kunon the Sorcerer Can See",
      japaneseTitle: " 魔術師クノンは見えている",
      poster:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4e3ff3c84a8f72d159184d79bb7308e8.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/4e3ff3c84a8f72d159184d79bb7308e8.jpg",
      rating: 8.1,
      episodes: 25,
      status: "Currently Airing",
      genre: ["Action", "Adventure", "School"],
      studio: "Platinum Vision",
      season: "Fall",
      year: 2008,
      category: "Adventure",
    },
    {
      id: 11,
      title: "Full Metal Panic!",
      japaneseTitle: "鋼の錬金術師",
      poster:
        "https://i.pinimg.com/736x/41/c3/16/41c316dbe3952cae74eb61f1f2d4fe87.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/1ebd732704f68b961359f07d9fb930a0.jpg",
      rating: 8.6,
      episodes: 64,
      status: "Completed",
      genre: ["Action", "Mecha", "Military", "Comedy"],
      studio: " Gonzo",
      season: "Winter 2002",
      year: 2002,
      category: "action",
    },
    {
      id: 12,
      title: "Onmyou Kaiten Re:Birth",
      japaneseTitle: "陰陽廻天 Re:バース",
      poster:
        "https://i.pinimg.com/736x/b2/a9/bd/b2a9bd23c78669db4dd2632e2db1a9ed.jpg",
      banner:
        "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/13b4878f4875d721ab896b97ebaf5d48.jpg",
      rating: 8.9,
      episodes: 26,
      status: "Completed",
      genre: ["Sci-Fi", "Action", "Isekai", "Fantasy"],
      studio: " David Production",
      season: "Summer",
      year: 2025,
      category: "sci-fi",
    },
  ];

  const categories = [
    { key: "trending", label: "🔥 Trending Now", emoji: "🔥" },
    { key: "toprated", label: "⭐ Top Rated", emoji: "⭐" },
    { key: "latest", label: "🆕 Latest Releases", emoji: "🆕" },
    { key: "romance", label: "💔 Romance", emoji: "💔" },
    { key: "action", label: "⚔️ Action & Adventure", emoji: "⚔️" },
    { key: "sci-fi", label: "🎮 Sci-Fi", emoji: "🎮" },
  ];

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000,
    );
  };

  const toggleLike = (id) => {
    const newLiked = new Set(likedAnime);
    if (newLiked.has(id)) {
      newLiked.delete(id);
      addToast("Removed from favorites", "info");
    } else {
      newLiked.add(id);
      addToast("Added to favorites", "success");
    }
    setLikedAnime(newLiked);
  };

  const toggleBookmark = (id, title) => {
    const newBookmarked = new Set(bookmarkedAnime);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
      addToast("Removed from watchlist", "info");
    } else {
      newBookmarked.add(id);
      addToast(`${title} added to watchlist`, "success");
    }
    setBookmarkedAnime(newBookmarked);
  };

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderAnimeCard = (anime, index) => (
    <div
      key={anime.id}
      className="anime-card"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="anime-poster">
        <img src={anime.poster} alt={anime.title} />
        <div className="anime-overlay">
          <button className="play-btn-anime">
            <Play size={32} fill="white" color="white" />
          </button>
        </div>
        <div className="status-badge">{anime.status}</div>
        <div className="rating-badge">⭐ {anime.rating}</div>
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p className="japanese-title">{anime.japaneseTitle}</p>
        <p className="episodes">{anime.episodes} Episodes</p>
        <div className="genre-tags">
          {anime.genre.slice(0, 2).map((g, i) => (
            <span key={i} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
        <div className="anime-actions">
          <button
            className={`action-btn like-btn ${likedAnime.has(anime.id) ? "liked" : ""}`}
            onClick={() => toggleLike(anime.id)}
            title="Like"
          >
            <Heart
              size={18}
              fill={likedAnime.has(anime.id) ? "currentColor" : "none"}
            />
          </button>
          <button
            className={`action-btn bookmark-btn ${bookmarkedAnime.has(anime.id) ? "bookmarked" : ""}`}
            onClick={() => toggleBookmark(anime.id, anime.title)}
            title="Bookmark"
          >
            <Bookmark
              size={18}
              fill={bookmarkedAnime.has(anime.id) ? "currentColor" : "none"}
            />
          </button>
          <button
            className="action-btn share-btn"
            onClick={() => addToast(`Shared: ${anime.title}`, "success")}
            title="Share"
          >
            <Share2 size={18} />
          </button>
          <button className="action-btn more-btn" title="More">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="anime-container">
      {/* Header */}
      <div className="anime-header">
        <div className="header-content">
          <div className="header-title">
            <Sparkles className="title-icon" size={32} />
            <h1>Anime</h1>
          </div>
          <p className="header-subtitle">Discover Amazing Anime Series</p>
        </div>

        {/* Search Bar */}
        <div className="anime-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search anime..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Trending Info */}
      <div className="trending-banner">
        <TrendingUp size={20} />
        <span>What's Trending in Anime Right Now</span>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={animeData[0].banner}
          alt={animeData[0].title}
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-info">
            <h2>{animeData[0].title}</h2>
            <p className="hero-japanese">{animeData[0].japaneseTitle}</p>
            <div className="hero-meta">
              <span className="meta-item">⭐ {animeData[0].rating}/10</span>
              <span className="meta-item">
                📺 {animeData[0].episodes} Episodes
              </span>
              <span className="meta-item">🏢 {animeData[0].studio}</span>
            </div>
            <p className="hero-genres">
              {animeData[0].genre.map((g, i) => (
                <span key={i} className="genre-badge">
                  {g}
                </span>
              ))}
            </p>
            <button className="watch-now-btn">
              <Play size={20} fill="white" color="white" />
              Watch Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="anime-content">
        {categories.map((category) => {
          const categoryAnime = animeData.filter(
            (a) => a.category === category.key,
          );
          const isExpanded = expandedSections[category.key];
          const displayedAnime = isExpanded
            ? categoryAnime
            : categoryAnime.slice(0, 4);

          return (
            <div key={category.key} className="category-section">
              <div className="category-header">
                <h2>{category.label}</h2>
                {categoryAnime.length > 4 && (
                  <button
                    className="show-more-btn"
                    onClick={() => toggleSection(category.key)}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                    <ChevronRight
                      size={18}
                      style={{
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0)",
                      }}
                    />
                  </button>
                )}
              </div>
              <div className="anime-grid">
                {displayedAnime.map((anime, index) =>
                  renderAnimeCard(anime, index),
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span className="toast-icon">
              {toast.type === "success" && "✓"}
              {toast.type === "info" && "ℹ"}
            </span>
            <p>{toast.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;
