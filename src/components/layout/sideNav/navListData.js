import React from 'react';

import { FiHome, FiUser, FiMessageSquare, FiLock, FiFile, FiMail, FiAward } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
/**
 *
 * @param {String} user Values can be 'student','execom' or 'admin'
 * @returns {Array} Array of objects containing icon, name, title and url
 */
const getNavListData = (user) => {
  const studentData = [
    {
      id: 1,
      icon: <FiHome className="icon" />,
      name: 'Home',
      url: '/student/home',
    },
    {
      id: 2,
      icon: <FiUser className="icon" />,
      name: 'Profile',
      url: '/student/profile',
    },
    {
      id: 3,
      icon: <FiMessageSquare className="icon" />,
      name: 'Forum',
      url: '/student/forum',
    },
    {
      id: 4,
      icon: <FiLock className="icon" />,
      name: 'change Password',
      url: '/student/update-password',
    },
  ];

  const adminData = [
    {
      id: 1,
      icon: <FiHome className="icon" />,
      name: 'Home',
      url: '/admin/home',
    },
    {
      id: 2,
      icon: <FiFile className="icon" />,
      name: 'Drive',
      url: '/admin/drive',
    },
    {
      id: 3,
      icon: <FiMail className="icon" />,
      name: 'Mail',
      url: '/admin/mail',
    },
    {
      id: 4,
      icon: <FiMessageSquare className="icon" />,
      name: 'Forum',
      url: '/admin/forum',
    },
    {
      id: 5,
      icon: <BiRupee className="icon" />,
      name: 'Bill',
      url: '/admin/bill',
    },
    {
      id: 6,
      icon: <FiAward className="icon" />,
      name: 'alumni',
      url: '/admin/alumni',
    },
  ];
  const execomData = [
    {
      id: 1,
      icon: <BiRupee className="icon" />,
      name: 'Bill',
      url: '/execom/bill',
    },
    {
      id: 2,
      icon: <FiMail className="icon" />,
      name: 'Mail',
      url: '/execom/mail',
    },
    {
      id: 3,
      icon: <FiFile className="icon" />,
      name: 'Drive',
      url: '/execom/drive',
    },
    {
      id: 4,
      icon: <FiMessageSquare className="icon" />,
      name: 'Forum',
      url: '/execom/forum',
    },
    {
      id: 5,
      icon: <FiLock className="icon" />,
      name: 'change Password',
      url: '/execom/update-password',
    },
  ];

  if (user === 'admin') {
    return adminData;
  }
  if (user === 'execom') {
    return execomData;
  }
  return studentData;
};

export default getNavListData;
