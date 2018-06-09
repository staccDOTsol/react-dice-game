import { DEFAULT_BALANCE } from '../constants/balance';

export function getPreloadedState() {
  let balance = {
    value: DEFAULT_BALANCE,
  };

  try {
    const serializedBalance = localStorage.getItem('balance');

    if (serializedBalance) {
      balance = JSON.parse(serializedBalance);
    }
  } catch (err) {
  //  ignore errors
  }

  return { balance };
}

export function saveState(state) {
  const serializedBalance = JSON.stringify(state.balance);

  localStorage.setItem('balance', serializedBalance);
}

export function getNextBetNumber() {
  return Math.floor(Math.random(0, 1) * 100) + 1;
}
