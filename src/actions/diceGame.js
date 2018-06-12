import roundTo from 'round-to';

import {
  FINISH_MAKE_BETS,
  START_MAKE_BETS,
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  SET_NUMBER_OF_BETS,
  SET_AUTO_BET,
  GET_FREE_CREDITS,
} from '../actionTypes/diceGame';
import { getBetNumber } from '../utils';


export function getFreeCredits() {
  return {
    type: GET_FREE_CREDITS,
  };
}

export function setAutoBet(autoBet) {
  return {
    type: SET_AUTO_BET,
    payload: { autoBet },
  };
}

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

export function setNumberOfBets(numberOfBets) {
  return {
    type: SET_NUMBER_OF_BETS,
    payload: { numberOfBets },
  };
}

export function startMakeBets() {
  return {
    type: START_MAKE_BETS,
  };
}

export function finishMakeBets({
  win, prevResultNumber, resultNumber, balance, history,
}) {
  return {
    type: FINISH_MAKE_BETS,
    payload: {
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
    },
  };
}

export function makeBets(betType, payout, numberOfBets) {
  return function (dispatch, getState) {
    const state = getState();
    const { betAmount, betNumber } = state;
    let { resultNumber, balance } = state;
    let win;
    let prevResultNumber;
    const history = [];

    dispatch(startMakeBets());

    for (let i = 0; i < numberOfBets; i++) {
      if (betAmount > balance) {
        break;
      }

      win = betType === 'low' ? resultNumber <= betNumber : resultNumber >= betNumber;
      balance = win ? balance + (betAmount * (payout - 1)) : balance - betAmount;

      if (numberOfBets > 1) {
        history.push({
          win,
          betAmount,
          resultNumber,
          betNumber: i + 1,
          balance: roundTo(balance, 2),
        });
      }

      prevResultNumber = resultNumber;
      resultNumber = getBetNumber();
    }

    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
    }));
  };
}
