import { MAX_BET_NUMBER } from '../constants/diceGame';


export function saveState(state) {
  const serializedBalance = JSON.stringify(state.balance);

  localStorage.setItem('balance', serializedBalance);
}
