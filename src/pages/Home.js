import React, { useState, useEffect } from 'react';
import { Play, MoreVertical, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import VideoPlayer from './Videoplayer/Videoplayer';
import '../styles/Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [shortsOffsets, setShortsOffsets] = useState({ row2: 0, row5: 0, row8: 0, row10: 0 });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'music', label: 'Music' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'animation', label: 'Animation' },
    { id: 'education', label: 'Education' },
    { id: 'comedy', label: 'Comedy' },
    { id: 'sports', label: 'Sports' },
  ];

  const mockVideos = [
    {
      id: '1',
      title: 'Bairan - Animated Love Story',
      channel: 'Banjaare',
      views: '11M',
      uploadedAt: '1 month ago',
      duration: '2:29',
      thumbnail: 'https://i.ytimg.com/vi/xIqp1wx1tWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAlqbWDlB6lxp-MaJXKuOgUyGbbvA',
      category: 'animation',
      verified: true,
    },
    {
      id: '2',
      title: 'Dhurandhar Vs Toxic: The Battle',
      channel: 'Purav Jha',
      views: '1.4M',
      uploadedAt: '21 hours ago',
      duration: '27:45',
      thumbnail: 'https://i.ytimg.com/vi/q9HOtPm89p0/hq720.jpg',
      category: 'gaming',
      verified: true,
    },
    {
      id: '3',
      title: 'Piya Ghar Aavenge - Lyrical Video',
      channel: 'Kailash Kher',
      views: '890K',
      uploadedAt: '3 days ago',
      duration: '5:12',
      thumbnail: 'https://i.ytimg.com/vi/V_Kr9OSfDeU/maxresdefault.jpg',
      category: 'music',
      verified: true,
    },
    {
      id: '4',
      title: 'Desi Friends With Benefits',
      channel: 'CarryMinati',
      views: '12M',
      uploadedAt: '1 month ago',
      duration: '12:58',
      thumbnail: 'https://i.ytimg.com/vi/z1iJsPdrICY/hq720.jpg',
      category: 'comedy',
      verified: true,
    },
    {
      id: '5',
      title: 'I Survived 100 Days in Minecraft',
      channel: 'BrainDead Boy',
      views: '9.7M',
      uploadedAt: '3 years ago',
      duration: '25:41',
      thumbnail: 'https://i.ytimg.com/vi/zBHKxgO9k4g/hq720.jpg',
      category: 'gaming',
      verified: true,
    },
    {
      id: '6',
      title: 'School Trip Adventure',
      channel: 'SSS EDITZ',
      views: '311K',
      uploadedAt: '9 days ago',
      duration: '8:52',
      thumbnail: 'https://i.ytimg.com/vi/UsjM9RE7u3Y/hqdefault.jpg',
      category: 'comedy',
      verified: false,
    },
    {
      id: '7',
      title: 'Advanced Web Development',
      channel: 'Code Masters',
      views: '2.3M',
      uploadedAt: '5 days ago',
      duration: '15:20',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      category: 'education',
      verified: true,
    },
    {
      id: '8',
      title: 'Best Gaming Moments 2024',
      channel: 'Pro Gamer',
      views: '5.8M',
      uploadedAt: '2 days ago',
      duration: '18:45',
      thumbnail: 'https://images.unsplash.com/photo-1535016120754-fd45c1d4a1f9?w=500&h=300&fit=crop',
      category: 'gaming',
      verified: true,
    },
    {
      id: '9',
      title: 'Latest Music Hits',
      channel: 'Music Hub',
      views: '8.2M',
      uploadedAt: '3 hours ago',
      duration: '8:15',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop',
      category: 'music',
      verified: true,
    },
  ];

  const mockShorts = [
    { 
      id: 's1', 
      title: 'React Tips & Tricks 💻', 
      duration: '0:45', 
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=800&fit=crop',
      channel: '@ReactTips',
      views: '2.1M',
      category: 'coding'
    },
    { 
      id: 's2', 
      title: 'CSS Animations Guide ✨', 
      duration: '0:30', 
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=800&fit=crop',
      channel: '@CSSMaster',
      views: '1.8M',
      category: 'coding'
    },
    { 
      id: 's3', 
      title: 'JavaScript Hacks 🔥', 
      duration: '0:50', 
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=800&fit=crop',
      channel: '@CodeMaster',
      views: '3.2M',
      category: 'coding'
    },
    { 
      id: 's4', 
      title: 'Web Dev Pro Tips 🚀', 
      duration: '0:40', 
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=800&fit=crop',
      channel: '@WebDev',
      views: '890K',
      category: 'coding'
    },
    { 
      id: 's5', 
      title: 'Advanced Coding 🎯', 
      duration: '0:35', 
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=800&fit=crop',
      channel: '@DevTips',
      views: '1.5M',
      category: 'coding'
    },
    { 
      id: 's6', 
      title: 'Gaming Highlights 🎮', 
      duration: '0:42', 
      thumbnail: 'https://images.unsplash.com/photo-1535016120754-fd45c1d4a1f9?w=500&h=800&fit=crop',
      channel: '@ProGamer',
      views: '2.4M',
      category: 'gaming'
    },
    { 
      id: 's7', 
      title: 'Music Production 🎵', 
      duration: '0:48', 
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=800&fit=crop',
      channel: '@MusicPro',
      views: '1.2M',
      category: 'music'
    },
    { 
      id: 's8', 
      title: 'Fitness Motivation 💪', 
      duration: '0:55', 
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=800&fit=crop',
      channel: '@FitLife',
      views: '2.8M',
      category: 'fitness'
    },
    { 
      id: 's9', 
      title: 'Travel Vlog 🌍', 
      duration: '0:52', 
      thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=800&fit=crop',
      channel: '@Wanderlust',
      views: '1.9M',
      category: 'travel'
    },
    { 
      id: 's10', 
      title: 'Food Shorts 🍕', 
      duration: '0:38', 
      thumbnail: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=800&fit=crop',
      channel: '@FoodieLife',
      views: '3.5M',
      category: 'food'
    },
    { 
      id: 's11', 
      title: 'Fashion Tutorial 👗', 
      duration: '0:44', 
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=800&fit=crop',
      channel: '@StyleGoal',
      views: '2.2M',
      category: 'fashion'
    },
    { 
      id: 's12', 
      title: 'Tech Review 💻', 
      duration: '0:36', 
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=800&fit=crop',
      channel: '@TechReview',
      views: '4.1M',
      category: 'tech'
    },
    { 
      id: 's13', 
      title: 'Design Tips 🎨', 
      duration: '0:41', 
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=800&fit=crop',
      channel: '@DesignMaster',
      views: '1.7M',
      category: 'design'
    },
    { 
      id: 's14', 
      title: 'Photography Guide 📸', 
      duration: '0:47', 
      thumbnail: 'https://images.unsplash.com/photo-1617638924702-92f37fcb0f33?w=500&h=800&fit=crop',
      channel: '@PhotoPro',
      views: '2.6M',
      category: 'photography'
    },
    { 
      id: 's15', 
      title: 'Nature Documentary 🌿', 
      duration: '0:39', 
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=800&fit=crop',
      channel: '@NatureChannel',
      views: '3.8M',
      category: 'nature'
    },
    { 
      id: 's16', 
      title: 'Dance Challenge 💃', 
      duration: '0:46', 
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=800&fit=crop',
      channel: '@DanceVibes',
      views: '4.3M',
      category: 'dance'
    },
    { 
      id: 's17', 
      title: 'Cooking Easy Recipe 🍳', 
      duration: '0:43', 
      thumbnail: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=800&fit=crop',
      channel: '@HomeChef',
      views: '3.1M',
      category: 'cooking'
    },
    { 
      id: 's18', 
      title: 'AI Tutorial 🤖', 
      duration: '0:37', 
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=800&fit=crop',
      channel: '@AIExperts',
      views: '2.9M',
      category: 'ai'
    },
    { 
      id: 's19', 
      title: 'Anime Review ✨', 
      duration: '0:49', 
      thumbnail: 'https://images.unsplash.com/photo-1489599810694-b5473e7eb244?w=500&h=800&fit=crop',
      channel: '@AnimeLounge',
      views: '3.4M',
      category: 'anime'
    },
    { 
      id: 's20', 
      title: 'Podcast Highlights 🎙️', 
      duration: '0:40', 
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=800&fit=crop',
      channel: '@PodcastDaily',
      views: '1.6M',
      category: 'podcast'
    },
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVideos(mockVideos);
    } else {
      setFilteredVideos(mockVideos.filter((v) => v.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handlePreviousShortsRow = (rowKey) => {
    setShortsOffsets(prev => ({
      ...prev,
      [rowKey]: Math.max(0, prev[rowKey] - 5)
    }));
  };

  const handleNextShortsRow = (rowKey) => {
    setShortsOffsets(prev => ({
      ...prev,
      [rowKey]: Math.min(mockShorts.length - 5, prev[rowKey] + 5)
    }));
  };

  const getVisibleShorts = (rowKey, startIndex = 0) => {
    const offset = shortsOffsets[rowKey] || startIndex;
    return mockShorts.slice(offset, offset + 5);
  };

  const ShortsRow = ({ title, rowKey, startIndex }) => {
    const visibleShorts = getVisibleShorts(rowKey, startIndex);
    return (
      <section className="shorts-section">
        <div className="shorts-header">
          <h2>{title}</h2>
          <div className="carousel-buttons">
            <button 
              className="carousel-btn prev-btn"
              onClick={() => handlePreviousShortsRow(rowKey)}
              disabled={(shortsOffsets[rowKey] || startIndex) === 0}
              title="Previous shorts"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="carousel-btn next-btn"
              onClick={() => handleNextShortsRow(rowKey)}
              disabled={(shortsOffsets[rowKey] || startIndex) >= mockShorts.length - 5}
              title="Next shorts"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="shorts-carousel-container">
          <div className="shorts-carousel-grid">
            {visibleShorts.map((short, index) => (
              <div key={short.id} className="carousel-short-item" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="short-card-wrapper">
                  <img src={short.thumbnail} alt={short.title} className="short-image" />
                  <div className="carousel-duration">{short.duration}</div>
                  <div className="carousel-overlay">
                    <div className="play-button-circle">
                      <Play size={40} fill="white" color="white" />
                    </div>
                  </div>
                  <div className="carousel-gradient-overlay"></div>
                  <div className="carousel-content">
                    <h4 className="carousel-title">{short.title}</h4>
                    <div className="carousel-meta">
                      <span className="carousel-channel">{short.channel}</span>
                      <span className="carousel-views">{short.views}</span>
                    </div>
                  </div>
                  <div className="short-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const VideosRow = ({ title, startId, count = 3 }) => {
    const videoSlice = filteredVideos.slice(startId, startId + count);
    return (
      <section className="videos-section">
        <div className="section-title">
          <Sparkles size={24} className="title-icon" />
          <h2>{title}</h2>
        </div>
        <div className="videos-grid">
          {videoSlice.map((video) => (
            <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="duration-badge">{video.duration}</div>
                <div className="video-overlay">
                  <Play size={48} fill="white" color="white" />
                </div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p className="channel">
                  {video.channel}
                  {video.verified && <span className="verified">✓</span>}
                </p>
                <p className="stats">{video.views} • {video.uploadedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="home-page">
      {/* CATEGORY PILLS */}
      <div className="categories-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ROW 1 - VIDEOS */}
      <VideosRow title="🔥 Recommended For You" startId={0} count={3} />

      {/* ROW 2 - SHORTS */}
      <ShortsRow title="⚡ Quick Shorts #1" rowKey="row2" startIndex={0} />

      {/* ROW 3 - VIDEOS */}
      <VideosRow title="🎵 Music & Audio" startId={3} count={3} />

      {/* ROW 4 - VIDEOS */}
      <VideosRow title="🎮 Gaming Central" startId={6} count={3} />

      {/* ROW 5 - SHORTS */}
      <ShortsRow title="✨ Viral Shorts #2" rowKey="row5" startIndex={5} />

      {/* ROW 6 - VIDEOS */}
      <VideosRow title="🌟 Trending Today" startId={0} count={3} />

      {/* ROW 7 - VIDEOS */}
      <VideosRow title="📺 Entertainment" startId={3} count={3} />

      {/* ROW 8 - SHORTS */}
      <ShortsRow title="🎬 Creator Picks #3" rowKey="row8" startIndex={10} />

      {/* ROW 9 - VIDEOS */}
      <VideosRow title="🏆 Popular This Week" startId={6} count={3} />

      {/* ROW 10 - SHORTS */}
      <ShortsRow title="💫 Must Watch #4" rowKey="row10" startIndex={0} />

      {/* VIDEO PLAYER */}
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
};

export default Home;