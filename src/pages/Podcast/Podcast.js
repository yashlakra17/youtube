import React, { useState } from 'react';
import { Play, ChevronRight, Heart } from 'lucide-react';
import './Podcasts.css';

const Podcasts = () => {
  const [expandedRows, setExpandedRows] = useState({
    newShows: false,
    popular: false,
    trending: false,
    recommended: false,
  });

  const allPodcasts = [
    {
      id: 1,
      title: 'Learn By KK Create Podcast',
      creator: 'Learn By KK Create',
      episodes: 4,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=280&fit=crop',
      category: 'Education',
    },
    {
      id: 2,
      title: 'Friends Keep Secrets Podcast',
      creator: 'Friends Keep Secrets',
      episodes: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=280&fit=crop',
      category: 'Entertainment',
    },
    {
      id: 3,
      title: 'Isha Vibes Podcast',
      creator: 'Isha Foundation',
      episodes: 3,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=280&fit=crop',
      category: 'Wellness',
    },
    {
      id: 4,
      title: 'The Podcast Show with NTV Telugu',
      creator: 'NTV Telugu',
      episodes: 43,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=280&fit=crop',
      category: 'News',
    },
    {
      id: 5,
      title: 'Pink Podcast',
      creator: 'Pink Podcast',
      episodes: 11,
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=280&fit=crop',
      category: 'Entertainment',
    },
    {
      id: 6,
      title: 'BMC के बाद मेयर पर सस्पेंच',
      creator: 'Political Forum',
      episodes: 24,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=280&fit=crop',
      category: 'Politics',
    },
    {
      id: 7,
      title: 'History Uncovered Podcast',
      creator: 'History Experts',
      episodes: 156,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=280&fit=crop',
      category: 'History',
    },
    {
      id: 8,
      title: 'Podcast Every Tuesday Thursday',
      creator: 'Tuesday Talks',
      episodes: 89,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=280&fit=crop',
      category: 'Lifestyle',
    },
    {
      id: 9,
      title: 'Business Success Stories',
      creator: 'Business Network',
      episodes: 67,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=280&fit=crop',
      category: 'Business',
    },
    {
      id: 10,
      title: 'Tech Talks Daily',
      creator: 'Tech Innovators',
      episodes: 234,
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=280&fit=crop',
      category: 'Technology',
    },
    {
      id: 11,
      title: 'Comedy Hour Podcast',
      creator: 'Laugh Factory',
      episodes: 112,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=280&fit=crop',
      category: 'Comedy',
    },
    {
      id: 12,
      title: 'Health & Wellness Hub',
      creator: 'Dr. Wellness',
      episodes: 98,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=280&fit=crop',
      category: 'Health',
    },
    {
      id: 13,
      title: 'Music Production Secrets',
      creator: 'Producer Elite',
      episodes: 145,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=280&fit=crop',
      category: 'Music',
    },
    {
      id: 14,
      title: 'Travel Adventures Now',
      creator: 'Wanderlust Crew',
      episodes: 73,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=280&fit=crop',
      category: 'Travel',
    },
    {
      id: 15,
      title: 'Sports Talk Tonight',
      creator: 'Sports Network',
      episodes: 287,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=280&fit=crop',
      category: 'Sports',
    },
    {
      id: 16,
      title: 'Startup Journey Podcast',
      creator: 'Entrepreneur Hub',
      episodes: 56,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=280&fit=crop',
      category: 'Business',
    },
    {
      id: 17,
      title: 'Movie Reviews Daily',
      creator: 'Film Critics',
      episodes: 189,
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=280&fit=crop',
      category: 'Entertainment',
    },
    {
      id: 18,
      title: 'Self Improvement Daily',
      creator: 'Success Coach',
      episodes: 134,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=280&fit=crop',
      category: 'Lifestyle',
    },
    {
      id: 19,
      title: 'Science Explained Podcast',
      creator: 'Science Lab',
      episodes: 198,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=280&fit=crop',
      category: 'Education',
    },
    {
      id: 20,
      title: 'Gaming Zone Podcast',
      creator: 'Gaming Masters',
      episodes: 267,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=280&fit=crop',
      category: 'Gaming',
    },
  ];

  const sections = [
    { id: 'newShows', title: 'New Shows & Episodes', podcasts: allPodcasts.slice(0, 5) },
    { id: 'popular', title: 'Popular podcasts', podcasts: allPodcasts.slice(5, 10) },
    { id: 'trending', title: 'Trending Now', podcasts: allPodcasts.slice(10, 15) },
    { id: 'recommended', title: 'Recommended For You', podcasts: allPodcasts.slice(15, 20) },
  ];

  const toggleExpanded = (sectionId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const PodcastCard = ({ podcast }) => (
    <div className="podcast-card">
      <div className="podcast-image">
        <img src={podcast.image} alt={podcast.title} />
        <div className="podcast-overlay">
          <button className="play-button">
            <Play size={32} fill="white" color="white" />
          </button>
        </div>
        <div className="episodes-badge">{podcast.episodes} episodes</div>
      </div>
      <div className="podcast-info">
        <h3>{podcast.title}</h3>
        <p className="creator">{podcast.creator}</p>
        <p className="category">{podcast.category}</p>
      </div>
      <button className="like-button" title="Add to library">
        <Heart size={20} />
      </button>
    </div>
  );

  return (
    <div className="podcasts-container">
      {/* Header */}
      <div className="podcasts-header">
        <div className="header-content">
          <div className="podcast-icon">🎙️</div>
          <h1>Podcasts</h1>
        </div>
      </div>

      {/* Sections */}
      <div className="podcasts-sections">
        {sections.map((section) => (
          <div key={section.id} className="podcast-section">
            {/* Section Title */}
            <div className="section-header">
              <h2>{section.title}</h2>
            </div>

            {/* Podcast Grid - First Row (5 items) */}
            <div className="podcast-row">
              {section.podcasts.slice(0, 5).map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>

            {/* Show More Button */}
            <button
              className="show-more-btn"
              onClick={() => toggleExpanded(section.id)}
            >
              <span>{expandedRows[section.id] ? 'Show less' : 'Show more'}</span>
              <ChevronRight size={20} className={expandedRows[section.id] ? 'rotated' : ''} />
            </button>

            {/* Expanded Row (Additional 5 items) */}
            {expandedRows[section.id] && section.podcasts.length > 5 && (
              <div className="podcast-row expanded-row">
                {section.podcasts.slice(5).map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;