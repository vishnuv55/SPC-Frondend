import api from './axios';

const isUserLoggedIn = () => {
  return api.get('/is-user-logged-in');
};

const login = (userType, data) => {
  return api.post(`/${userType}/login`, data);
};

const logout = (userType) => {
  return api.post(`/${userType}/logout`);
};

const changePassword = (userType, data) => {
  return api.post(`/${userType}/change-password`, data);
};

const getDriveDetails = (userType) => {
  return api.get(`/${userType}/drive-details`);
};

export { isUserLoggedIn, login, logout, changePassword, getDriveDetails };
