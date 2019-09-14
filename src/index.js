import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function SinglePost(props) {
  const { postData, postId, onClick } = props;
  const singlePost = postData.filter((post) => post.id === postId);
  return (
    <div className="posts">
      <h1 className="posts-title">{singlePost[0].title}</h1>
      <p className="posts-content">{singlePost[0].body}</p>
      <button type="button" className="posts-back " onClick={onClick}>back to home</button>
    </div>
  );
}

function Posts(props) {
  const { postData, onClick } = props;
  return (
    <div className="posts">
      <h1 className="posts-title">Blog posts</h1>
      <ul>
        {
          postData.map((post) => (
            <li key={post.id}>
              <button type="button" className="post-title" onClick={() => onClick(post.id)}>
                {post.id}
                .
                {post.title}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function About(props) {
  const { onClick } = props;
  return (
    <div className="main-about">
      <h1 className="main-about-title">About the Blog</h1>
      <p className="main-about-content">Hello, Welcome to the Blog.</p>
      <button type="button" className="posts-back " onClick={onClick}>back to home</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      view: 'home',
    };

    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({
        posts: data,
      }));
  }

  handleAboutClick() {
    this.setState({
      view: 'about',
    });
  }

  handleHomeClick() {
    this.setState({
      view: 'home',
    });
  }

  handlePostClick(id) {
    this.setState({
      view: id,
    });
  }

  render() {
    const { posts, view } = this.state;
    let content;
    if (view === 'home') {
      content = <Posts postData={posts} onClick={(id) => this.handlePostClick(id)} />;
    } else if (view === 'about') {
      content = <About onClick={this.handleHomeClick} />;
    } else {
      content = <SinglePost postData={posts} postId={view} onClick={this.handleHomeClick} />;
    }

    return (
      <div>
        <nav>
          <div className="nav-item">
            <span className="nav-title">Blog</span>
            <button type="button" className="nav-home" onClick={this.handleHomeClick}>Home</button>
            <button type="button" className="nav-about" onClick={this.handleAboutClick}>About</button>
          </div>
        </nav>
        <main>
          {content}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
