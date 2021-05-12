import React, { useEffect, useState } from 'react';
import { useRhinoState } from '../../config/context';
import useApiError from '../../hooks/useApiError';
import { isUserLoggedIn } from '../../Services/user';
import Loading from '../common/loading';
import SideNav from './sideNav';

const Layout = ({ children }) => {
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
  return (
    <>
      {user.is_user_logged_in && <SideNav />}
      {children}
    </>
  );
};

export default Layout;
