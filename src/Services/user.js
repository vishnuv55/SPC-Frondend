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

export { isUserLoggedIn, login, logout };
