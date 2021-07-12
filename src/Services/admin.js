import api from './axios';

const createStudent = (data) => {
  return api.post('/admin/create-student', data);
};

const createStudents = (data) => {
  return api.post('/admin/create-students', data);
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

const createAlumni = (data) => {
  return api.post('/admin/alumni-details', data);
};

const getAlumni = () => {
  return api.get('/admin/alumni-details');
};

const getStudentsData = (data) => {
  return api.post('/admin/students', data);
};

const deleteStudent = (id) => {
  return api.delete(`/admin/student/${id}`);
};

const getPlacedStudents = (data) => {
  return api.post('/admin/placed-students', data);
};

const getPlacementInfo = () => {
  return api.get('/admin/placement-report');
};

export {
  createStudent,
  createStudents,
  updateExecomPassword,
  updateStudentPassword,
  addNewDrive,
  deleteDrive,
  regStudentDetails,
  createAlumni,
  getAlumni,
  getStudentsData,
  deleteStudent,
  getPlacedStudents,
  getPlacementInfo,
};
