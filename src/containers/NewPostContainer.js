import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from '../components/newPost/NewPost.js';
import * as actions from '../actions.js';

const NewPostContainer = (props) => <NewPost {...props} />;

const mapStateToProps = (state) => ({
  isLoadingPostNewPost: state.nav.isLoadingPostNewPost,
});

const mapDispatchToProps = (dispatch) => ({
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
  addNewPost: (title, body, author) => {
    dispatch(actions.addNewPost(title, body, author));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPostContainer),
);
