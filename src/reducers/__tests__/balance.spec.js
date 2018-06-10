import deepFreeze from 'deep-freeze';

import balanceReducer from '../balance';
import * as balanceActions from '../../actions/balance';
import * as diceGameActions from '../../actions/diceGame';
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

  describe('MAKE_BET_SUCCESS', () => {
    it('should change balance value', () => {
      const value = 1;

      expect(balanceReducer(
        deepFreeze(state),
        diceGameActions.makeBetSuccess(null, null, value)
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
