export const userIdSelector = (state) => state.user.id;
export const isLoggedInSelector = (state) => state.user.isLoggedIn;
export const jwtTokenSelector = (state) => state.user.token;
export const searchKeywordSelector = (state) => state.user.searchKeyword;
export const questionTitleSelector = (state) => state.user.title;
export const questionContentSelector = (state) => state.user.content;
export const questionTagsSelector = (state) => state.user.tags;
