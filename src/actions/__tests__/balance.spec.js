import * as balanceActions from '../balance';
import * as balanceActionTypes from '../../actionTypes/balance';


describe('balance actions', () => {
  it('should create an action to get free credits', () => {
    expect(balanceActions.getFreeCredits()).toEqual({
      type: balanceActionTypes.GET_FREE_CREDITS,
    });
  });
});
