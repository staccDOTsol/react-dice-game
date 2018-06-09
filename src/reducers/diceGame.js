import {
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
} from '../actionTypes/diceGame';


const initialState = {
  betAmount: null,
  betNumber: null,
};

export default function diceGameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: payload.betAmount };
    case SET_BET_NUMBER:
      return { ...state, betNumber: payload.betNumber };
    default:
      return state;
  }
}
