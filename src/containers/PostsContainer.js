import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from '../components/posts/Posts.js';
import { getPosts } from '../WebAPI.js';
import * as actions from '../actions.js';

const PostsContainer = (props) => <Posts {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetPosts: state.nav.isLoadingGetPosts,
  posts: state.nav.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsList: () => {
    dispatch(actions.getPosts());
    getPosts().then((res) => {
      dispatch(actions.getPostsSuccess(res.data));
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsContainer),
);
