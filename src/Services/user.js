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

const getBills = (userType) => {
  return api.get(`/${userType}/bill-details`);
};

const createBill = (userType, data) => {
  return api.post(`/${userType}/bill-details`, data);
};

const deleteBill = (userType, billId) => {
  return api.delete(`/${userType}/bill/${billId}`);
};

const sendEmail = (userType, data) => {
  return api.post(`/${userType}/send-email`, data);
};

const getQueries = (userType) => {
  return api.get(`/${userType}/forum/queries`);
};

const addQueryAnswer = (userType, data) => {
  return api.post(`/${userType}/forum/answer`, data);
};

const deleteQuery = (userType, id) => {
  return api.delete(`/${userType}//forum/queries/${id}`);
};

export {
  isUserLoggedIn,
  login,
  logout,
  changePassword,
  getDriveDetails,
  getBills,
  createBill,
  deleteBill,
  sendEmail,
  getQueries,
  addQueryAnswer,
  deleteQuery,
};
