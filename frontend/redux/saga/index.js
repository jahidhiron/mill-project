import { all, fork } from 'redux-saga/effects';
import productSaga from './productSaga';

function* saga() {
  yield all([fork(productSaga)]);
}

export default saga;
