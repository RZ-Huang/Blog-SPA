import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://qootest.com/posts')
      .then((res) => this.setState({
        posts: res.data,
      }));
  }

  render() {
    const { posts } = this.state;
    const { history } = this.props;
    return (
      <div className="posts">
        <h1 className="posts-header">Blog Posts</h1>
        <ul>
          {!posts[0] && 'Loading...'}
          {
            posts.map((postItem) => (
              <li key={postItem.id}>
                <button type="button"
                  className="posts-title"
                  onClick={() => {
                    history.push(`/post/${postItem.id}`);
                  }}
                >
                  {postItem.title}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Posts);
