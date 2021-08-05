import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interfaces';
import { RootState } from './rootReducer';

interface IinitialState {
  currentUser: null | IUser;
}

const initialState: IinitialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
