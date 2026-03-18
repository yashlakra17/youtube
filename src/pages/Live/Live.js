import React, { useState } from "react";
import { Heart, Share2, MessageCircle, Bell, Play } from "lucide-react";
import "./Live.css";

const Live = () => {
  const [liveStreams, setLiveStreams] = useState([
    {
      id: 1,
      title: "Jonathan Gaming",
      channel: "Jonathan Gamer",
      viewers: "17M",
      thumbnail:
        "https://i.ytimg.com/vi/uI1tl5PuU6U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDk0OHKqYMnPxhmzsTG9pofU9yMZA",
      live: true,
    },
    {
      id: 2,
      title: "Welcome to Demon School | Anime Marathon",
      channel: "Anime World",
      viewers: "78K",
      thumbnail:
        "https://i.ytimg.com/vi/Sm9HXIQGShg/hq720.jpg?v=69b39213&sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAswAse2O49bcOHFSec1vRxXn6t1Q",
      live: true,
    },
    {
      id: 3,
      title: "Talk Show Discussion",
      channel: "Talk Master",
      viewers: "32K",
      thumbnail:
        "https://i.ytimg.com/vi/DFYaNjzI1aI/hq720.jpg?v=662ccb08&sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8YVuj3ocdYjBa20WISOTRnwsbWA",
      live: true,
    },
    {
      id: 4,
      title: "Cooking Show Live",
      channel: "Chef Master",
      viewers: "18K",
      thumbnail:
        "https://i.ytimg.com/vi/tEh8JHKqqWY/hq720.jpg?v=69361318&sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC3n0p712s3nd_4TCKrx1N0LjseQA",
      live: true,
    },
  ]);

  return (
    <div className="live-container">
      <div className="live-header">
        <h1>🔴 Live</h1>
        <div className="live-badge">LIVE NOW</div>
      </div>

      <div className="live-streams">
        {liveStreams.map((stream, index) => (
          <div
            key={stream.id}
            className="live-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="live-thumbnail">
              <img src={stream.thumbnail} alt={stream.title} />
              <div className="live-indicator">
                <span className="live-dot"></span>
                LIVE
              </div>
              <div className="live-overlay">
                <button className="play-btn-live">
                  <Play size={40} fill="white" />
                </button>
              </div>
              <div className="viewers-badge">{stream.viewers}</div>
            </div>
            <div className="live-info">
              <h3>{stream.title}</h3>
              <p className="channel">{stream.channel}</p>
              <p className="viewers">👥 {stream.viewers} watching</p>
              <div className="live-actions">
                <button className="btn">
                  <Heart size={18} />
                </button>
                <button className="btn">
                  <Bell size={18} />
                </button>
                <button className="btn">
                  <MessageCircle size={18} />
                </button>
                <button className="btn">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
