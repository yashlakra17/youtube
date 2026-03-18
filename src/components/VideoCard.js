import React, { useState } from 'react';
import { Play, MoreVertical, Share2, Flag, Clock, CheckCircle } from 'lucide-react';
import '../styles/Components.css';

const VideoCard = ({ video, onClick, style, isCompact = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (isCompact) {
    return (
      <div className="video-card-compact" onClick={onClick} style={style}>
        <div className="video-thumbnail-compact">
          <img src={video.thumbnail} alt={video.title} loading="lazy" />
          <div className="duration-badge-compact">{video.duration}</div>
          <div className="video-overlay-compact">
            <Play size={32} fill="white" color="white" />
          </div>
        </div>
        <div className="video-info-compact">
          <h4>{video.title}</h4>
          <p className="channel-info-compact">
            {video.channel}
            {video.verified && <CheckCircle size={12} className="verified-icon" />}
          </p>
          <p className="stats-compact">{video.views} • {video.uploadedAt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-card-full" onClick={onClick} style={style}>
      <div className="video-thumbnail-full">
        <img src={video.thumbnail} alt={video.title} loading="lazy" />
        <div className="duration-badge">{video.duration}</div>

        <div className="video-menu">
          <button
            className="menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
          >
            <MoreVertical size={20} />
          </button>
          {showMenu && (
            <div className="dropdown-menu-video">
              <div className="menu-item" onClick={() => setIsLiked(!isLiked)}>
                <span>{isLiked ? '❤️' : '🤍'} {isLiked ? 'Liked' : 'Like'}</span>
              </div>
              <div className="menu-item">
                <Share2 size={16} /> Share
              </div>
              <div className="menu-item">
                <Clock size={16} /> Save to playlist
              </div>
              <div className="menu-item report">
                <Flag size={16} /> Report
              </div>
            </div>
          )}
        </div>

        <div className="video-overlay">
          <Play size={48} fill="white" color="white" />
        </div>
      </div>

      <div className="video-info-full">
        <div className="video-header">
          <img src={video.channelImage} alt={video.channel} className="channel-avatar" />
          <div className="video-details">
            <h3>{video.title}</h3>
            <p className="channel-name">
              {video.channel}
              {video.verified && <CheckCircle size={14} className="verified-check" />}
            </p>
            <p className="stats">{video.views} views • {video.uploadedAt}</p>
          </div>
        </div>

        {video.description && (
          <p className="video-description">{video.description}</p>
        )}

        {video.tags && (
          <div className="video-tags">
            {video.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;