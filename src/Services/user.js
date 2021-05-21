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

const getBills = (userType) => {
  return api.get(`/${userType}/bill-details`);
};

export { isUserLoggedIn, login, logout, changePassword, getBills };
