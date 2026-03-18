import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Compass,
  Play,
  ListVideo,
  Clock,
  ThumbsUp,
  Download,
  Flame,
  Music,
  Gamepad2,
  Radio,
  Trophy,
  Film,
  Podcast,
  Zap,
  Sword,

} from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = ({ sidebarOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/home' },
    { id: 'shorts', label: 'Shorts', icon: Play, path: '/shorts' },
    { id: 'explore', label: 'Explore', icon: Compass, path: '/explore' },
    { id: 'subscriptions', label: 'Subscriptions', icon: ListVideo, path: '/subscriptions' },
  ];

  const yourLibrary = [
    { id: 'history', label: 'History', icon: Clock, path: '/history' },
    { id: 'playlists', label: 'Playlists', icon: ListVideo, path: '/playlists' },
    { id: 'Anime', label: 'Anime', icon:Sword, path: '/anime' },
    { id: 'liked', label: 'Liked videos', icon: ThumbsUp, path: '/liked' },
    { id: 'downloads', label: 'Downloads', icon: Download, path: '/downloads' },
  ];

  const explore = [
    { id: 'trending', label: 'Trending', icon: Flame, path: '/trending' },
    { id: 'music', label: 'Music', icon: Music, path: '/music' },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2, path: '/gaming' },
    { id: 'sports', label: 'Sports', icon: Trophy, path: '/sports' },
    { id: 'movies', label: 'Movies', icon: Film, path: '/movies' },
    { id: 'news', label: 'News', icon: Radio, path: '/news' },
    { id: 'live', label: 'Live', icon: Zap, path: '/live' },
    { id: 'podcast', label: 'Podcasts', icon: Podcast, path: '/podcast' },
  ];

  const subscriptions = [
    { name: 'DramaBuzz', color: '#667eea' },
    { name: 'MEGA Cricket', color: '#f5576c' },
    { name: 'Code Academy', color: '#00f2fe' },
    { name: 'Tech Bytes', color: '#ffd89b' },
  ];

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-section">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <p className="sidebar-label">YOUR LIBRARY</p>
        {yourLibrary.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <p className="sidebar-label">SUBSCRIPTIONS</p>
        {subscriptions.map((sub) => (
          <div key={sub.name} className="sidebar-item subscription">
            <div
              className="channel-avatar"
              style={{ backgroundColor: sub.color }}
            ></div>
            <span>{sub.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <p className="sidebar-label">EXPLORE</p>
        {explore.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;