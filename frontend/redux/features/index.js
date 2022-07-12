import { combineReducers } from 'redux';
import productSlice from './productSlice';

export default combineReducers({
  product: productSlice,
});
