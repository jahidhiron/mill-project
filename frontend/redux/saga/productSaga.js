import { all, put, call, takeLatest } from 'redux-saga/effects';

import { addProduct, addProductSuccess } from '../features/productSlice';

import { addProductEndpoint } from '../../api/product';

function* onAddProduct({ payload: { product, callback } }) {
  try {
    const { status, data } = yield call(addProductEndpoint, product);

    if (status === 201) {
      yield put(addProductSuccess({ ...data }));
    }

    if (callback) {
      callback({ error: null, data });
    }
  } catch ({ response }) {
    const { message } = response.data;

    const error = {
      message: message ? message : response?.statusText || 'Error. Try again',
    };
    if (callback) {
      callback({ error, data: null });
    }
  }
}

function* Products() {
  yield all([takeLatest(addProduct, onAddProduct)]);
}

export default Products;
