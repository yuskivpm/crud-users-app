import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import users from './reducer';

export default () => configureStore({ reducer: { users }, middleware: [...getDefaultMiddleware()] });
