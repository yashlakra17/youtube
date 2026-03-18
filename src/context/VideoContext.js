import React, { createContext, useState, useContext, useCallback } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const likeVideo = useCallback((video) => {
    setLikedVideos(prev => {
      const isLiked = prev.find(v => v.id === video.id);
      return isLiked ? prev.filter(v => v.id !== video.id) : [...prev, video];
    });
  }, []);

  const addToHistory = useCallback((video) => {
    setWatchHistory(prev => {
      const filtered = prev.filter(v => v.id !== video.id);
      return [{ ...video, watchedAt: new Date().toISOString() }, ...filtered];
    });
  }, []);

  const createPlaylist = useCallback((name, videos = []) => {
    const newPlaylist = {
      id: Date.now().toString(),
      name,
      videos,
      createdAt: new Date().toISOString(),
      isPublic: true,
    };
    setPlaylists(prev => [...prev, newPlaylist]);
    return newPlaylist;
  }, []);

  const addToPlaylist = useCallback((playlistId, video) => {
    setPlaylists(prev =>
      prev.map(p =>
        p.id === playlistId ? { ...p, videos: [...p.videos, video] } : p
      )
    );
  }, []);

  const deletePlaylist = useCallback((playlistId) => {
    setPlaylists(prev => prev.filter(p => p.id !== playlistId));
  }, []);

  const clearHistory = useCallback(() => {
    setWatchHistory([]);
  }, []);

  const value = {
    likedVideos,
    watchHistory,
    playlists,
    loading,
    likeVideo,
    addToHistory,
    createPlaylist,
    addToPlaylist,
    deletePlaylist,
    clearHistory,
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within VideoProvider');
  }
  return context;
};