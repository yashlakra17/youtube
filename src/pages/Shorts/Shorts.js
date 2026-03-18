import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Share2,
  ThumbsUp,
  MessageCircle,
  MoreVertical,
  Heart,
  Download,
  BarChart2,
  Zap,
  Sparkles,
} from "lucide-react";
import "./Shorts.css";

const ShortsPage = () => {
  const [currentShortIndex, setCurrentShortIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [hoveredAction, setHoveredAction] = useState(null);
  const videoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 🎥 YOUR SHORTS DATA - ADD YOUR VIDEOS HERE
  const shorts = [
    {
      id: "1",
      title: "Premium Laptop Battery 😂",
      channel: "@DayaI_yogi",
      subscribers: "1.2M",
      avatar:
        "https://ui-avatars.com/api/?name=Dayal+Yogi&background=FF6B6B&color=fff",
      views: "2.4M",
      likes: "89K",
      comments: "12K",
      shares: "34K",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=700&fit=crop",
      videoUrl: "https://example.com/video1.mp4",
      description: "Premium Laptop Battery - Try Not to Laugh 😂",
      hashtags: ["#funny", "#laptop", "#shorts"],
      verified: true,
      trend: "🔥 Trending",
      color: "gradient-1",
    },
    {
      id: "2",
      title: "Indian Prank Gone Wrong 😱",
      channel: "@ComedyKing",
      subscribers: "2.1M",
      avatar:
        "https://ui-avatars.com/api/?name=Comedy+King&background=4ECDC4&color=fff",
      views: "5.2M",
      likes: "156K",
      comments: "45K",
      shares: "78K",
      thumbnail:
        "https://images.unsplash.com/photo-1535016120754-fd45c1d4a1f9?w=400&h=700&fit=crop",
      videoUrl: "https://example.com/video2.mp4",
      description: "Hilarious Indian prank that went way too far! 😱",
      hashtags: ["#prank", "#funny", "#india"],
      verified: true,
      trend: "⚡ Viral",
      color: "gradient-2",
    },
    {
      id: "3",
      title: "Web Development Tips 💻",
      channel: "@CodeMaster",
      subscribers: "890K",
      avatar:
        "https://ui-avatars.com/api/?name=Code+Master&background=95E1D3&color=fff",
      views: "1.8M",
      likes: "67K",
      comments: "8K",
      shares: "23K",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=700&fit=crop",
      videoUrl: "https://example.com/video3.mp4",
      description: "Quick web development hack you need to know! 💻",
      hashtags: ["#coding", "#webdev", "#tutorial"],
      verified: true,
      trend: "💡 Educational",
      color: "gradient-3",
    },
  ];

  const short = shorts[currentShortIndex];

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current
          .play()
          .catch(() => console.log("Autoplay not allowed"));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && isPlaying) {
        const progress =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setCurrentProgress(progress || 0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        handleVideoChange(-1);
      } else if (e.key === "ArrowDown") {
        handleVideoChange(1);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      } else if (e.key === "m" || e.key === "M") {
        setIsMuted(!isMuted);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying, isMuted, shorts.length]);

  const handleVideoChange = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentShortIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex < 0) newIndex = shorts.length - 1;
        if (newIndex >= shorts.length) newIndex = 0;
        return newIndex;
      });
      setIsPlaying(true);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPreviousShort = () => handleVideoChange(-1);
  const goToNextShort = () => handleVideoChange(1);

  const toggleLike = () => {
    setLiked(!liked);
    setShowLikeAnimation(true);
    setTimeout(() => setShowLikeAnimation(false), 600);
  };

  const actionButtons = [
    { icon: ThumbsUp, label: "Like", count: short.likes, id: "like" },
    {
      icon: MessageCircle,
      label: "Comments",
      count: short.comments,
      id: "comment",
    },
    { icon: Share2, label: "Share", count: short.shares, id: "share" },
    { icon: Download, label: "Save", count: "Save", id: "save" },
  ];

  return (
    <div className="shorts-page-container">
      {/* Advanced animated background */}
      <div className="shorts-background"></div>
      <div className="shorts-animated-gradient"></div>
      <div className="shorts-blur-orbs"></div>

      {/* Main shorts player */}
      <div
        className={`shorts-player-wrapper ${isTransitioning ? "transitioning" : ""}`}
      >
        <div className={`shorts-video-container ${short.color}`}>
          {/* Video player */}
          <video
            ref={videoRef}
            className="shorts-video"
            poster={short.thumbnail}
            onClick={() => setIsPlaying(!isPlaying)}
            muted={isMuted}
            loop
            preload="metadata"
          >
            <source src={short.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback image */}
          <img
            src={short.thumbnail}
            alt={short.title}
            className="shorts-fallback-image"
          />

          {/* Advanced overlays */}
          <div className="shorts-video-overlay"></div>
          <div className="shorts-glow-effect"></div>

          {/* Play/Pause overlay with animation */}
          {!isPlaying && (
            <div className="shorts-play-overlay">
              <div className="play-button-ripple"></div>
              <Play size={80} fill="white" color="white" />
            </div>
          )}

          {/* Top controls with blur backdrop */}
          <div className="shorts-top-controls">
            <div className="shorts-title-bar">
              <div className="title-content">
                <h2>{short.title}</h2>
                <span className="trend-badge">{short.trend}</span>
              </div>
              <button className="shorts-menu-btn">
                <MoreVertical size={24} />
              </button>
            </div>
          </div>

          {/* Bottom info with glass morphism */}
          <div className="shorts-bottom-info">
            <div className="shorts-channel-info">
              <div className="avatar-container">
                <img
                  src={short.avatar}
                  alt={short.channel}
                  className="shorts-channel-avatar"
                />
                <div className="avatar-glow"></div>
              </div>
              <div className="shorts-channel-details">
                <p className="shorts-channel-name">
                  {short.channel}
                  {short.verified && (
                    <span className="shorts-verified-badge">✓</span>
                  )}
                </p>
                <p className="shorts-subscribers">
                  {short.subscribers} subscribers
                </p>
              </div>
              <button className="shorts-subscribe-btn">
                <Sparkles size={16} />
                Subscribe
              </button>
            </div>

            <p className="shorts-description">{short.description}</p>

            <div className="shorts-hashtags">
              {short.hashtags.map((tag, idx) => (
                <span key={idx} className="shorts-hashtag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="shorts-stats-row">
              <div className="stat-item">
                <BarChart2 size={14} />
                <span>{short.views} views</span>
              </div>
              <div className="stat-item">
                <Zap size={14} />
                <span>Trending #3</span>
              </div>
            </div>
          </div>

          {/* Center play/pause button with advanced animation */}
          <button
            className="shorts-center-play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <div className="play-btn-ripple"></div>
            {isPlaying ? (
              <Pause size={56} fill="white" />
            ) : (
              <Play size={56} fill="white" />
            )}
          </button>

          {/* Volume control */}
          <button
            className="shorts-volume-btn"
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute (M)" : "Mute (M)"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {/* Advanced progress bar */}
          <div className="shorts-progress-bar">
            <div
              className="shorts-progress-fill"
              style={{ width: `${currentProgress}%` }}
            ></div>
            <div className="progress-hover-tooltip">
              {Math.round(currentProgress)}%
            </div>
          </div>
        </div>

        {/* Right side actions panel - ADVANCED */}
        <div className="shorts-actions-panel">
          {actionButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                className={`shorts-action-btn ${
                  btn.id === "like" && liked ? "liked" : ""
                } ${hoveredAction === btn.id ? "hovered" : ""}`}
                onClick={() => {
                  if (btn.id === "like") toggleLike();
                }}
                onMouseEnter={() => setHoveredAction(btn.id)}
                onMouseLeave={() => setHoveredAction(null)}
                title={btn.label}
              >
                <div className="action-btn-glow"></div>
                <Icon
                  size={32}
                  fill={btn.id === "like" && liked ? "currentColor" : "none"}
                />
                <span className="shorts-action-count">
                  {typeof btn.count === "string" ? btn.count : btn.count}
                </span>
                {hoveredAction === btn.id && (
                  <span className="action-label">{btn.label}</span>
                )}
              </button>
            );
          })}

          {/* More actions with dropdown */}
          <button className="shorts-action-btn shorts-more-actions">
            <MoreVertical size={32} />
            <span className="shorts-action-count">More</span>
          </button>
        </div>

        {/* Navigation buttons - ADVANCED */}
        <div className="shorts-navigation">
          <button
            className="shorts-nav-btn shorts-nav-prev"
            onClick={goToPreviousShort}
            title="Previous (↑)"
          >
            <span className="nav-icon">▲</span>
            <span className="nav-text">PREVIOUS</span>
          </button>

          {/* Dots indicator - ADVANCED */}
          <div className="shorts-indicators">
            {shorts.map((_, idx) => (
              <button
                key={idx}
                className={`shorts-dot ${
                  idx === currentShortIndex ? "active" : ""
                }`}
                onClick={() => setCurrentShortIndex(idx)}
                aria-label={`Go to short ${idx + 1}`}
              >
                <span className="dot-inner"></span>
              </button>
            ))}
          </div>

          <button
            className="shorts-nav-btn shorts-nav-next"
            onClick={goToNextShort}
            title="Next (↓)"
          >
            <span className="nav-text">NEXT</span>
            <span className="nav-icon">▼</span>
          </button>
        </div>

        {/* Like animation effect */}
        {showLikeAnimation && (
          <div className="like-animation">
            <Heart size={100} fill="#ff0000" color="#ff0000" />
          </div>
        )}

        {/* Keyboard hint - ADVANCED */}
        <div className="shorts-keyboard-hint">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> Navigate •<kbd>Space</kbd> Play/Pause •
            <kbd>M</kbd> Mute
          </span>
        </div>

        {/* Video info card */}
        <div className="shorts-video-info-card">
          <div className="info-card-content">
            <h3>Playing Now</h3>
            <p>{short.title}</p>
            <p className="info-channel">{short.channel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortsPage;
