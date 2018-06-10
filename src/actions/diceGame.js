import {
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  MAKE_BET_SUCCESS,
} from '../actionTypes/diceGame';
import { getBetNumber } from '../utils';


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

export function makeBetSuccess(win, resultNumber, balance) {
  return {
    type: MAKE_BET_SUCCESS,
    payload: { win, resultNumber, balance },
  };
}

export function makeBet(betType, payout) {
  return function (dispatch, getState) {
    const {
      balance: { value },
      diceGame: {
        betAmount,
        betNumber,
        resultNumber,
      },
    } = getState();
    const win = betType === 'low' ? resultNumber <= betNumber : resultNumber >= betNumber;
    const balanceValue = win ? value + (betAmount * (payout - 1)) : value - betAmount;
    const nextResultNumber = getBetNumber();

    dispatch(makeBetSuccess(win, nextResultNumber, balanceValue));
  };
}
