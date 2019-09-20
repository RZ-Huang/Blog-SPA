import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body, author } = this.state;
    if (title === '' || body === '') alert('請填寫空白欄位處。');
    if (title !== '' && body !== '') {
      axios.post('https://qootest.com/posts', {
        title,
        body,
        author,
      }).then(() => {
        alert('成功新增文章。');
        this.setState({
          title: '',
          body: '',
          author: '',
        });
      }).catch((error) => {
        alert('提交失敗，請重新提交。');
        console.log(error);
      });
    }
  }

  render() {
    const { title, body, author } = this.state;
    return (
      <div className="home">
        <h1 className="home-title">The Blog</h1>
        <p className="home-content">Hello, Welcome to the Blog.</p>
        <div className="add-post">
          <h2 className="add-post-header">新增文章</h2>
          <form>
            <div className="add-post-author">
              <input type="text" className="input-text" name="author" value={author} placeholder="在此輸入文章作者" onChange={this.onChangeValue} />
            </div>
            <div className="add-post-title">
              <input type="text" className="input-text" name="title" value={title} placeholder="在此輸入文章標題" onChange={this.onChangeValue} />
            </div>
            <div className="add-post-body">
              <textarea cols="30" rows="10" className="input-textarea" name="body" value={body} placeholder="在此輸入文章內容" onChange={this.onChangeValue} />
            </div>
            <div className="add-post-submit">
              <button type="submit" className="button-submit" onClick={this.handleSubmit}>送 出</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
