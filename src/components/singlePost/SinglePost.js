import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../../WebAPI.js';
import './SinglePost.css';

class SinglePost extends Component {
  constructor(props) {
    super(props);

    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSinglePost(id);
  }

  handleDeletePost(id) {
    if (!window.confirm('確定刪除留言？')) return null;
    const { history } = this.props;
    deletePost(id).then(() => {
      history.goBack();
      alert('刪除成功');
    });

    return null;
  }

  render() {
    const { history, post, isLoadingGetSinglePost } = this.props;
    const postArea = (
      <div className="container">
        <div className="post-border">
          <section className="post-area">
            <div className="post-header">
              <h2 className="post-title">{post.title}</h2>
              <a role="button" tabIndex={0} className="post-back" onClick={() => history.goBack()}>Back</a>
            </div>
            <p className="post-author">{`作者： ${post.author ? post.author : 'Anonymous'}`}</p>
            <p className="post-content">{post.body}</p>
            <div className="button-group">
              <Link to={`/edit/${post.id}`}><button type="button" className="post-edit">編輯</button></Link>
              <button type="button" className="post-delete" onClick={() => this.handleDeletePost(post.id)}>刪除</button>
            </div>
          </section>
        </div>
      </div>
    );

    return (
      <div className="post">
        {isLoadingGetSinglePost ? <div className="loading">Loading...</div> : postArea}
      </div>
    );
  }
}

export default SinglePost;
