// React & React-router
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store.js';

// components of pages
import Nav from './components/nav/Nav.js';
import Home from './containers/HomeContainer.js';
import About from './containers/AboutContainer.js';
import NewPost from './containers/NewPostContainer.js';
import Posts from './containers/PostsContainer.js';
import SinglePost from './containers/SinglePostContainer.js';
import EditPost from './containers/EditPostContainer.js';
import './style.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <div className="background-photo" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/post" component={Posts} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/post/:id" component={SinglePost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
