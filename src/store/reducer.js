import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const defaultData = {
  tableLoaded: undefined,
  error: '',
  usersData: [],
};

export default createReducer(defaultData, {});
