import axiosInstance from '../../axios-instance';

const BASEURI = '/api/users/';

const signup = (data) => {
  return axiosInstance.post(BASEURI + 'signup', data);
}

const login = (data) => {
  return axiosInstance.post(BASEURI + 'login', data);
}

const updateUser = (data) => {
  return axiosInstance.put(BASEURI + `updateUser/${data._id}`, data)
}

const getProfile = (id) => {
  return axiosInstance.get(BASEURI + `getProfile?id=${id}`)
}

export default { signup, login, updateUser, getProfile };