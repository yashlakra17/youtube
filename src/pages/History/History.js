import React, { useState, useEffect } from 'react';
import { Search, MoreVertical, Trash2, RotateCcw, Pause, Play, Settings, X } from 'lucide-react';
import './History.css';

const History = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [historyPaused, setHistoryPaused] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showDeletedItems, setShowDeletedItems] = useState([]);
  const [deletedHistory, setDeletedHistory] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showManageModal, setShowManageModal] = useState(false);

  // Mock history data
  const mockHistoryData = [
    {
      id: 1,
      title: 'Yuji destroy Sukuna #jujutsukaisen #anime',
      channel: '@AnimeChannel',
      views: '3.3M',
      date: 'Today',
      timestamp: new Date(),
      thumbnail: 'https://images.unsplash.com/photo-1578375050575-5b21e3f3f7a5?w=300&h=170&fit=crop',
      type: 'shorts',
      duration: '0:45',
    },
    {
      id: 2,
      title: '#anime #thedailylifeoftheimmortalsaga',
      channel: '@AnimeClips',
      views: '15M',
      date: 'Today',
      timestamp: new Date(),
      thumbnail: 'https://images.unsplash.com/photo-1577720643272-265f434e498a?w=300&h=170&fit=crop',
      type: 'shorts',
      duration: '0:58',
    },
    {
      id: 3,
      title: '8 Parche 🍃 songs without ...',
      channel: '@MusicCh',
      views: '17M',
      date: 'Today',
      timestamp: new Date(),
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=170&fit=crop',
      type: 'shorts',
      duration: '0:52',
    },
    {
      id: 4,
      title: 'Ghar se bahar nikal diya 😭 | most viral comed...',
      channel: '@ComedyClub',
      views: '280M',
      date: 'Today',
      timestamp: new Date(),
      thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=170&fit=crop',
      type: 'shorts',
      duration: '1:05',
    },
    {
      id: 5,
      title: 'Pov: That One Poor Friend 🍌😂 - Ekaki Edit | VAI VAI TRAIR (Slowed) | #ekaki #shorts',
      channel: 'PS Edits',
      views: '2.3M',
      date: 'Saturday',
      timestamp: new Date(Date.now() - 86400000),
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=170&fit=crop',
      type: 'video',
      duration: '8:45',
    },
    {
      id: 6,
      title: 'React Hooks Tutorial - Build Amazing Apps',
      channel: '@CodeWithMe',
      views: '1.2M',
      date: 'Friday',
      timestamp: new Date(Date.now() - 172800000),
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=170&fit=crop',
      type: 'video',
      duration: '12:30',
    },
    {
      id: 7,
      title: 'Music Compilation - Chill Vibes',
      channel: '@MusicPlaylist',
      views: '5.2M',
      date: 'Thursday',
      timestamp: new Date(Date.now() - 259200000),
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=170&fit=crop',
      type: 'music',
      duration: '45:20',
    },
    {
      id: 8,
      title: 'Podcast: Web Development Tips',
      channel: '@DevPodcast',
      views: '850K',
      date: 'Wednesday',
      timestamp: new Date(Date.now() - 345600000),
      thumbnail: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=170&fit=crop',
      type: 'podcast',
      duration: '1:23:45',
    },
  ];

  // Load history
  useEffect(() => {
    const savedHistory = localStorage.getItem('watchHistory');
    if (savedHistory) {
      try {
        setVideos(JSON.parse(savedHistory));
      } catch {
        setVideos(mockHistoryData);
      }
    } else {
      setVideos(mockHistoryData);
      localStorage.setItem('watchHistory', JSON.stringify(mockHistoryData));
    }

    const savedPaused = localStorage.getItem('historyPaused');
    if (savedPaused) {
      setHistoryPaused(JSON.parse(savedPaused));
    }
  }, []);

  // Filter videos
  useEffect(() => {
    let filtered = videos;

    // Filter by type
    if (activeTab !== 'all') {
      filtered = filtered.filter((v) => v.type === activeTab);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter((v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channel.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by date
    filtered.sort((a, b) => b.timestamp - a.timestamp);
    setFilteredVideos(filtered);
  }, [videos, activeTab, searchQuery]);

  // Clear all history
  const handleClearHistory = () => {
    setDeletedHistory(videos);
    setVideos([]);
    setShowClearModal(false);
    localStorage.setItem('watchHistory', JSON.stringify([]));
    localStorage.setItem('deletedHistory', JSON.stringify(videos));
  };

  // Redo (restore deleted)
  const handleRedo = () => {
    if (deletedHistory.length > 0) {
      setVideos(deletedHistory);
      setDeletedHistory([]);
      localStorage.setItem('watchHistory', JSON.stringify(deletedHistory));
      localStorage.removeItem('deletedHistory');
    }
  };

  // Pause history
  const handlePauseHistory = () => {
    setHistoryPaused(!historyPaused);
    localStorage.setItem('historyPaused', JSON.stringify(!historyPaused));
  };

  // Delete single item
  const handleDeleteItem = (id) => {
    const itemToDelete = videos.find((v) => v.id === id);
    if (itemToDelete) {
      setDeletedHistory([itemToDelete, ...deletedHistory]);
      const newVideos = videos.filter((v) => v.id !== id);
      setVideos(newVideos);
      localStorage.setItem('watchHistory', JSON.stringify(newVideos));
    }
  };

  // Toggle item selection
  const handleSelectItem = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  // Delete selected items
  const handleDeleteSelected = () => {
    const itemsToDelete = videos.filter((v) => selectedItems.has(v.id));
    setDeletedHistory([...itemsToDelete, ...deletedHistory]);
    const newVideos = videos.filter((v) => !selectedItems.has(v.id));
    setVideos(newVideos);
    setSelectedItems(new Set());
    localStorage.setItem('watchHistory', JSON.stringify(newVideos));
  };

  return (
    <div className="history-container">
      {/* Header */}
      <div className="history-header">
        <div className="header-top">
          <h1>Watch history</h1>
          <div className="header-actions">
            <div className="search-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search watch history"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button
              className="icon-btn clear-btn"
              onClick={() => setShowClearModal(true)}
              title="Clear all watch history"
            >
              <Trash2 size={20} />
              <span>Clear all</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="history-tabs">
          {['all', 'videos', 'shorts', 'podcasts', 'music'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Control Panel */}
      <div className="history-controls">
        {deletedHistory.length > 0 && (
          <button className="control-btn redo-btn" onClick={handleRedo} title="Restore deleted history">
            <RotateCcw size={18} />
            <span>Redo</span>
          </button>
        )}
        <button
          className={`control-btn pause-btn ${historyPaused ? 'paused' : ''}`}
          onClick={handlePauseHistory}
          title={historyPaused ? 'Resume history' : 'Pause history'}
        >
          {historyPaused ? <Play size={18} /> : <Pause size={18} />}
          <span>{historyPaused ? 'Resume' : 'Pause'}</span>
        </button>
        <button
          className="control-btn manage-btn"
          onClick={() => setShowManageModal(true)}
          title="Manage all history"
        >
          <Settings size={18} />
          <span>Manage</span>
        </button>
        {selectedItems.size > 0 && (
          <button className="control-btn delete-selected-btn" onClick={handleDeleteSelected}>
            <Trash2 size={18} />
            <span>Delete {selectedItems.size}</span>
          </button>
        )}
      </div>

      {/* History Status */}
      {historyPaused && (
        <div className="history-paused-banner">
          ⏸️ Watch history is paused. Your activity won't be saved.
        </div>
      )}

      {/* Content */}
      <div className="history-content">
        {filteredVideos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h2>No watch history yet</h2>
            <p>Your watch history will appear here</p>
          </div>
        ) : (
          <div className="history-list">
            {filteredVideos.map((video) => (
              <div key={video.id} className="history-item">
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={selectedItems.has(video.id)}
                  onChange={() => handleSelectItem(video.id)}
                />
                <div className="item-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="type-badge">{video.type}</div>
                  <div className="duration-badge">{video.duration}</div>
                </div>
                <div className="item-info">
                  <h3>{video.title}</h3>
                  <p className="channel">{video.channel}</p>
                  <p className="meta">
                    {video.views} views • {video.date}
                  </p>
                </div>
                <button
                  className="item-delete-btn"
                  onClick={() => handleDeleteItem(video.id)}
                  title="Delete from history"
                >
                  <MoreVertical size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear History Modal */}
      {showClearModal && (
        <div className="modal-overlay" onClick={() => setShowClearModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Clear all watch history?</h2>
              <button className="modal-close" onClick={() => setShowClearModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-content">
              <p>This will delete all your watch history. You can undo this action.</p>
              <div className="clear-options">
                <label>
                  <input type="radio" name="clear-time" defaultChecked />
                  All time
                </label>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowClearModal(false)}>
                Cancel
              </button>
              <button className="btn-clear" onClick={handleClearHistory}>
                Clear watch history
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage History Modal */}
      {showManageModal && (
        <div className="modal-overlay" onClick={() => setShowManageModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Manage all history</h2>
              <button className="modal-close" onClick={() => setShowManageModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-content manage-content">
              <div className="manage-section">
                <h3>📊 History Statistics</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Total Videos</span>
                    <span className="stat-value">{videos.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Today's Watches</span>
                    <span className="stat-value">
                      {videos.filter((v) => v.date === 'Today').length}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Shorts Watched</span>
                    <span className="stat-value">
                      {videos.filter((v) => v.type === 'shorts').length}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Can Undo</span>
                    <span className="stat-value">{deletedHistory.length}</span>
                  </div>
                </div>
              </div>

              <div className="manage-section">
                <h3>⚙️ Settings</h3>
                <div className="manage-options">
                  <label className="manage-option">
                    <input
                      type="checkbox"
                      checked={historyPaused}
                      onChange={handlePauseHistory}
                    />
                    <span>Pause watch history</span>
                  </label>
                  <label className="manage-option">
                    <input type="checkbox" />
                    <span>Delete history older than 90 days automatically</span>
                  </label>
                  <label className="manage-option">
                    <input type="checkbox" defaultChecked />
                    <span>Show recommendations based on history</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowManageModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;