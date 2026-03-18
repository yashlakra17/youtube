export const VIDEO_CATEGORIES = {
  all: { id: 0, label: 'All' },
  music: { id: 10, label: 'Music' },
  gaming: { id: 20, label: 'Gaming' },
  sports: { id: 17, label: 'Sports' },
  education: { id: 27, label: 'Education' },
};

export const STORAGE_KEYS = {
  user: 'yt_user',
  theme: 'yt_theme',
  history: 'yt_history',
  playlists: 'yt_playlists',
};

export const ERROR_MESSAGES = {
  NO_API_KEY: 'YouTube API key not configured. Using mock data.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
};