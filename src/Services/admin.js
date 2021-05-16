import api from './axios';

const createStudent = (data) => {
  return api.post('/admin/create-student', data);
};

const updateExecomPassword = (data) => {
  return api.post('admin/update-execom-password', data);
};

const updateStudentPassword = (data) => {
  return api.post('admin/update-student-password', data);
};

export { createStudent, updateExecomPassword, updateStudentPassword };
