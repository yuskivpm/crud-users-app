import { createAction } from '@reduxjs/toolkit';
import * as types from './actionTypes';
import { getAllUsers, createUser, updateUser, deleteUser } from '../utils/dataApi';

export const fetchUserDataStart = createAction(types.FETCH_USERS_DATA);

export const fetchUsersDataFinish = createAction(types.FETCH_USERS_DATA_FINISH);

export const fetchUsersData = () => (dispatch) => {
  dispatch(fetchUserDataStart());
  getAllUsers((data) => dispatch(fetchUsersDataFinish(data)));
};

export const changeLocation = createAction(types.CHANGE_LOCATION);

export const changePage = createAction(types.CHANGE_PAGE);

export const saveUser = createAction(types.SAVE_USER);

const redirectToMainPage = (dispatch, { error } = {}) => dispatch(changeLocation({ location: '', error }));

const processSuccessResponse = (dispatch, response) => {
  dispatch(saveUser(response));
  redirectToMainPage(dispatch, response);
};

export const createAndSaveUser = (id, userData) => (dispatch) => {
  if (id) {
    updateUser(
      id,
      userData,
      (response) => processSuccessResponse(dispatch, response),
      (response) => redirectToMainPage(dispatch, response)
    );
  } else {
    createUser(
      userData,
      (response) => processSuccessResponse(dispatch, response),
      (response) => redirectToMainPage(dispatch, response)
    );
  }
};

export const removeUser = (id) => (dispatch) =>
  deleteUser(
    id,
    (response) => {
      dispatch(fetchUsersDataFinish(response));
      redirectToMainPage(dispatch, response);
    },
    (response) => redirectToMainPage(dispatch, response)
  );
