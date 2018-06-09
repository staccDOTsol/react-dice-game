import { SET_BET_AMOUNT } from '../actionTypes/diceGame';


export function setBetAmount(betAmount) {
  return {
    type: SET_BET_AMOUNT,
    payload: { betAmount },
  };
}
