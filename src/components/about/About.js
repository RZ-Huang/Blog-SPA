import React, { Component } from 'react';
import './About.css';

class About extends Component {
  componentDidMount() {
    const { handleNavPage, match } = this.props;
    handleNavPage(match.url);
  }

  render() {
    return (
      <div className="container">
        <div className="about">
          <h1 className="about-title">About the Blog</h1>
          <p className="about-content">Hello, Welcome to the Blog.</p>
          <br />
          <p className="about-content">Actullay, The Blog is something about ......</p>
        </div>
      </div>
    );
  }
}

export default About;
