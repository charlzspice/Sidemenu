// MenuData.js - Dummy data for menu items based on user roles
export const menuItemsData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    icon: '📊',
    roles: ['admin', 'user', 'manager', 'guest']
  },
  {
    id: 2,
    title: 'Users',
    path: '/users',
    icon: '👥',
    roles: ['admin', 'manager']
  },
  {
    id: 3,
    title: 'Reports',
    path: '/reports',
    icon: '📈',
    roles: ['admin', 'manager', 'user']
  },
  {
    id: 4,
    title: 'Settings',
    path: '/settings',
    icon: '⚙️',
    roles: ['admin']
  },
  {
    id: 5,
    title: 'Profile',
    path: '/profile',
    icon: '👤',
    roles: ['admin', 'user', 'manager', 'guest']
  },
  {
    id: 6,
    title: 'Analytics',
    path: '/analytics',
    icon: '📊',
    roles: ['admin', 'manager']
  },
  {
    id: 7,
    title: 'Tasks',
    path: '/tasks',
    icon: '✅',
    roles: ['admin', 'user', 'manager']
  },
  {
    id: 8,
    title: 'Documents',
    path: '/documents',
    icon: '📄',
    roles: ['admin', 'manager']
  },
  {
    id: 9,
    title: 'Help',
    path: '/help',
    icon: '❓',
    roles: ['admin', 'user', 'manager', 'guest']
  }
];

// Mock user data
export const users = {
  admin: {
    id: 1,
    name: 'Admin User',
    role: 'admin',
    email: 'admin@example.com'
  },
  manager: {
    id: 2,
    name: 'Manager User',
    role: 'manager',
    email: 'manager@example.com'
  },
  user: {
    id: 3,
    name: 'Regular User',
    role: 'user',
    email: 'user@example.com'
  },
  guest: {
    id: 4,
    name: 'Guest User',
    role: 'guest',
    email: 'guest@example.com'
  }
};

// Mock API function to simulate database call
export const fetchMenuItemsByRole = (role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredItems = menuItemsData.filter(item => 
        item.roles.includes(role)
      );
      resolve(filteredItems);
    }, 500); // Simulate network delay
  });
};

export const fetchUserData = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = Object.values(users).find(u => u.id === userId);
      resolve(user || users.guest);
    }, 300);
  });
};