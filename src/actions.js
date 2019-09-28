import * as actionTypes from './actionTypes.js';

export const handleNavPage = (page) => ({
  type: actionTypes.HANDLE_NAV_PAGE,
  page,
});

// 拿到全部文章
export const getPosts = () => ({
  type: actionTypes.GET_POSTS,
});
export const getPostsSuccess = (data) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  data,
});

// 拿到單篇文章
export const getSinglePost = () => ({
  type: actionTypes.GET_SINGLE_POST,
});
export const getSinglePostSuccess = (data) => ({
  type: actionTypes.GET_SINGLE_POST_SUCCESS,
  data,
});
