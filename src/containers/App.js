import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { name } = this.props.user
    const { year, photos } = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          Привет из App, {name}!
        </h2>
        <p>У тебя {photos.length} фото за {year} год</p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

// export default App
export default connect(mapStateToProps)(App)
