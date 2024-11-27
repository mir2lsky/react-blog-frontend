import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, requestAPI) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      // console.log('createRequestSaga(): action :', action);

      // API 호출 ex) requestAPI(action.payload)
      const response = yield call(requestAPI, action.payload);

      // 성공에 해당하는 action dispatch
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response, // 추후 http 헤더나 상태코드 조회 용도
      });

      // 에러 발생 시 처리
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }

    yield put(finishLoading(type)); // 로딩 끝
  };
}
