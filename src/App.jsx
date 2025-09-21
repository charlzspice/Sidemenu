import React, { useState } from 'react';
import SideMenu from './SideMenu';
import './App.css';

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const changeUser = (userId) => {
    setCurrentUserId(userId);
    setSelectedItem(null);
  };

  return (
    <div className="app">
      <SideMenu userId={currentUserId} onMenuItemClick={handleMenuItemClick} />
      
      <div className="main-content">
        <header className="app-header">
          <h1>Role-Based Side Menu Demo</h1>
          <div className="user-controls">
            <button 
              className={`user-btn ${currentUserId === 1 ? 'active' : ''}`}
              onClick={() => changeUser(1)}
            >
              Admin
            </button>
            <button 
              className={`user-btn ${currentUserId === 2 ? 'active' : ''}`}
              onClick={() => changeUser(2)}
            >
              Manager
            </button>
            <button 
              className={`user-btn ${currentUserId === 3 ? 'active' : ''}`}
              onClick={() => changeUser(3)}
            >
              User
            </button>
            <button 
              className={`user-btn ${currentUserId === 4 ? 'active' : ''}`}
              onClick={() => changeUser(4)}
            >
              Guest
            </button>
          </div>
        </header>

        <div className="content">
          {selectedItem ? (
            <div className="selected-item">
              <h2>Selected Menu Item</h2>
              <div className="item-card">
                <span className="item-icon">{selectedItem.icon}</span>
                <h3>{selectedItem.title}</h3>
                <p>Path: {selectedItem.path}</p>
                <p>Available for roles: {selectedItem.roles.join(', ')}</p>
              </div>
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Welcome to the Role-Based Menu System</h2>
              <p>Select a user role from the top to see different menu options.</p>
              <p>Click on any menu item to see its details here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;