import {
  saveState,
  getBetNumber
} from '../';


describe('saveState', () => {
  it('should save state', () => {
    const state = { balance: {} };
    const expected = JSON.stringify(state.balance);

    localStorage = {
      setItem: jest.fn()
    };

    saveState(state);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('balance', expected);
  });
});

describe('getBetNumber', () => {
  it('should return 1', () => {
    Math.random = jest.fn(() => 0);

    expect(getBetNumber()).toBe(1);
  });

  it('should return 100', () => {
    Math.random = jest.fn(() => 0.999);

    expect(getBetNumber()).toBe(100);
  });
});