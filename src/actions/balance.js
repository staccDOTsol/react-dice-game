import { GET_FREE_CREDITS } from '../actionTypes/balance';


export function getFreeCredits() {
  return {
    type: GET_FREE_CREDITS,
  };
}
