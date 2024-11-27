export function setApiInterceptors(axiosApi) {
  // ====================================================================
  //  api 공통 설정
  // ====================================================================
  // axiosApi.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
  // axiosApi.defaults.headers['Access-Control-Allow-Origin'] = '*';
  // axiosApi.defaults.withCredentials = true;

  // ====================================================================
  //  http 요청을 서버로 보내기 바로 전 처리
  // ====================================================================
  axiosApi.interceptors.request.use(
    async function (config) {
      // Do something before request is sent

      // --- 로그 처리 start ---
      console.log('> req.config => ', config);
      console.log('======= axiosApi.interceptor.request log start =======');
      console.log('> req.baseURL => ', config.baseURL);
      console.log('> req.url     => ', config.url);
      console.log('> req.method  => ', config.method);
      // console.log(
      //   '> req.headers.Authorization  => ',
      //   config.headers.Authorization ? 'Y' : 'N',
      // );
      console.log('======= axiosApi.interceptor.request log end =======');
      // --- 로그 처리 end ---

      return config;
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // ====================================================================
  //  http 응답을 서비스로 리턴하기 전 처리
  // ====================================================================
  axiosApi.interceptors.response.use(
    async function (response) {
      // ====== 서버와 통신이 정상인 경우 ======
      // === 요청에 대한 응답을 컴포넌트 단에 넘겨주기 전 처리를 수행 ===
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log('=== axiosApi.interceptors.response -> ', response);

      // response.data에 존재하는 서버에서 보낸 status, message, result를 추출
      // if (response.data) {
      //   // response 객체에 svr 프리픽스로 상태 정보를 설정하고 data는 result로 overwrite
      //   response.svrStatus = response.data.status;
      //   response.svrMessage = response.data.message;
      //   response.data = response.data.result;
      //   // }
      // } else {
      //   console.log('=== axiosApi.interceptors > response.data null');
      //   response.svrCode = '';
      //   response.svrMessage = '';
      //   response.data = null;
      // }

      console.log('======= axiosApi.interceptor.response log start =======');
      console.log('> res.reqUrl      => ', response.config.url);
      console.log('> res.status      => ', response.status);
      console.log('> res.statusText  => ', response.statusText);
      console.log('> res.data        => ', response.data);
      console.log('> res.error        => ', response.error);
      // console.log(
      //   '> res.authorization  => ',
      //   response.headers.authorization ? 'Y' : 'N',
      // );
      console.log('======= axiosApi.interceptor.response log end =======');

      return response;
    },

    async function (error) {
      // ====== 서버와 통신에 오류가 발생한 경우 ======
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      // response 에러 발생 시 서비스 단으로 보내기 전 error 처리
      error.httpStatus = error.response.status;
      error.statusText = error.response.statusText;

      console.log('=== axiosApi.interceptors.error -> ', error);

      console.log('======= axiosApi.interceptor.error log start =======');
      console.log('$$$ error.httpStatus =>', error.httpStatus);
      console.log('$$$ error.statusText =>', error.statusText);
      // console.log('$$$ error.svrStatus =>', error.svrStatus);
      console.log('$$$ error.svrCode =>', error.svrCode);
      console.log('$$$ error.svrMessage =>', error.svrMessage);
      console.log('======= axiosApi.interceptor.error log end =======');

      return Promise.reject(error);
    },
  );

  return axiosApi;
}
