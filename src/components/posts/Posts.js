import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList();
  }

  render() {
    const { history, posts, isLoadingGetPosts } = this.props;
    return (
      <div className="posts">
        <div className="container">
          <div className="posts-area">
            <h1 className="posts-header">Blog Posts</h1>
            <ul>
              {isLoadingGetPosts && 'Loading...'}
              {!isLoadingGetPosts
                && posts.map((postItem) => (
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
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
