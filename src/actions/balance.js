import {
  SET_BALANCE,
  GET_FREE_CREDITS,
} from '../actionTypes/balance';


export function setBalance(value) {
  return {
    type: SET_BALANCE,
    payload: { value },
  };
}

export function getFreeCredits() {
  return {
    type: GET_FREE_CREDITS,
  };
}
