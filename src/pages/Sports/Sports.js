import React, { useState } from "react";
import { Heart, Share2, MoreVertical, Play } from "lucide-react";
import "./Sports.css";

const Sports = () => {
  const [sports] = useState([
    {
      id: 1,
      title: "Cricket World Cup Final 2024",
      channel: "Sports Network",
      views: "45M",
      thumbnail:
        "https://i.ytimg.com/vi/SbP1CN4rTlo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCUH7BQxy55Ip2_q1JSnPavd33lMg",
      sport: "cricket",
    },
    {
      id: 2,
      title: "Football Champions League",
      channel: "Sports Pro",
      views: "32M",
      thumbnail:
        "https://i.ytimg.com/vi/tAteJuhPxTc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARuqbigFirxl-AwwOmFeL5ucwZiw",
      sport: "football",
    },
    {
      id: 3,
      title: "Tennis Grand Slam",
      channel: "Tennis Channel",
      views: "18M",
      thumbnail:
        "https://i.ytimg.com/vi/TDdEVBgDqK4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA94gmInFgVSA0jKQUQuaKCw7jZ-g",
      sport: "tennis",
    },
    {
      id: 4,
      title: "Basketball NBA Finals",
      channel: "NBA Official",
      views: "28M",
      thumbnail:
        "https://i.ytimg.com/vi/AOYACk7m7Fk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB6VamG1zIcdMX1AzXjOZT9D74oWQ",
      sport: "basketball",
    },
    {
      id: 5,
      title: "Baseball World Series",
      channel: "MLB",
      views: "22M",
      thumbnail:
        "https://i.ytimg.com/vi/3NIjRNSsb7c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAqkM5XfOn6ylDo6qJSAlUT1-Xg0w",
      sport: "baseball",
    },
    {
      id: 6,
      title: "Hockey Stanley Cup",
      channel: "NHL Official",
      views: "15M",
      thumbnail:
        "https://i.ytimg.com/vi/ewATIXEdUMU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwo-lUUPMmhykGa7UW_rWcgIjdww",
      sport: "hockey",
    },
    {
      id: 7,
      title: "WWE| Best of Brock Lesnar",
      channel: "WWE Official",
      views: "12M",
      thumbnail:
        "https://i.ytimg.com/vi/fKWk_abBMyI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLADnWmwaLAS2OPJKDPtDwOkFTzEXQ",
      sport: "wrestling",
    },
    {
      id: 8,
      title: "Dean Ambrose vs. Brock Lesnar - No Holds Barred Street Fight: WrestleMania 32 on WWE Network",
      channel: "WWE Official",
      views: "10M",
      thumbnail:"https://i.ytimg.com/vi/Q_fnzeDCiWo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD99yslX26s2fc6kTlTpyqusxz-Pg",
      sport: "wrestling",

    },
    {
      id: 9,
      title: "Baki Vs. Yujiro Hanma - Full Fight | Baki: The Son of Ogre",
      channel: "Anime Studio",
      views: "8M",
      thumbnail:
        "https://i.ytimg.com/vi/n0VbOI8tl3I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBKyROL4ujDvvNdLU-w7vuB5KX6CQ",
      sport: "anime",
    }
  ]);

  return (
    <div className="sports-container">
      <div className="sports-header">
        <h1>🏆 Sports</h1>
      </div>

      <div className="sports-grid">
        {sports.map((item, index) => (
          <div
            key={item.id}
            className="sports-card"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="sports-thumbnail">
              <img src={item.thumbnail} alt={item.title} />
              <div className="overlay">
                <button className="play-btn">
                  <Play size={32} fill="white" />
                </button>
              </div>
              <span className="trophy-badge">🏆</span>
            </div>
            <div className="sports-info">
              <h3>{item.title}</h3>
              <p className="channel">{item.channel}</p>
              <p className="views">{item.views} views</p>
              <div className="actions">
                <button className="btn">
                  <Heart size={18} />
                </button>
                <button className="btn">
                  <Share2 size={18} />
                </button>
                <button className="btn">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
