import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: -1,
  isLoggedIn: false,
  token: -1,
  searchKeyword: -1,
  title: '',
  content: '',
  tags: [],
};

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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setTags: (state, action) => {
      state.tags = [...action.payload];
    },
  },
});

// 1. 페이지 로딩 시 로그인 여부는 토큰으로 확인
//

export const {
  setId,
  setIsLoggedin,
  setToken,
  setSearchKeyword,
  setTitle,
  setContent,
  setTags,
} = userSlice.actions;
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
