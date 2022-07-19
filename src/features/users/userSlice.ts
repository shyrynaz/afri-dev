import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserProfilePayload {
  id: string;
  userName: string;
}

const initialState: UserProfilePayload = {
  id: '',
  userName: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserProfile: state => state,
    addUser: (state, action: PayloadAction<UserProfilePayload>) => {
      return action.payload;
    }
  }
});

export const { getUserProfile, addUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
