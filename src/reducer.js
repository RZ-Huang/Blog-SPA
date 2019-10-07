import * as actionTypes from './actionTypes.js';

const state = {
  navPage: '/',
  isLoadingGetPosts: false,
  isLoadingGetSinglePost: false,
  isLoadingDeleteSinglePost: false,
  isLoadingUpdateSinglePost: false,
  isLoadingPostNewPost: false,
  posts: [],
  post: {},
};

// 有經過 redux-promise 轉換的 action
function actionsUsingPromise(actionType) {
  return {
    pending: `${actionType}_PENDING`,
    fulfilled: `${actionType}_FULFILLED`,
  };
}

function reducer(globalState = state, action) {
  switch (action.type) {
    case actionTypes.HANDLE_NAV_PAGE:
      return {
        ...globalState,
        navPage: action.page,
      };
    case actionsUsingPromise(actionTypes.GET_POST_LIST).pending:
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case actionsUsingPromise(actionTypes.GET_POST_LIST).fulfilled:
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.payload.data,
      };
    case actionsUsingPromise(actionTypes.GET_LIMITED_POST_LIST).pending:
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case actionsUsingPromise(actionTypes.GET_LIMITED_POST_LIST).fulfilled:
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.payload.data,
      };
    case actionsUsingPromise(actionTypes.GET_SINGLE_POST).pending:
      return {
        ...globalState,
        isLoadingGetSinglePost: true,
      };
    case actionsUsingPromise(actionTypes.GET_SINGLE_POST).fulfilled:
      return {
        ...globalState,
        isLoadingGetSinglePost: false,
        post: action.payload.data,
      };
    case actionsUsingPromise(actionTypes.DELETE_SINGLE_POST).pending:
      return {
        ...globalState,
        isLoadingDeleteSinglePost: true,
      };
    case actionsUsingPromise(actionTypes.DELETE_SINGLE_POST).fulfilled:
      return {
        ...globalState,
        isLoadingDeleteSinglePost: false,
      };
    case actionsUsingPromise(actionTypes.UPDATE_SINGLE_POST).pending:
      return {
        ...globalState,
        isLoadingUpdateSinglePost: true,
      };
    case actionsUsingPromise(actionTypes.UPDATE_SINGLE_POST).fulfilled:
      return {
        ...globalState,
        isLoadingUpdateSinglePost: false,
      };
    case actionsUsingPromise(actionTypes.ADD_NEW_POST).pending:
      return {
        ...globalState,
        isLoadingPostNewPost: true,
      };
    case actionsUsingPromise(actionTypes.ADD_NEW_POST).fulfilled:
      return {
        ...globalState,
        isLoadingPostNewPost: false,
      };
    default:
      return globalState;
  }
}

export default reducer;
