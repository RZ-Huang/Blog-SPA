import React from 'react';
import { connect } from 'react-redux';
import EditePost from '../components/editPost/EditPost.js';
import * as actions from '../actions.js';

const EditePostContainer = (props) => <EditePost {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetSinglePost: state.nav.isLoadingGetSinglePost,
  isLoadingUpdateSinglePost: state.nav.isLoadingUpdateSinglePost,
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
  updateSinglePost: (id, title, author, body) => {
    dispatch(actions.updateSinglePost(id, title, author, body));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditePostContainer);
