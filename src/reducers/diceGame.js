import { SET_BET_AMOUNT } from '../actionTypes/diceGame';


const initialState = {
  betAmount: null,
};

export default function diceGameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: payload.betAmount };
    default:
      return state;
  }
}
