import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
  });

instance.interceptors.response.use(
  response => response,
  error => {
      if (!error.response) {
          console.log('setServiceAvailable');
      }
      
      return error.response;
  });


export default instance;