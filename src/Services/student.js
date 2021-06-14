import api from './axios';

const getStudentDetails = () => {
  return api.get('/student/');
};
const editStudentProfile = (data) => {
  return api.patch('/student/', data);
};

const registerForDrive = (data) => {
  return api.post('/student/register-drive', data);
};

const askQuestion = (data) => {
  return api.post('/student/forum/question', data);
};

export { getStudentDetails, editStudentProfile, registerForDrive, askQuestion };
