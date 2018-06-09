import * as balanceActions from '../balance';
import * as balanceActionTypes from '../../actionTypes/balance';


describe('balance actions', () => {
  it('should create an action to set balance', () => {
    const value = 50;

    expect(balanceActions.setBalance(value)).toEqual({
      type: balanceActionTypes.SET_BALANCE,
      payload: { value },
    });
  });

  it('should create an action to get free credits', () => {
    expect(balanceActions.getFreeCredits()).toEqual({
      type: balanceActionTypes.GET_FREE_CREDITS,
    });
  });
});
