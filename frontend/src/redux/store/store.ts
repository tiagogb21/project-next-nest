import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import scheduleLogin from '../reducers/loginReducers';
import scheduleRegister from '../reducers/registerReducers';

export const store = configureStore({
  reducer: {
    login: scheduleLogin,
    register: scheduleRegister,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
