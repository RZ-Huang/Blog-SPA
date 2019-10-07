import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditPost.css';

class EditPost extends Component {
  constructor(props) {
    super(props);
    const { post } = this.props;
    this.state = {
      title: post.title,
      body: post.body,
      author: post.author,
      id: post.id,
    };

    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.props.getSinglePost(id);
  }

  componentDidUpdate(prepProps) {
    const { history, isLoadingUpdateSinglePost, isLoadingDeleteSinglePost } = this.props;
    if (prepProps.isLoadingUpdateSinglePost === true && isLoadingUpdateSinglePost === false) {
      history.goBack();
    }
    if (prepProps.isLoadingDeleteSinglePost === true && isLoadingDeleteSinglePost === false) {
      history.go(-2);
    }
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDeletePost(id) {
    const { deleteSinglePost } = this.props;
    if (!window.confirm('確定刪除留言？')) return null;
    deleteSinglePost(id);

    return null;
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      id, title, body, author,
    } = this.state;
    const { updateSinglePost } = this.props;
    if (title === '') alert('請填寫標題。');
    if (title !== '') {
      updateSinglePost(id, title, author, body);
    }
  }

  render() {
    const { history, isLoadingGetSinglePost } = this.props;
    const {
      id, title, body, author,
    } = this.state;
    const postArea = (
      <div className="container editPost-border">
        <section className="editPost-area">
          <form>
            <div className="edit-content">
              <p>Title</p>
              <input type="text" className="editPost-title" name="title" value={title} onChange={this.onChangeValue} />
            </div>
            <a role="button" tabIndex={0} className="editPost-back" onClick={() => history.goBack()}>Back</a>
            <div className="edit-content">
              <p>Author</p>
              <input type="text" className="editPost-author" name="author" value={author} onChange={this.onChangeValue} />
            </div>
            <div className="edit-content">
              <p>Content</p>
              <textarea cols="30" rows="10" className="editPost-body" name="body" value={body} onChange={this.onChangeValue} />
            </div>
            <Link to={`/post/${id}`}><button type="button" className="editPost-done" onClick={this.handleSubmit}>完成</button></Link>
            <button type="button" className="editPost-delete" onClick={() => this.handleDeletePost(id)}>刪除</button>
          </form>
        </section>
      </div>
    );

    return (
      <div className="post">
        {isLoadingGetSinglePost ? <div className="loading">Loading...</div> : postArea}
      </div>
    );
  }
}

export default EditPost;
