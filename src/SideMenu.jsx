import React, { useState, useEffect } from 'react';
import { fetchMenuItemsByRole, fetchUserData } from './MenuData';
import './SideMenu.css';

const SideMenu = ({ userId = 1, onMenuItemClick }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const userData = await fetchUserData(userId);
        setUser(userData);
        
        const items = await fetchMenuItemsByRole(userData.role);
        setMenuItems(items);
      } catch (err) {
        setError('Failed to load menu items');
        console.error('Error loading menu:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userId]);

  const handleMenuItemClick = (item) => {
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
    console.log('Navigating to:', item.path);
  };

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (loading) {
    return (
      <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="menu-loading">Loading menu...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="menu-error">{error}</div>
      </div>
    );
  }

  return (
    <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Menu Header */}
      <div className="menu-header">
        <div className="menu-toggle" onClick={toggleMenu}>
          {isCollapsed ? '→' : '←'}
        </div>
        {!isCollapsed && (
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <div className="user-name">{user?.name}</div>
              <div className="user-role">{user?.role}</div>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="menu-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleMenuItemClick(item)}
                title={isCollapsed ? item.title : ''}
              >
                <span className="menu-icon">{item.icon}</span>
                {!isCollapsed && (
                  <span className="menu-title">{item.title}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Footer */}
      {!isCollapsed && (
        <div className="menu-footer">
          <div className="menu-stats">
            <span>Role: {user?.role}</span>
            <span>Items: {menuItems.length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;