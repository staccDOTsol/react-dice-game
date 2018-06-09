import deepFreeze from 'deep-freeze';

import diceGameReducer from '../diceGame';
import * as diceGameActions from '../../actions/diceGame';


describe('diceGame reducer', () => {
  const initialState = {
    betAmount: 0,
  };

  it('should return the current state', () => {
    expect(
      diceGameReducer(deepFreeze(initialState), {})
    ).toEqual(initialState);
  });

  describe('SET_BET_AMOUNT', () => {
    it('should set bet amount', () => {
      const betAmount = 1;

      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.setBetAmount(betAmount)
      )).toEqual({
        ...initialState,
        betAmount,
      });
    });
  });

  describe('SET_BET_NUMBER', () => {
    it('should set bet number', () => {
      const betNumber = 1;

      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.setBetNumber(betNumber)
      )).toEqual({
        ...initialState,
        betNumber,
      });
    });
  });
});
