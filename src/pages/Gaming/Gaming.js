import React, { useState } from "react";
import { Play, ChevronRight, Heart, Share2, MoreVertical } from "lucide-react";
import "./Gaming.css";

const Gaming = () => {
  const [expandedRows, setExpandedRows] = useState({
    featured: false,
    topLive: false,
    trending: false,
    recommended: false,
  });
  const [likedVideos, setLikedVideos] = useState(new Set());

  const allGames = [
    {
      id: 1,
      title: "I'M QUITTING FREE FIRE LAST SOLO VS SQUAD...",
      channel: "Total Gaming",
      views: "1M",
      duration: "16:47",
      uploadedAt: "1 day ago",
      thumbnail:
        "https://i.ytimg.com/vi/Dg0MUJIRbrE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCg8nGU0FhPe5ck1al6IChVuX5AcA",
      verified: true,
    },
    {
      id: 2,
      title: "WELCOME TO THE MOST EXPENSIVE CITY | GTA 5...",
      channel: "Techno Gamerz",
      views: "14M",
      duration: "48:57",
      uploadedAt: "9 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/F5W1G5Qbti0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBaEPR7m3YcgkPyl4yn9pPO8t2dyw",
      verified: true,
    },
    {
      id: 3,
      title: "MY GAMING CONSOLE COLLECTION",
      channel: "TechShot",
      views: "1.2M",
      duration: "22:18",
      uploadedAt: "1 day ago",
      thumbnail:
        "https://i.ytimg.com/vi/DkozalwDoyw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCbAfjG_EDDlyQai3o81e3xJ3jMwQ",
      verified: true,
    },
    {
      id: 4,
      title: "MY FIRST DAY IN NEW WORLD OF POKEMON",
      channel: "Techno Gamerz",
      views: "15M",
      duration: "48:35",
      uploadedAt: "2 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/FvlvJny-iEw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBlfZokq0UA0yfuV6Ejo7KcGFzBHw",
      verified: true,
    },
    {
      id: 5,
      title: "WINNING THE IMPOSSIBLE CHALLENGE",
      channel: "Gaming Pro",
      views: "8.5M",
      duration: "35:42",
      uploadedAt: "3 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/3kkRIIRDm0k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDkscfYh4Twy-L0WFDTHVNN2Q79nA",
      verified: false,
    },
    {
      id: 6,
      title: "LEGENDARY GAMING MOMENTS COMPILATION",
      channel: "Epic Gamers",
      views: "12M",
      duration: "52:15",
      uploadedAt: "5 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/j7WbkzvTuU8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD8xnjsCV9slkWu4FuduLsCsJL7Rg",
      verified: true,
    },
    {
      id: 7,
      title: "TESTING NEW GAMING PC - ULTIMATE BUILD",
      channel: "Tech Reviews",
      views: "5.2M",
      duration: "28:30",
      uploadedAt: "2 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/1VX4k0ihU8M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDBp-dQ3ruD572Ea0m2XLWEw-zMeg",
      verified: false,
    },
    {
      id: 8,
      title: "BATTLE ROYALE INTENSE GAMEPLAY",
      channel: "Pro Streamer",
      views: "9.8M",
      duration: "44:20",
      uploadedAt: "1 day ago",
      thumbnail:
        "https://i.ytimg.com/vi/NGTXUwu4v-U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvuH3e_gS6ZqI9gtku0GosRZibzA",
      verified: true,
    },
    {
      id: 9,
      title: "FASTEST SPEEDRUN WORLD RECORD",
      channel: "Speed Gaming",
      views: "6.3M",
      duration: "18:45",
      uploadedAt: "4 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/pyV68KvUwlw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBuvmsHPb43X-blLGYTBhbTJ9co7A",
      verified: true,
    },
    {
      id: 10,
      title: "CRAZY GAMING TOURNAMENT 2024",
      channel: "Gaming Masters",
      views: "11M",
      duration: "1:05:30",
      uploadedAt: "1 week ago",
      thumbnail:
        "https://i.ytimg.com/vi/zkmYHcxUTHM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBD3dCer7zfK115DDhkvywbSKp12g",
      verified: false,
    },
    {
      id: 11,
      title: "HIDDEN EASTER EGGS IN GAMES",
      channel: "Game Detective",
      views: "4.5M",
      duration: "32:10",
      uploadedAt: "6 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/MTyrHB2FWSA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDiMMq39eSO-XIpRz91NoXwQoD_Aw",
      verified: true,
    },
    {
      id: 12,
      title: "MULTIPLAYER CHAOS FUN TIMES",
      channel: "Funny Gamers",
      views: "7.9M",
      duration: "41:25",
      uploadedAt: "3 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/u2JeM2BdaqU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB6GkYYxGPUAoTEWCDaJtVY06q2TQ",
      verified: false,
    },
    {
      id: 13,
      title: "NEXT GEN CONSOLE REVIEW ULTIMATE",
      channel: "Tech Guru",
      views: "8.2M",
      duration: "55:40",
      uploadedAt: "2 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/dSl0mHa_nlE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8mR3UH8uUNvi7-ejel8XCxRCgtg",
      verified: true,
    },
    {
      id: 14,
      title: "RETRO GAMING NOSTALGIA TRIP",
      channel: "Classic Gamer",
      views: "3.8M",
      duration: "39:15",
      uploadedAt: "5 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/4mFSsgFTe-8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxR7lRPlTt3-0awgJZ6GamXJPUuw",
      verified: false,
    },
    {
      id: 15,
      title: "ESPORTS CHAMPIONSHIP HIGHLIGHTS",
      channel: "Esports Network",
      views: "13.5M",
      duration: "47:50",
      uploadedAt: "3 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/7cKGNCA5fxk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA6i1HfmphQEsHLAJ1EC3Gdtt6QoA",
      verified: true,
    },
    {
      id: 16,
      title: "GAMING SETUP TOUR 2024",
      channel: "Setup Master",
      views: "6.1M",
      duration: "26:35",
      uploadedAt: "1 day ago",
      thumbnail:
        "https://i.ytimg.com/vi/uTOKU7-Ddz8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOHVcy4KID-KHSfL-tpMky5c-WAQ",
      verified: false,
    },
  ];

  const sections = [
    { id: "featured", title: "Featured", videos: allGames.slice(0, 4) },
    { id: "topLive", title: "Top live games", videos: allGames.slice(4, 8) },
    { id: "trending", title: "Trending Now", videos: allGames.slice(8, 12) },
    {
      id: "recommended",
      title: "Recommended For You",
      videos: allGames.slice(12, 16),
    },
  ];

  const toggleExpanded = (sectionId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleLike = (videoId) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  const GameCard = ({ video }) => (
    <div className="game-card">
      <div className="game-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="game-overlay">
          <button className="play-button-game">
            <Play size={32} fill="white" color="white" />
          </button>
        </div>
        <div className="duration-badge">{video.duration}</div>
      </div>
      <div className="game-info">
        <h3>{video.title}</h3>
        <p className="game-channel">
          {video.channel}
          {video.verified && <span className="verified">✓</span>}
        </p>
        <p className="game-stats">
          {video.views} views • {video.uploadedAt}
        </p>
        <div className="game-actions">
          <button
            className={`action-btn like-btn ${likedVideos.has(video.id) ? "liked" : ""}`}
            onClick={() => toggleLike(video.id)}
          >
            <Heart
              size={18}
              fill={likedVideos.has(video.id) ? "currentColor" : "none"}
            />
          </button>
          <button className="action-btn share-btn">
            <Share2 size={18} />
          </button>
          <button className="action-btn more-btn">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="gaming-container">
      {/* Header */}
      <div className="gaming-header">
        <div className="header-icon">🎮</div>
        <h1>Gaming</h1>
      </div>

      {/* Sections */}
      <div className="gaming-sections">
        {sections.map((section) => (
          <div key={section.id} className="gaming-section">
            {/* Section Title */}
            <div className="section-title">
              <h2>{section.title}</h2>
            </div>

            {/* Video Grid - First Row (4 items) */}
            <div className="video-grid">
              {section.videos.slice(0, 4).map((video) => (
                <GameCard key={video.id} video={video} />
              ))}
            </div>

            {/* Show More Button */}
            <button
              className="show-more-button"
              onClick={() => toggleExpanded(section.id)}
            >
              <span>
                {expandedRows[section.id] ? "Show less" : "Show more"}
              </span>
              <ChevronRight
                size={20}
                className={`chevron ${expandedRows[section.id] ? "rotated" : ""}`}
              />
            </button>

            {/* Expanded Row (Additional 4 items) */}
            {expandedRows[section.id] && section.videos.length > 4 && (
              <div className="video-grid expanded-grid">
                {section.videos.slice(4).map((video) => (
                  <GameCard key={video.id} video={video} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
