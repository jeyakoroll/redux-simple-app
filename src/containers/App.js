import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
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
          Привет из App, {name} {surname}!
        </h2>
        <p>Тебе уже {age} ?</p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

// export default App
export default connect(mapStateToProps)(App)
