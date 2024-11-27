import axiosApi from './client';

// 회원가입
export const register = ({ username, password }) => {
  // client.post('/api/auth/register', { username, password });
  return axiosApi.post('/api/auth/register', { username, password });
};

// 로그인
export const login = ({ username, password }) => {
  // client.post('/api/auth/login', { username, password });
  return axiosApi.post('/api/auth/login', { username, password });
};

// 로그인 상태 확인
export const check = () => axiosApi.get('/api/auth/check');

// 로그아웃
export const logout = () => axiosApi.post('/api/auth/logout');
