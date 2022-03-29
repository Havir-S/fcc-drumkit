import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, mapDispatchToProps, mapStateToProps } from './app/store';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import {bankOne,bankTwo} from './app/banks.js';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);

  }


  handleEvent(e) {
    console.log(e);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleEvent);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleEvent);
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Button />
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
