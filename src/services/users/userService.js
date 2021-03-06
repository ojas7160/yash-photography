import axiosInstance from '../../axios-instance';

const BASEURI = '/api/users/';

const signup = (data) => {
  return axiosInstance.post(BASEURI + 'signup', data);
}

const login = (data) => {
  return axiosInstance.post(BASEURI + 'login', data);
}

const updateUser = (data, id) => {
  return axiosInstance.put(BASEURI + `updateUser/${id}`, data)
}

const getProfile = (id) => {
  return axiosInstance.get(BASEURI + `getProfile?id=${id}`)
}

const uploadImage = (data) => {
  return axiosInstance.put(BASEURI + `uploadFile/${data.id}`, data)
}


export default { signup, login, updateUser, getProfile, uploadImage };