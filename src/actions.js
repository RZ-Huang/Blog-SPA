import * as actionTypes from './actionTypes.js';
import * as WebAPI from './WebAPI.js';

export const handleNavPage = (page) => ({
  type: actionTypes.HANDLE_NAV_PAGE,
  page,
});

// 拿到全部文章
export const getPostsList = () => ({
  type: actionTypes.GET_POST_LIST,
  payload: WebAPI.getPosts(),
});

// 拿到自訂篇幅數量的文章
export const getLimitedPostsList = (number) => ({
  type: actionTypes.GET_LIMITED_POST_LIST,
  payload: WebAPI.getLimitPosts(number),
});

// 拿到單篇文章
export const getSinglePost = (id) => ({
  type: actionTypes.GET_SINGLE_POST,
  payload: WebAPI.getSinglePost(id),
});

// 刪除文章
export const deleteSinglePost = (id) => ({
  type: actionTypes.DELETE_SINGLE_POST,
  payload: WebAPI.deletePost(id).then(() => {
    alert('刪除成功。');
  }).catch((err) => {
    alert('刪除文章失敗。');
    console.log(err);
  }),
});

// 編輯文章
export const updateSinglePost = (id, title, author, body) => ({
  type: actionTypes.UPDATE_SINGLE_POST,
  payload: WebAPI.updatePost(id, title, author, body).then(() => {
    alert('編輯文章成功。');
  }).catch((err) => {
    alert('編輯文章失敗。');
    console.log(err);
  }),
});

// 新增文章
export const addNewPost = (title, body, author) => ({
  type: actionTypes.ADD_NEW_POST,
  payload: WebAPI.addPost(title, body, author).then(() => {
    alert('成功新增文章。');
  }).catch((error) => {
    alert('提交失敗，請重新提交。');
    console.log(error);
  }),
});
