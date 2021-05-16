import api from './axios';

const createStudent = (data) => {
  return api.post('/admin/create-student', data);
};

const updateExecomPassword = (data) => {
  return api.post('admin/update-execom-password', data);
};

export { createStudent, updateExecomPassword };
