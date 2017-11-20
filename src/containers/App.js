import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './App.css';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';



class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User name={user.name} />
        <div className='row'>
          <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
        </div>
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

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App)
