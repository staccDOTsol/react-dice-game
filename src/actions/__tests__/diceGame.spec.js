import * as diceGameActions from '../diceGame';
import * as diceGameActionTypes from '../../actionTypes/diceGame';
import { getBetNumber } from '../../utils';


jest.mock('../../utils', () => ({
  getBetNumber: jest.fn(() => 50),
}));

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

  it('should create an action to complete the bet', () => {
    const win = true;
    const resultNumber = 50;
    const balance = 50;

    expect(diceGameActions.makeBetSuccess(win, resultNumber, balance)).toEqual({
      type: diceGameActionTypes.MAKE_BET_SUCCESS,
      payload: { win, resultNumber, balance },
    });
  });

  describe('makeBet', () => {
    const dispatch = jest.fn();

    afterEach(() => {
      dispatch.mockClear();
    });

    describe('betType === "low" ', () => {
      const betType = 'low';

      it('should win a move', () => {
        const getState = jest.fn(() => ({
          balance: { value: 100 },
          diceGame: {
            betAmount: 20,
            betNumber: 20,
            resultNumber: 10,
          },
        }));
        const payout = 5;
        const thunk = diceGameActions.makeBet(betType, payout);
        const expectedWin = true;
        const expectedResultNumber = 50;
        const expectedBalance = 180;

        thunk(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(
          diceGameActions.makeBetSuccess(expectedWin, expectedResultNumber, expectedBalance)
        );
      });

      it('should lose a move', () => {
        const getState = jest.fn(() => ({
          balance: { value: 100 },
          diceGame: {
            betAmount: 20,
            betNumber: 20,
            resultNumber: 40,
          },
        }));
        const payout = 5;
        const thunk = diceGameActions.makeBet(betType, payout);
        const expectedWin = false;
        const expectedResultNumber = 50;
        const expectedBalance = 80;

        thunk(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(
          diceGameActions.makeBetSuccess(expectedWin, expectedResultNumber, expectedBalance)
        );
      });
    });

    describe('betType === "high" ', () => {
      const betType = 'high';

      it('should win a move', () => {
        const getState = jest.fn(() => ({
          balance: { value: 100 },
          diceGame: {
            betAmount: 20,
            betNumber: 20,
            resultNumber: 40,
          },
        }));
        const payout = 1.25;
        const thunk = diceGameActions.makeBet(betType, payout);
        const expectedWin = true;
        const expectedResultNumber = 50;
        const expectedBalance = 105;

        thunk(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(
          diceGameActions.makeBetSuccess(expectedWin, expectedResultNumber, expectedBalance)
        );
      });

      it('should lose a move', () => {
        const getState = jest.fn(() => ({
          balance: { value: 100 },
          diceGame: {
            betAmount: 20,
            betNumber: 20,
            resultNumber: 10,
          },
        }));
        const payout = 1.25;
        const thunk = diceGameActions.makeBet(betType, payout);
        const expectedWin = false;
        const expectedResultNumber = 50;
        const expectedBalance = 80;

        thunk(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(
          diceGameActions.makeBetSuccess(expectedWin, expectedResultNumber, expectedBalance)
        );
      });
    });
  });
});
