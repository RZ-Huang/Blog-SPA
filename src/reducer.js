import * as actionTypes from './actionTypes.js';

const state = {
  navPage: '/',
  isLoadingGetPosts: false,
  isLoadingGetSinglePost: false,
  posts: [],
  post: {},
};

function reducer(globalState = state, action) {
  switch (action.type) {
    case actionTypes.HANDLE_NAV_PAGE:
      return {
        ...globalState,
        navPage: action.page,
      };
    case actionTypes.GET_POSTS:
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.data,
      };
    case actionTypes.GET_SINGLE_POST:
      return {
        ...globalState,
        isLoadingGetSinglePost: true,
      };
    case actionTypes.GET_SINGLE_POST_SUCCESS:
      return {
        ...globalState,
        isLoadingGetSinglePost: false,
        post: action.data,
      };
    default:
      return globalState;
  }
}

export default reducer;
