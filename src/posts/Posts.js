import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => this.setState({
        posts: res.data,
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
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => this.setState({
        post: res.data,
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
