// YouTube API Service
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const api = {
  searchVideos: async (query, pageToken = '', maxResults = 20) => {
    try {
      if (!API_KEY) return { items: [], nextPageToken: '' };
      const response = await fetch(`${API_BASE_URL}/search?key=${API_KEY}&q=${query}&part=snippet&type=video&maxResults=${maxResults}`);
      const data = await response.json();
      return { items: data.items || [], nextPageToken: data.nextPageToken || '' };
    } catch (error) {
      console.error('Search error:', error);
      return { items: [], nextPageToken: '' };
    }
  },

  getTrendingVideos: async (regionCode = 'US', maxResults = 20) => {
    try {
      if (!API_KEY) return { items: [], nextPageToken: '' };
      const response = await fetch(`${API_BASE_URL}/videos?key=${API_KEY}&chart=mostPopular&regionCode=${regionCode}&part=snippet,statistics&maxResults=${maxResults}`);
      const data = await response.json();
      return { items: data.items || [], nextPageToken: data.nextPageToken || '' };
    } catch (error) {
      console.error('Trending error:', error);
      return { items: [], nextPageToken: '' };
    }
  },

  getVideoDetails: async (videoId) => {
    try {
      if (!API_KEY) return null;
      const response = await fetch(`${API_BASE_URL}/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`);
      const data = await response.json();
      return data.items?.[0] || null;
    } catch (error) {
      console.error('Video details error:', error);
      return null;
    }
  },
};

export default api;