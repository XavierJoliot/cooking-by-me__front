import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {
  const api = axios.create({
    baseURL: '#',
  });
  switch (action.type) {
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;