import React, { useState } from "react";
import { Play, ChevronRight, Heart, Share2, MoreVertical } from "lucide-react";
import "./Music.css";

const Music = () => {
  const [expandedRows, setExpandedRows] = useState({
    hits: false,
    trending: false,
    newReleases: false,
    recommended: false,
  });
  const [likedVideos, setLikedVideos] = useState(new Set());

  const allSongs = [
    {
      id: 1,
      title: "52 bawan Gamma Ki Ragni - Rajender Kharkiya | Maina Haryanvi",
      channel: "Sonotek",
      views: "17M",
      duration: "7:40",
      uploadedAt: "13 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/KSklBTnnGVE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVFwP1e6sOmnHXlT8tcAqv2TfvEA",
      verified: true,
    },
    {
      id: 2,
      title: "Haryanvi Ragni-Jahaj Ke Maha Baith Gori | Maina Hit Ragniyan Vol 108",
      channel: "Haryanvi Maina",
      views: "9.2M",
      duration: "7:58",
      uploadedAt: "12 years ago", 
      thumbnail:
        "https://i.ytimg.com/vi/fW7krfrj9dQ/hqdefault.jpg?sqp=-oaymwFBCOADEI4CSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-BIAC6AKKAgwIABABGGUgTyhNMA8=&rs=AOn4CLA8uzkfJzaV_yg7qBvSFaiOh0oCkw",
      verified: true,
    },
    {
      id: 3,
      title: "Original Bam Lehri - Shri Bansi Jogi and Party, 1995, असली बम लहरी",
      channel: "Alex Music",
      views: "33M",
      duration: "1:33:57",
      uploadedAt: "2 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/dW3I3826cAQ/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDEUlY2uqmdDxGqJtzYH4-HgXdwZw",
      verified: true,
    },
    {
      id: 4,
      title: "Mai tere prem mai mari padi full ragni remixed by Khapiter",
      channel: "Khapiter Music",
      views: "12.3M",
      duration: "4:58",
      uploadedAt: "1 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/BbygpP7aRlE/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPsrGIrQmUJN8sKlnRy1Q8XN6PAw",
      verified: false,
    },
    {
      id: 5,
      title: "Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed",
      channel: "Music Think India",
      views: "406M",
      duration: "2:30",
      uploadedAt: "1 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/tOM-nWPcR4U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCsE4bNAOE9LelaKF1gqI6XMIeWIQ",
      verified: true,
    },
    {
      id: 6,
      title: "Appadi Podu - Ghilli | Dhanush, Trisha | Vidyasagar | Siva | Tamil Songs",
      channel: "Sun Music",
      views: "113M",
      duration: "4:45",
      uploadedAt: "3 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/i1BqRYMFS08/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA29M8THwX67hHPdEldkjOZyXcylg",
      verified: false,
    },
    {
      id: 7,
      title: "The Chainsmokers - Closer (Lyric) ft. Halsey",
      channel: "Pop Music",
      views: "3.4B",
      duration: "5:02",
      uploadedAt: "9 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/PT2_F-1esPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDPl-_ws72Ix5dldhJj0Hz4T28lwQ",
      verified: true,
    },
    {
      id: 8,
      title: "Daddy Yankee - Dura (Official Video)",
      channel: "Daddy Yankee",
      views: "1.2B",
      duration: "4:45",
      uploadedAt: "6 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/sGIm0-dQd8M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEWy_fKN99DHm5WD9wlMSKJB8PKA",
      verified: false,
    },
    {
      id: 9,
      title: "Mitran Di Chatri - Babbu Maan | Latest Punjabi Song 2024",
      channel: "Rock Station",
      views: "22M",
      duration: "4:35",
      uploadedAt: "14 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/fpnJPH5t79Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzUYGIT7i6sx0WbFwNMZCQgv6PBA",
      verified: true,
    },
    {
      id: 10,
      title: "Supne Me Raat Ne Aayi",
      channel: "Vikas Kumar  Music",
      views: "19.5M",
      duration: "7:19",
      uploadedAt: "2 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/59gazvrgNfc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDRBh7FEhvAOf2v8GvzO7Zt8y-G5Q",
      verified: true,
    },
    {
      id: 11,
      title: "Mehbooba - A Romantic Classical Song",
      channel: "Classical FM",
      views: "146.3M",
      duration: "3:15",
      uploadedAt: "7 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/ByAbV-MKDgs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAHp-Jgb62T1qeEskTaDwMxb1PD6g",
      verified: false,
    },
    {
      id: 12,
      title: "One Side - Divine",
      channel: "Divine Music",
      views: "31.9M",
      duration: "2:20",
      uploadedAt: "7 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/gBaKniqsEC0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-Y2k5ULdYn9ZZL8yeDcDH75qjuQ",
      verified: true,
    },
    {
      id: 13,
      title: "Ed Sheeran - Perfect (Official Music Video)",
      channel: "Ed Sheeran",
      views: "6.6B",
      duration: "4:45",
      uploadedAt: "9 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyNhDKz_FSbd7MP8gOwFKaWOeSSQ",
      verified: false,
    },
    {
      id: 14,
      title: "PSY - GANGNAM STYLE(강남스타일) M/V",
      channel: "Official PSY",
      views: "5.8B",
      duration: "4:13",
      uploadedAt: "13 years ago",
      thumbnail:
        "https://i.ytimg.com/vi/9bZkp7q19f0/hq2.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCcGa3d31Oyze419LDokfTmqQp8Wg",
      verified: true,
    },
    {
      id: 15,
      title: "Satiya - Imran Khan | Official Music Video",
      channel: "imrankhanworld",
      views: "1B",
      duration: "3:18",
      uploadedAt: "5 days ago",
      thumbnail:
        "https://i.ytimg.com/vi/pfVODjDBFxU/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGMgZShSMA8=&rs=AOn4CLDYPEw2X9-9El42zuAYdbdHG1G2cw",
      verified: false,
    },
    {
      id: 16,
      title: "Tokyo Drift - Fast & Furious | Teriyaki Boyz | Official Music Video",
      channel: "Master Music",
      views: "521M",
      duration: "4:12",
      uploadedAt: "13  years ago",
      thumbnail:
        "https://i.ytimg.com/vi/MgY01n03QLU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCzAzJGJb406462cbuO2fIZPSlyA",
      verified: true,
    },
  ];

  const sections = [
    { id: "hits", title: "India's Biggest Hits", songs: allSongs.slice(0, 4) },
    { id: "trending", title: "Trending Now", songs: allSongs.slice(4, 8) },
    { id: "newReleases", title: "New Releases", songs: allSongs.slice(8, 12) },
    {
      id: "recommended",
      title: "Recommended For You",
      songs: allSongs.slice(12, 16),
    },
  ];

  const toggleExpanded = (sectionId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleLike = (songId) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(songId)) {
      newLiked.delete(songId);
    } else {
      newLiked.add(songId);
    }
    setLikedVideos(newLiked);
  };

  const SongCard = ({ song }) => (
    <div className="song-card">
      <div className="song-thumbnail">
        <img src={song.thumbnail} alt={song.title} />
        <div className="song-overlay">
          <button className="play-button-song">
            <Play size={32} fill="white" color="white" />
          </button>
        </div>
        <div className="duration-badge-song">{song.duration}</div>
      </div>
      <div className="song-info">
        <h3>{song.title}</h3>
        <p className="song-channel">
          {song.channel}
          {song.verified && <span className="verified">✓</span>}
        </p>
        <p className="song-stats">
          {song.views} views • {song.uploadedAt}
        </p>
        <div className="song-actions">
          <button
            className={`action-btn like-btn ${likedVideos.has(song.id) ? "liked" : ""}`}
            onClick={() => toggleLike(song.id)}
          >
            <Heart
              size={18}
              fill={likedVideos.has(song.id) ? "currentColor" : "none"}
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
    <div className="music-container">
      {/* Header */}
      <div className="music-header">
        <div className="header-icon">🎵</div>
        <h1>Music</h1>
      </div>

      {/* Sections */}
      <div className="music-sections">
        {sections.map((section) => (
          <div key={section.id} className="music-section">
            {/* Section Title */}
            <div className="section-title-music">
              <h2>{section.title}</h2>
            </div>

            {/* Video Grid - First Row (4 items) */}
            <div className="song-grid">
              {section.songs.slice(0, 4).map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>

            {/* Show More Button */}
            <button
              className="show-more-button-music"
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
            {expandedRows[section.id] && section.songs.length > 4 && (
              <div className="song-grid expanded-song-grid">
                {section.songs.slice(4).map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
