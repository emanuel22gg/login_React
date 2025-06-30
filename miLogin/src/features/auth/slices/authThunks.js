import { createAsyncThunk } from '@reduxjs/toolkit';
import { authenticateUser } from '../services/authService';
import { loginStart, loginSuccess, loginFailure } from './authSlice';

// Thunk para login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      dispatch(loginStart());
      const user = await authenticateUser(credentials);
      if (user) {
        dispatch(loginSuccess(user));
        return user;
      } else {
        dispatch(loginFailure('Usuario no encontrado'));
        return rejectWithValue('');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      return rejectWithValue(error.message);
    }
  }
);