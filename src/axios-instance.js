import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:8081'
})

export default instance;