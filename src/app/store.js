import { configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {bankOne,bankTwo} from './banks.js';

const defaultState = {
  volume: 30,
  power: true,
  bank: bankOne,
  text: "test"
}

const VOLUME = 'VOLUME';
const POWER_TOGGLE = 'POWER_TOGGLE';
const BANK_TOGGLE = 'BANK_TOGGLE';
const TEXT_CHANGE = 'TEXT_CHANGE';

const volumeAction = (x) => {
  return {
    type: VOLUME,
    volume: 100
  }
}

const powerAction = () => {
  let power = store.getState().power;
  return {
    type: POWER_TOGGLE,
    power: !power
  }
}

const bankAction = () => {
  let bank = store.getState().bank;

  if (bank == bankOne) {
    return {
      type: BANK_TOGGLE,
      bank: bankTwo
    }
  return {
    type: BANK_TOGGLE,
    bank: bankOne
  }
  }
}

const textAction = () => {
  let text = store.getState().text;
  return {
    type: TEXT_CHANGE,
    text: ""
  }
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case VOLUME:
    return Object.assign({},state,{volume:action.volume})
    break;
    case POWER_TOGGLE:
    return Object.assign({},state,{power:action.power})
    break;
    case BANK_TOGGLE:
    return Object.assign({},state,{power:action.power})
    break;
    case TEXT_CHANGE:
    return Object.assign({},state,{power:action.power})
    break;
    default:
    return state;
  }

}

const store = createStore(reducer);


const mapStateToProps = (state) => {
  return {
    data: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    textAction: () => {
      dispatch(textAction());
    },
    bankAction: () => {
      dispatch(bankAction())
    },
    powerAction: () => {
      dispatch(powerAction())
    },
    powerAction: () => {
      dispatch(powerAction());
    }

  }
}

export {store, mapDispatchToProps, mapStateToProps};
console.log(store.getState())
store.dispatch(volumeAction());
console.log(store.getState())
store.dispatch(powerAction());
