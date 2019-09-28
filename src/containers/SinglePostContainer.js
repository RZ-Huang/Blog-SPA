import React from 'react';
import { connect } from 'react-redux';
import SinglePost from '../components/singlePost/SinglePost.js';
import { getSinglePost } from '../WebAPI.js';
import * as actions from '../actions.js';

const SinglePostContainer = (props) => <SinglePost {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetSinglePost: state.nav.isLoadingGetSinglePost,
  post: state.nav.post,
});

const mapDispatchToProps = (dispatch) => ({
  getSinglePost: (id) => {
    dispatch(actions.getSinglePost());
    getSinglePost(id).then((res) => {
      dispatch(actions.getSinglePostSuccess(res.data));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);
