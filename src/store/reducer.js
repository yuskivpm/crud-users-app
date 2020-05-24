/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const defaultData = {
  tableLoaded: undefined,
  error: '',
  usersData: [],
  location: '',
  usersOnPage: 5,
  curPage: 0,
};

const checkCurrentPageIndex = (state, newCurPageValue) =>
  state.usersData.length ? Math.min(Math.floor((state.usersData.length - 1) / state.usersOnPage), newCurPageValue) : 0;

export default createReducer(defaultData, {
  [actions.fetchUserDataStart]: (state) => {
    state.tableLoaded = false;
  },

  [actions.fetchUsersDataFinish]: (state, { payload: { error, data } }) => {
    state.tableLoaded = true;
    state.error = error;
    state.usersData = data;
    state.curPage = checkCurrentPageIndex(state, state.curPage);
  },

  [actions.changeLocation]: (state, { payload: { location, error, id } }) => {
    state.location = location;
    state.error = error;
    state.editId = id;
  },

  [actions.changePage]: (state, { payload }) => {
    state.curPage = checkCurrentPageIndex(state, payload);
  },

  [actions.saveUser]: (state, { payload: { data: user } }) => {
    const userIndex = state.usersData.findIndex(({ id }) => id === user.id);
    if (userIndex < 0) {
      state.usersData.push(user);
    } else {
      state.usersData[userIndex] = user;
    }
  },
});
