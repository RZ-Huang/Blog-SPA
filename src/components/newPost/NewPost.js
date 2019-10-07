import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { handleNavPage, match } = this.props;
    handleNavPage(match.url);
  }

  componentDidUpdate(prepProps) {
    const { isLoadingPostNewPost } = this.props;
    if (prepProps.isLoadingPostNewPost === true && isLoadingPostNewPost === false) {
      this.setState({
        title: '',
        body: '',
        author: '',
      });
    }
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body, author } = this.state;
    const { addNewPost } = this.props;
    if (title === '') alert('請填寫標題。');
    if (title !== '') {
      addNewPost(title, body, author);
    }
  }

  render() {
    const { title, body, author } = this.state;
    return (
      <div className="new-post">
        <div className="container">
          <h1 className="newPost-header">Add a Post</h1>
          <div className="add-post">
            <form>
              <div className="add-post-author add-content">
                <input type="text" className="input-text" name="author" value={author} placeholder="在此輸入文章作者" onChange={this.onChangeValue} />
              </div>
              <div className="add-post-title add-content">
                <input type="text" className="input-text" name="title" value={title} placeholder="在此輸入文章標題" onChange={this.onChangeValue} />
              </div>
              <div className="add-post-body add-content">
                <textarea cols="30" rows="10" className="input-textarea" name="body" value={body} placeholder="在此輸入文章內容" onChange={this.onChangeValue} />
              </div>
              <div className="add-post-submit">
                <button type="submit" className="button-submit" onClick={this.handleSubmit}>送 出</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
