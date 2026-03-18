import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Download,
  MoreVertical,
  Send,
  Copy,
  Check,
} from "lucide-react";
import "./Videoplayer.css";

const VideoPlayer = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(70);
  const [quality, setQuality] = useState("720p");
  const [playbackSpeed, setPlaybackSpeed] = useState("1");
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [sleepTimer, setSleepTimer] = useState("off");
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      avatar: "https://i.pravatar.cc/48?img=1",
      text: "Amazing movie! Loved every moment of it.",
      timestamp: "2 days ago",
      likes: 234,
    },
    {
      id: 2,
      author: "Sarah Smith",
      avatar: "https://i.pravatar.cc/48?img=2",
      text: "Best film of 2024! Highly recommended.",
      timestamp: "1 day ago",
      likes: 156,
    },
    {
      id: 3,
      author: "Mike Johnson",
      avatar: "https://i.pravatar.cc/48?img=3",
      text: "The cinematography is absolutely stunning.",
      timestamp: "12 hours ago",
      likes: 89,
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const relatedVideos = [
    {
      id: "r1",
      title: "Best Action Movies 2024 - Full Hindi Movies",
      channel: "Ultra Action Hits",
      views: "2.3M",
      uploadedAt: "2 weeks ago",
      duration: "2:15:30",
      thumbnail: "https://i.ytimg.com/vi/V75c6n4rXlQ/hq720.jpg",
    },
    {
      id: "r2",
      title: "Romantic Comedy Hindi Full Movies",
      channel: "Movie Hub",
      views: "1.8M",
      uploadedAt: "1 week ago",
      duration: "1:50:20",
      thumbnail: "https://i.ytimg.com/vi/oafxkMv4xnc/hq720.jpg",
    },
    {
      id: "r3",
      title: "Top 10 Bollywood Blockbusters",
      channel: "Cinema Central",
      views: "5.2M",
      uploadedAt: "3 days ago",
      duration: "45:30",
      thumbnail: "https://i.ytimg.com/vi/JSLHveDmdjY/hq720.jpg",
    },
    {
      id: "r4",
      title: "Latest Movie Trailers 2024",
      channel: "Movie Trailers Daily",
      views: "890K",
      uploadedAt: "5 days ago",
      duration: "28:15",
      thumbnail: "https://i.ytimg.com/vi/q9HOtPm89p0/hq720.jpg",
    },
    {
      id: "r5",
      title: "Behind The Scenes - Film Making",
      channel: "Film Industry Secrets",
      views: "3.1M",
      uploadedAt: "1 month ago",
      duration: "35:45",
      thumbnail: "https://i.ytimg.com/vi/z1iJsPdrICY/hq720.jpg",
    },
    {
      id: "r6",
      title: "Bollywood Stars Interview",
      channel: "Star Interview Show",
      views: "4.5M",
      uploadedAt: "2 weeks ago",
      duration: "52:20",
      thumbnail: "https://i.ytimg.com/vi/zBHKxgO9k4g/hq720.jpg",
    },
  ];

  const handleLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      setLiked(false);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        {
          id: comments.length + 1,
          author: "You",
          avatar: "https://i.pravatar.cc/48?img=0",
          text: newComment,
          timestamp: "now",
          likes: 0,
        },
        ...comments,
      ]);
      setNewComment("");
    }
  };

  const copyToClipboard = () => {
    const videoUrl = `https://youtube.com/watch?v=${video.id}`;
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getQualityBlur = () => {
    if (quality === "480p") return "blur(8px)";
    if (quality === "720p") return "blur(4px)";
    if (quality === "1080p") return "blur(0px)";
    return "blur(0px)";
  };

  return (
    <div className="video-player-page">
      <button className="player-close-btn" onClick={onClose} title="Close">
        ✕
      </button>

      <div className="player-container">
        {/* Main Video Player */}
        <div className="video-player-wrapper">
          <div className="video-player">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="player-image"
              style={{
                filter: getQualityBlur(),
                cursor: "pointer",
                transform: isImageExpanded ? "scale(1.3)" : "scale(1)",
              }}
              onClick={() => setIsImageExpanded(!isImageExpanded)}
            />
            {isPlaying && <div className="play-overlay"></div>}
            <button
              className="play-btn-large"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause size={64} />
              ) : (
                <Play size={64} fill="white" />
              )}
            </button>

            {/* Quality Indicator */}
            <div className="quality-indicator">{quality}</div>

            {/* Video Controls */}
            <div className="video-controls">
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                  onClick={(e) => {
                    const rect =
                      e.currentTarget.parentElement.getBoundingClientRect();
                    const newProgress =
                      ((e.clientX - rect.left) / rect.width) * 100;
                    setProgress(newProgress);
                  }}
                >
                  <div className="progress-handle"></div>
                </div>
              </div>

              <div className="controls-bottom">
                <div className="left-controls">
                  <button
                    className="control-btn"
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} fill="white" />
                    )}
                  </button>

                  {/* Volume Control */}
                  <div className="volume-control">
                    <button
                      className="control-btn"
                      onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    {showVolumeSlider && (
                      <div className="volume-slider">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            setVolume(Number(e.target.value));
                            setIsMuted(false);
                          }}
                          className="slider"
                        />
                      </div>
                    )}
                  </div>
                  <span className="time-display">1:18:32 / 2:21:44</span>
                </div>

                <div className="right-controls">
                  <button
                    className="control-btn"
                    onClick={() => setShowSettings(!showSettings)}
                    title="Settings"
                  >
                    <Settings size={20} />
                  </button>
                  <button className="control-btn" title="Fullscreen">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>

              {/* Settings Menu */}
              {showSettings && (
                <div className="settings-menu">
                  <div className="settings-item">
                    <span>Playback Speed</span>
                    <div className="settings-options">
                      {["0.5", "0.75", "1", "1.25", "1.5", "2"].map((speed) => (
                        <button
                          key={speed}
                          className={`option-btn ${playbackSpeed === speed ? "active" : ""}`}
                          onClick={() => setPlaybackSpeed(speed)}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="settings-item">
                    <span>Quality</span>
                    <div className="settings-options">
                      {["480p", "720p", "1080p"].map((q) => (
                        <button
                          key={q}
                          className={`option-btn ${quality === q ? "active" : ""}`}
                          onClick={() => setQuality(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="settings-item">
                    <span>Subtitles</span>
                    <button
                      className={`toggle-btn ${showSubtitles ? "on" : "off"}`}
                      onClick={() => setShowSubtitles(!showSubtitles)}
                    >
                      {showSubtitles ? "ON" : "OFF"}
                    </button>
                  </div>
                  <div className="settings-item">
                    <span>Sleep Timer</span>
                    <div className="settings-options">
                      {["off", "15m", "30m", "1h", "2h"].map((timer) => (
                        <button
                          key={timer}
                          className={`option-btn ${sleepTimer === timer ? "active" : ""}`}
                          onClick={() => setSleepTimer(timer)}
                        >
                          {timer}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video Title & Meta (Below Player) */}
          <div className="video-info-below">
            <h1 className="video-title-below">{video.title}</h1>
            <div className="video-meta-below">
              <span className="views">{video.views} views</span>
              <span className="separator">•</span>
              <span className="uploaded">{video.uploadedAt}</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="player-sidebar">
          {/* Action Buttons - TOP OF SIDEBAR */}
          <div className="action-buttons-sidebar">
            <button
              className={`action-btn like-btn ${liked ? "liked" : ""}`}
              onClick={handleLike}
              title="Like"
            >
              <ThumbsUp size={20} />
              <span>Like</span>
            </button>
            <button
              className={`action-btn dislike-btn ${disliked ? "disliked" : ""}`}
              onClick={handleDislike}
              title="Dislike"
            >
              <ThumbsDown size={20} />
              <span>Dislike</span>
            </button>
            <button
              className="action-btn share-btn"
              onClick={() => setShowShareMenu(!showShareMenu)}
              title="Share"
            >
              <Share2 size={20} />
              <span>Share</span>
            </button>
            <button className="action-btn download-btn" title="Download">
              <Download size={20} />
              <span>Download</span>
            </button>
            <button className="action-btn more-btn" title="More">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Share Menu */}
          {showShareMenu && (
            <div className="share-menu">
              <div className="share-title">Share this video</div>
              <div className="share-options">
                <a
                  href="https://wa.me/?text=Check this out!"
                  className="share-option whatsapp"
                  title="WhatsApp"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com"
                  className="share-option instagram"
                  title="Instagram"
                >
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  className="share-option facebook"
                  title="Facebook"
                >
                  <span>👍</span>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  className="share-option twitter"
                  title="Twitter"
                >
                  <span>𝕏</span>
                  <span>Twitter</span>
                </a>
              </div>
              <div className="share-copy">
                <input
                  type="text"
                  value={`https://youtube.com/watch?v=${video.id}`}
                  readOnly
                  className="copy-input"
                />
                <button className="copy-btn" onClick={copyToClipboard}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          )}

          {/* Channel Info */}
          <div className="channel-info-sidebar">
            <div className="channel-header">
              <img
                src="https://yt4.ggpht.com/ytc/AOLBM"
                alt="Channel"
                className="channel-avatar"
              />
              <div className="channel-details">
                <h3 className="channel-name">Ultra Action Hits</h3>
                <p className="channel-subs">9.3M subscribers</p>
              </div>
            </div>
            <button
              className={`subscribe-btn ${subscribed ? "subscribed" : ""}`}
              onClick={() => setSubscribed(!subscribed)}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
            <p className="video-description">
              Watch the Latest Movie 🎬 Bubble Gum | Roshan Kanakala, Maanasa
              Chowdary, Harsha Chemudu | Romantic Action Movie
              <br />
              <br />
              Movie: Bubblegum Starring: Roshan Kanakala, Maanasa Chowdary,
              Harsha Chemudu, Kiran Macha, Anannyaa Akulaa Director: Ravikanth
              Perepu
              <br />
              <br />
              ✅ Click the Bell icon for more updates ✅ Subscribe to our
              channel for latest movie releases
              <br />
              <br />
              #BubbleGum #LatestMovies #HindiDubbedMovies
            </p>
          </div>

          {/* Comments Section */}
          <div className="comments-section-sidebar">
            <div className="comments-header">
              <h2 className="comments-title">Comments ({comments.length})</h2>
              <button
                className={`comments-toggle ${showComments ? "open" : ""}`}
                onClick={() => setShowComments(!showComments)}
              >
                <MessageSquare size={20} />
              </button>
            </div>

            {showComments && (
              <div className="comments-content">
                {/* Add Comment */}
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleAddComment();
                    }}
                    className="comment-input"
                  />
                  <button className="send-btn" onClick={handleAddComment}>
                    <Send size={18} />
                  </button>
                </div>

                {/* Comments List */}
                <div className="comments-list">
                  {comments.map((comment) => (
                    <div key={comment.id} className="comment-card">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="comment-avatar"
                      />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">
                            {comment.author}
                          </span>
                          <span className="comment-time">
                            {comment.timestamp}
                          </span>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                        <div className="comment-actions">
                          <button className="comment-action-btn">
                            👍 {comment.likes}
                          </button>
                          <button className="comment-action-btn">👎</button>
                          <button className="comment-action-btn">
                            💬 Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Videos Section */}
          <div className="related-videos-section-sidebar">
            <h2 className="related-title">More Videos Like This</h2>
            <div className="related-videos-grid">
              {relatedVideos.map((relatedVideo) => (
                <div key={relatedVideo.id} className="related-video-card">
                  <div className="related-thumbnail">
                    <img
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                    />
                    <span className="duration-badge">
                      {relatedVideo.duration}
                    </span>
                  </div>
                  <div className="related-info">
                    <h4 className="related-title-small">
                      {relatedVideo.title}
                    </h4>
                    <p className="related-channel">{relatedVideo.channel}</p>
                    <p className="related-stats">
                      {relatedVideo.views} • {relatedVideo.uploadedAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
