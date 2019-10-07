import React from 'react';
import { connect } from 'react-redux';
import SinglePost from '../components/singlePost/SinglePost.js';
import * as actions from '../actions.js';

const SinglePostContainer = (props) => <SinglePost {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetSinglePost: state.nav.isLoadingGetSinglePost,
  isLoadingDeleteSinglePost: state.nav.isLoadingDeleteSinglePost,
  post: state.nav.post,
});

const mapDispatchToProps = (dispatch) => ({
  getSinglePost: (id) => {
    dispatch(actions.getSinglePost(id));
  },
  deleteSinglePost: (id) => {
    dispatch(actions.deleteSinglePost(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);
