import Axios from 'axios';
// import { useSelector } from 'react-redux';
// import { connect } from 'react-redux'

const Instance = Axios.create({
  baseURL: 'http://localhost:8081'
})

// const token = useSelector(state => state.loginReducer.token)

Instance.interceptors.request.use(request => {
  request.headers['authorization'] = 'Bearer ' + localStorage.getItem('token')
  return request;
})

// Instance.defaults.headers.common['Authorization'] = 'Auth Token From Instance'; // we can add headers in interceptors like this also

// Instance.interceptors.response.use(res => res)

export default Instance;