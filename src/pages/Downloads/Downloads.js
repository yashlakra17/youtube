import React, { useState } from 'react';
import { Download, Trash2, Play, Wifi, WifiOff, HardDrive, MoreVertical } from 'lucide-react';
import './Downloads.css';

const Downloads = () => {
  const [downloads, setDownloads] = useState([
    { id: 1, title: 'React Advanced Tutorial', progress: 100, size: '245MB', duration: '45:20', quality: '1080p', },
    { id: 2, title: 'Gaming Best Moments', progress: 75, size: '512MB', duration: '28:15', quality: '720p' },
    { id: 3, title: 'Music Performance Live', progress: 50, size: '182MB', duration: '4:32', quality: '1080p' },
    { id: 4, title: 'Travel Vlog Adventure', progress: 100, size: '380MB', duration: '35:50', quality: '720p' },
  ]);
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message: msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const handleDelete = (id, title) => {
    setDownloads(prev => prev.filter(d => d.id !== id));
    addToast(`Deleted: ${title}`, 'info');
  };

  return (
    <div className="downloads-container">
      <div className="downloads-header">
        <h1>📥 Downloads</h1>
        <div className="storage-info">
          <HardDrive size={20} />
          <span>2.5GB of 10GB used</span>
        </div>
      </div>

      <div className="downloads-list">
        {downloads.map((download, index) => (
          <div key={download.id} className="download-item" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="download-thumbnail">
              <div className="quality-badge">{download.quality}</div>
            </div>
            <div className="download-info">
              <h3>{download.title}</h3>
              <p className="download-meta">{download.duration} • {download.size}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${download.progress}%` }}>
                  {download.progress === 100 && <span className="progress-text">✓</span>}
                </div>
              </div>
              <p className="progress-label">{download.progress}% • {Math.floor(245 * download.progress / 100)}MB</p>
            </div>
            <div className="download-actions">
              <button className="action-btn" title="Play offline">
                <Play size={18} />
              </button>
              <button className="action-btn" title="Delete">
                <Trash2 size={18} onClick={() => handleDelete(download.id, download.title)} />
              </button>
              <button className="action-btn more-btn">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>{toast.type === 'success' ? '✓' : 'ℹ'}</span>
            <p>{toast.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;