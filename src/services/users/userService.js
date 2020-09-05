import axiosInstance from '../../axios-instance';

const BASEURI = '/api/users/';

const signup = (data) => {
  return axiosInstance.post(BASEURI + 'signup', data);
}

const login = (data) => {
  return axiosInstance.post(BASEURI + 'login', data);
}

export default { signup, login };