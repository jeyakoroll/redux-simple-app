import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore() 

render(
  <Provider store={store}>
    <div className='app'>
     <App />
    </div>
  </Provider>,
   document.getElementById('root')
)

registerServiceWorker()
