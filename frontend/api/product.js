import axios from './index';

export const addProductEndpoint = (product) =>
  axios.post('/api/products', product);
