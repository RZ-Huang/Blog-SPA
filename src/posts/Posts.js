import React, { Component } from 'react';
import SinglePost from '../singlePost/SinglePost.js';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postId: null,
      post: {},
    };

    this.getPost = this.getPost.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({
        posts: data,
      }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { postId } = this.state;
    if (prevState.postId !== postId) {
      this.getPost();
    }
  }

  getPost() {
    const { postId } = this.state;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => this.setState({
        post: data,
      }));
  }

  handleBack() {
    this.setState({
      postId: null,
      post: {},
    });
  }

  render() {
    const { posts, postId, post } = this.state;
    const { onChange } = this.props;
    return (
      <div className="posts">
        <ul>
          <h1>{!postId ? 'Blog posts' : 'Post'}</h1>
          {!postId && !posts[0] && 'Loading...'}
          {!postId && (
            posts.map((postItem) => (
              <li key={postItem.id}>
                <button type="button"
                  className="post-title"
                  onClick={() => {
                    this.setState({
                      postId: postItem.id,
                    });
                  }}
                >
                  {`${postItem.id}. ${postItem.title}`}
                </button>
              </li>
            ))
          )}
          {postId && <SinglePost postData={post} onChange={onChange} onClick={this.handleBack} />}
        </ul>
      </div>
    );
  }
}

export default Posts;
