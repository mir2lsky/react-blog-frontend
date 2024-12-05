import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

// 모듈별로 정의된 각 reducer(store)를 rootReducer로 통합해서 하나의 store 생성
const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

// 모듈별로 정의된 사가를 rootSaga로 통합해서 처리
export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
