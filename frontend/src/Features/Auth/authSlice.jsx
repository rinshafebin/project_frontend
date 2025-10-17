import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerClientAPI, registerAdvocateAPI, verifyMFAAPI } from '../../Api/authAPI/';

export const loginUser = createAsyncThunk('auth/loginUser', async (data, { rejectWithValue }) => {
  try {
    return await loginAPI(data);
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const registerClient = createAsyncThunk('auth/registerClient', async (data, { rejectWithValue }) => {
  try {
    return await registerClientAPI(data);
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Registration failed');
  }
});

export const registerAdvocate = createAsyncThunk('auth/registerAdvocate', async (data, { rejectWithValue }) => {
  try {
    return await registerAdvocateAPI(data);
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Registration failed');
  }
});

export const verifyMFA = createAsyncThunk('auth/verifyMFA', async (data, { rejectWithValue }) => {
  try {
    return await verifyMFAAPI(data);
  } catch (err) {
    return rejectWithValue(err.response?.data || 'MFA verification failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    mfaRequired: false,
    mfaUserId: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.mfaRequired = false;
      state.mfaUserId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.mfa_type) {
          state.mfaRequired = true;
          state.mfaUserId = action.payload.user_id;
        } else {
          state.token = action.payload.tokens.access;
          state.user = action.payload.user;
        }
      })
      .addCase(verifyMFA.fulfilled, (state, action) => {
        state.token = action.payload.tokens.access;
        state.user = action.payload.user;
        state.mfaRequired = false;
        state.mfaUserId = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
