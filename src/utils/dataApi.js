import { BASE_API_URL, CREATE_USER, READ_USERS, UPDATE_USER, DELETE_USER } from './consts';

const fetchData = ({ uri, method, id = '', body, onFulfilled, OnError = onFulfilled, headers = {} }) =>
  fetch(`${BASE_API_URL}${uri}${id}`, { method, body, ...headers })
    .then((response) => (response.ok ? response.json() : { errors: response.statusText }))
    .then((data) => (data.errors ? OnError({ error: data.errors }) : onFulfilled({ data })))
    .catch(({ name: error }) => onFulfilled({ error }));

export const getAllUsers = (onFulfilled, OnError) => fetchData({ ...READ_USERS, onFulfilled, OnError });

export const createUser = (body, onFulfilled, OnError) => fetchData({ ...CREATE_USER, body, onFulfilled, OnError });

const PUT_REQUEST_HEADERS = { headers: { 'Content-type': 'application/json; charset=UTF-8' } };

export const updateUser = (id, body, onFulfilled, OnError) =>
  fetchData({ ...UPDATE_USER, id, body, onFulfilled, OnError, headers: PUT_REQUEST_HEADERS });

export const deleteUser = (id, onFulfilled, OnError) => fetchData({ ...DELETE_USER, id, onFulfilled, OnError });
