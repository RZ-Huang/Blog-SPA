import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
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

  componentDidUpdate(prepProps) {
    const { isLoadingDeleteSinglePost, history } = this.props;
    if (prepProps.isLoadingDeleteSinglePost === true && isLoadingDeleteSinglePost === false) {
      history.goBack();
    }
  }

  handleDeletePost(id) {
    const { deleteSinglePost } = this.props;
    if (!window.confirm('確定刪除留言？')) return null;
    deleteSinglePost(id);

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
            <ReactMarkdown className="post-content" source={post.body} />
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
