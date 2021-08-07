import React, { useEffect, useState } from 'react';

import './style.scss';
import Header from './header';
import SideNav from './sideNav';
import Loading from '../common/loading';
import useApiError from '../../hooks/useApiError';
import { useRhinoState } from '../../config/context';
import { isUserLoggedIn } from '../../Services/user';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  const [user, setUser] = useRhinoState('user');

  const [loading, setLoading] = useState(true);

  const { handleApiError } = useApiError();

  const checkLogin = async () => {
    setLoading(true);
    try {
      const response = await isUserLoggedIn();

      if (response.status === 200) {
        setUser(response.data);
        setLoading(false);
      }
    } catch (error) {
      handleApiError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <Loading />;
  }
  if (user.is_user_logged_in) {
    return (
      <div className="dashboard-layout">
        <SideNav />
        <div className="dashboard-container">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="dashboard-pages">{children}</div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default Layout;
