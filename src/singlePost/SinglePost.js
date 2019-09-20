import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SinglePost.css';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://qootest.com/posts/${id}`)
      .then((res) => this.setState({
        post: res.data,
      }));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="post">
        {!post.title ? 'Loading...' : <h2 className="post-title">{post.title}</h2>}
        {!post.title ? '' : <p className="post-author">{`作者： ${post.author ? post.author : 'Anonymous'}`}</p>}
        <p className="post-content">{post.body}</p>
        <Link className="post-back" to="/post">Back to Posts</Link>
        <Link className="post-back" to="/">Back to Home</Link>
      </div>
    );
  }
}

export default SinglePost;
