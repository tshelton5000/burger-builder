import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-b4c52.firebaseio.com/'
});

export default instance;