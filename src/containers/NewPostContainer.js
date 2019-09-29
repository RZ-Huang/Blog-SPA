import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from '../components/newPost/NewPost.js';
import * as actions from '../actions.js';

const NewPostContainer = (props) => <NewPost {...props} />;

const mapDispatchToProps = (dispatch) => ({
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
});

export default withRouter(
  connect(null, mapDispatchToProps)(NewPostContainer),
);
