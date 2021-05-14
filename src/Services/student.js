import api from './axios';

const getStudentDetails = () => {
  return api.get('/student/');
};
const editStudentProfile = (data) => {
  return api.patch('/student/', data);
};
export { getStudentDetails, editStudentProfile };
