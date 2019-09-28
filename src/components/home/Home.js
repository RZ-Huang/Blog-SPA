import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getPostsList(10);
  }

  render() {
    const { history, posts, isLoadingGetPosts } = this.props;
    return (
      <div className="home">
        <div className="container">
          <h1 className="posts-header">Breaking News</h1>
          <ul>
            {isLoadingGetPosts && <div className="loading">Loading...</div>}
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
    );
  }
}

export default Home;
