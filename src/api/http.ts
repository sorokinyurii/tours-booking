import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
});

// instance.interceptors.request.use(
//   config => {
//     const accessToken = accessTokenService.get()

//     if (accessToken) {
//       config.headers.authorization = `Bearer ${accessToken}`
//     }

//     return config
//   }
// )

instance.interceptors.response.use(
  res => res.data,
//   async error => {
//     const originalRequest = error.config;

//   if (error.response.status !== 401) {
//     throw error;
//   }

//   try {
//     const { accessToken } = await authService.refresh();

//     accessTokenService.save(accessToken);

//     return instance.request(originalRequest);
//   } catch (error) {
//     throw error;
//   }
  
//   }
)

export const useHttp = instance;