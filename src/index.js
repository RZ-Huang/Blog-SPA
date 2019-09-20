import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './nav/Nav.js';
import Home from './home/Home.js';
import About from './about/About.js';
import Posts from './posts/Posts.js';
import SinglePost from './singlePost/SinglePost.js';
import './style.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/post" component={Posts} />
          <Route path="/post/:id" component={SinglePost} />
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
