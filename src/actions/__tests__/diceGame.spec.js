import * as diceGameActions from '../diceGame';
import * as diceGameActionTypes from '../../actionTypes/diceGame';


describe('diceGame actions', () => {
  it('should create an action to set bet amount', () => {
    const betAmount = 50;

    expect(diceGameActions.setBetAmount(betAmount)).toEqual({
      type: diceGameActionTypes.SET_BET_AMOUNT,
      payload: { betAmount },
    });
  });

  it('should create an action to set bet number', () => {
    const betNumber = 50;

    expect(diceGameActions.setBetNumber(betNumber)).toEqual({
      type: diceGameActionTypes.SET_BET_NUMBER,
      payload: { betNumber },
    });
  });
});
