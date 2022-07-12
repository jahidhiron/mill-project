import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6000',
});

// instance.interceptors.request.use((req) => {
//   if (typeof window !== 'undefined' && localStorage.getItem('user')) {
//     req.headers.Authorization = `Bearer ${
//       typeof window !== 'undefined' &&
//       JSON.parse(localStorage.getItem('user')).token
//     }`;
//   }

//   return req;
// });

export default instance;
