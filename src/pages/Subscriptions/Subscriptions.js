import React, { useState } from 'react';
import { Bell, BellOff, Trash2, Share2,} from 'lucide-react';
import './Subscriptions.css';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Tech Hub', subscribers: '2.5M', avatar: 'https://ui-avatars.com/api/?name=TechHub&background=FF6B6B&color=fff', notified: true },
    { id: 2, name: 'Gaming Pro', subscribers: '1.8M', avatar: 'https://ui-avatars.com/api/?name=GamingPro&background=4CAF50&color=fff', notified: true },
    { id: 3, name: 'Music Star', subscribers: '3.2M', avatar: 'https://ui-avatars.com/api/?name=MusicStar&background=2196F3&color=fff', notified: false },
    { id: 4, name: 'Travel Vlog', subscribers: '956K', avatar: 'https://ui-avatars.com/api/?name=TravelVlog&background=FF9800&color=fff', notified: true },
  ]);
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message: msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const toggleNotification = (id) => {
    setSubscriptions(prev => prev.map(s => s.id === id ? { ...s, notified: !s.notified } : s));
    addToast('Notification preference updated', 'success');
  };

  const handleUnsubscribe = (id, name) => {
    setSubscriptions(prev => prev.filter(s => s.id !== id));
    addToast(`Unsubscribed from ${name}`, 'info');
  };

  return (
    <div className="subscriptions-container">
      <div className="subscriptions-header">
        <h1>🔔 Subscriptions</h1>
        <div className="sub-stats">{subscriptions.length} Channels</div>
      </div>

      <div className="subscriptions-list">
        {subscriptions.map((sub, index) => (
          <div key={sub.id} className="subscription-item" style={{ animationDelay: `${index * 80}ms` }}>
            <img src={sub.avatar} alt={sub.name} className="channel-avatar" />
            <div className="sub-info">
              <h3>{sub.name}</h3>
              <p>{sub.subscribers} subscribers</p>
            </div>
            <div className="sub-actions">
              <button 
                className={`toggle-btn ${sub.notified ? 'enabled' : 'disabled'}`}
                onClick={() => toggleNotification(sub.id)}
              >
                {sub.notified ? <Bell size={18} /> : <BellOff size={18} />}
              </button>
              <button className="action-btn"><Share2 size={18} /></button>
              <button 
                className="action-btn delete-btn"
                onClick={() => handleUnsubscribe(sub.id, sub.name)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>✓</span>
            <p>{toast.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;