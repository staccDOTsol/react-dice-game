import {
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
} from '../actionTypes/diceGame';


export function setBetAmount(betAmount) {
  return {
    type: SET_BET_AMOUNT,
    payload: { betAmount },
  };
}

export function setBetNumber(betNumber) {
  return {
    type: SET_BET_NUMBER,
    payload: { betNumber },
  };
}
