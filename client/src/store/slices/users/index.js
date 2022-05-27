import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [], // array of users
  },
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export function fetchALLUsers() {
  return (dispatch) => {
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => {
        dispatch(setUserList(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
