import {
  FINISH_MAKE_BETS,
  START_MAKE_BETS,
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  SET_NUMBER_OF_BETS,
  SET_AUTO_BET,
  GET_FREE_CREDITS,
  SET_MARTINGALE_STRATEGY,
  SET_CUSTOM_STRATEGY,
  SET_CUSTOM_STRATEGY_BOOL
} from '../actionTypes/diceGame';
import { DEFAULT_BALANCE } from '../constants/diceGame';

const initialState = {
  balance: Number(localStorage.getItem('balance')) || DEFAULT_BALANCE,
  betAmount: 0.01,
  betNumber: 50,
  numberOfBets: 138,
  resultNumber: 50,
  prevResultNumber: null,
  win: false,
  autoBet: false,
  martingaleStrategy: false,
  customStrategyBool: false,
  customStrategy: { 'win': {'reset': false, 'incn': "0", 'incp': "0", 'decn': "0.01", 'decp': "25"},
  'lose': {'reset': false, 'incn': "0.025", 'incp': "10", 'decn': "0", 'decp': "0"},
},
  history: [],
  duringBettingProcess: false,
};

export default function diceGameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: payload.betAmount };
    case SET_BET_NUMBER:
      return { ...state, betNumber: payload.betNumber };
    case FINISH_MAKE_BETS: {
      return {
        ...state,
        prevResultNumber: payload.prevResultNumber,
        resultNumber: payload.resultNumber,
        win: payload.win,
        balance: payload.balance,
        history: payload.history,
        duringBettingProcess: payload.duringBettingProcess,
      };
    }
    case START_MAKE_BETS:
      return { ...state, duringBettingProcess: true };
    case SET_NUMBER_OF_BETS:
      return { ...state, numberOfBets: payload.numberOfBets };
    case SET_AUTO_BET:
      return { ...state, autoBet: payload.autoBet };
    case GET_FREE_CREDITS:
      return { ...state, balance: DEFAULT_BALANCE };
    case SET_MARTINGALE_STRATEGY:
      return { ...state, martingaleStrategy: payload.martingaleStrategy };
    case SET_CUSTOM_STRATEGY:
      return { ...state, customStrategy: payload.customStrategy };
      case SET_CUSTOM_STRATEGY_BOOL:
      return { ...state, customStrategyBool: payload.customStrategyBool };
      
    default:
      return state;
  }
}
