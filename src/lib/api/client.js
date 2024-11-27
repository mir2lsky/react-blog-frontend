import axios from 'axios';
import { setApiInterceptors } from './api-interceptors';
/**
 * Axios 인스턴스 생성
 */

// const client = axios.create();
// export default client;

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';


  // 인터셉터 설정
  axios.interceptors.response.use(
    (response) => {
      // 요청 성공 시 특정 작업 수행
      console.log(
        '====> client.js :: interceptors.repsonse >>  response :',
        response,
      );
      return response;
    },
    (error) => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    },
);
  */

function createAxiosApi() {
  const axiosApi = axios.create({
    // baseURL: import.meta.env.VITE_APP_EASYIT_API_BSC_URL,
  });

  return setApiInterceptors(axiosApi);
}
const axiosApi = createAxiosApi();

export default axiosApi;
