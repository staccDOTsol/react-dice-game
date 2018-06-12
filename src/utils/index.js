import { MAX_BET_NUMBER } from '../constants/diceGame';


export function saveState(state) {
  const serializedBalance = JSON.stringify(state.balance);

  localStorage.setItem('balance', serializedBalance);
}

export function getBetNumber() {
  return Math.floor(Math.random(0, 1) * MAX_BET_NUMBER) + 1;
}
