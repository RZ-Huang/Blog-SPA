import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.js';
import Home from './home/Home.js';
import About from './about/About.js';
import Posts from './posts/Posts.js';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    };

    this.onNavChange = this.onNavChange.bind(this);
  }

  onNavChange(page) {
    this.setState({
      view: page,
    });
  }

  render() {
    const { view } = this.state;
    return (
      <div>
        <Nav onChange={this.onNavChange} activeView={view} />
        <main>
          {view === 'home' && <Home />}
          {view === 'post' && <Posts onChange={this.onNavChange} />}
          {view === 'about' && <About />}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
