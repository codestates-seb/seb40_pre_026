import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: -1, isLoggedIn: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setIsLoggedin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    deleteId: (state) => {
      state.id = -1;
    },
  },
});

export const { setId, setIsLoggedin, deleteId } = userSlice.actions;
export default userSlice.reducer;

// extraReducers: (builder) => {
//   builder.addCase(LoginAsync.fulfilled, (state, action) => {
//     state.id = action.payload.id;
//     state.isLoggedIn = true;
//   });
//   builder.addCase(LoginAsync.rejected, (state, action) => {
//     console.log('로그인 실패');
//     console.log(action.payload);
//     // return { ...state };
//   });
// },
//

// const LoginAsync = createAsyncThunk('user/setId', async () => {
//   axios.get('/login').then((res) => console.log(res));
// });
