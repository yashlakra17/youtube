import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('youtubeUser');
    const storedDarkMode = localStorage.getItem('darkMode');

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('youtubeUser');
      }
    }

    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    setLoading(false);
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const register = (name, email, password) => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    if (existingUsers.some((u) => u.email === email)) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In real app, hash this!
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FF6B6B&color=fff`,
      createdAt: new Date().toISOString(),
    };

    // Save to all users
    existingUsers.push(newUser);
    localStorage.setItem('allUsers', JSON.stringify(existingUsers));

    // Log in the user
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    setIsLoggedIn(true);
    localStorage.setItem('youtubeUser', JSON.stringify(userWithoutPassword));

    return userWithoutPassword;
  };

  const login = (email, password) => {
    // Find user by email
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const foundUser = allUsers.find((u) => u.email === email && u.password === password);

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    // Log in the user
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    setIsLoggedIn(true);
    localStorage.setItem('youtubeUser', JSON.stringify(userWithoutPassword));

    return userWithoutPassword;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('youtubeUser');
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('youtubeUser', JSON.stringify(updatedUser));

    // Update in all users list
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const userIndex = allUsers.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      allUsers[userIndex] = { ...allUsers[userIndex], ...updates };
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        darkMode,
        loading,
        register,
        login,
        logout,
        toggleTheme,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};