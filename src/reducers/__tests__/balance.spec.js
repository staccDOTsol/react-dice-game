import deepFreeze from 'deep-freeze';

import balanceReducer from '../balance';
import * as balanceActions from '../../actions/balance';
import { DEFAULT_BALANCE } from '../../constants/balance';


describe('balance reducer', () => {
  const state = {
    value: 0,
  };

  it('should return the current state', () => {
    expect(
      balanceReducer(deepFreeze(state), {})
    ).toEqual(state);
  });

  describe('SET_BALANCE', () => {
    it('should not change balance value', () => {
      const value = -1;

      expect(balanceReducer(
        deepFreeze(state),
        balanceActions.setBalance(value)
      )).toEqual(state);
    });

    it('should change balance value', () => {
      const value = 1;

      expect(balanceReducer(
        deepFreeze(state),
        balanceActions.setBalance(value)
      )).toEqual({
        ...state,
        value,
      });
    });
  });

  describe('GET_FREE_CREDITS', () => {
    it('should change balance value', () => {
      expect(balanceReducer(
        deepFreeze(state),
        balanceActions.getFreeCredits()
      )).toEqual({
        ...state,
        value: DEFAULT_BALANCE,
      });
    });
  });
});
