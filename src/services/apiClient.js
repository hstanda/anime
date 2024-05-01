import axios from "axios";

const ApiClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };

  const instance = axios.create(defaultOptions);

  // Add a response interceptor to handle errors
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("Request failed with error:", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default ApiClient();
