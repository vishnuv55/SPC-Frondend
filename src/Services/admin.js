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

const addNewDrive = (data) => {
  return api.post('/admin/drive-details', data);
};

const deleteDrive = (id) => {
  return api.delete(`/admin/drive/${id}`);
};

const regStudentDetails = (data) => {
  return api.post('/admin/student-details', data);
};
export {
  createStudent,
  updateExecomPassword,
  updateStudentPassword,
  addNewDrive,
  deleteDrive,
  regStudentDetails,
};
