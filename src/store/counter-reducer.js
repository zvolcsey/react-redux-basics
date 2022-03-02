import * as actionTypes from './action-types';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === actionTypes.INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === actionTypes.DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === actionTypes.DECREASE) {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === actionTypes.TOGGLE) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

export default counterReducer;
