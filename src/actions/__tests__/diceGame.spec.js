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
    const payload = {
      win: true,
      prevResultNumber: 50,
      resultNumber: 60,
      history: [],
      balance: 50,
    };

    expect(diceGameActions.finishMakeBets(payload)).toEqual({
      type: diceGameActionTypes.FINISH_MAKE_BETS,
      payload,
    });
  });

  describe('makeBets', () => {
    const dispatch = jest.fn();

    afterEach(() => {
      dispatch.mockClear();
    });

    describe('betType === "low" ', () => {
      const betType = 'low';

      it('should win a move', () => {
        const getState = jest.fn(() => ({
          balance: 100,
          betAmount: 20,
          betNumber: 20,
          resultNumber: 10,
        }));
        const payout = 5;
        const thunk = diceGameActions.makeBets(betType, payout);
        const expectedPayload = {
          win: true,
          prevResultNumber: 10,
          resultNumber: 50,
          history: [],
          balance: 180,
        };

        thunk(dispatch, getState);

        expect(dispatch.mock.calls).toEqual([
          [ diceGameActions.startMakeBets() ],
          [ diceGameActions.finishMakeBets(expectedPayload) ],
        ]);
      });

      it('should lose a move', () => {
        const getState = jest.fn(() => ({
          balance: 100,
          betAmount: 20,
          betNumber: 20,
          resultNumber: 40,
        }));
        const payout = 5;
        const thunk = diceGameActions.makeBets(betType, payout);
        const expectedPayload = {
          win: false,
          prevResultNumber: 40,
          resultNumber: 50,
          history: [],
          balance: 80,
        };

        thunk(dispatch, getState);

        expect(dispatch.mock.calls).toEqual([
          [ diceGameActions.startMakeBets() ],
          [ diceGameActions.finishMakeBets(expectedPayload) ],
        ]);
      });
    });

    describe('betType === "high" ', () => {
      const betType = 'high';

      it('should win a move', () => {
        const getState = jest.fn(() => ({
          balance: 100,
          betAmount: 20,
          betNumber: 20,
          resultNumber: 40,
        }));
        const payout = 1.25;
        const thunk = diceGameActions.makeBets(betType, payout);
        const expectedPayload = {
          win: true,
          prevResultNumber: 40,
          resultNumber: 50,
          history: [],
          balance: 105,
        };

        thunk(dispatch, getState);

        expect(dispatch.mock.calls).toEqual([
          [ diceGameActions.startMakeBets() ],
          [ diceGameActions.finishMakeBets(expectedPayload) ],
        ]);
      });

      it('should lose a move', () => {
        const getState = jest.fn(() => ({
          balance: 100,
          betAmount: 20,
          betNumber: 20,
          resultNumber: 10,
        }));
        const payout = 1.25;
        const thunk = diceGameActions.makeBets(betType, payout);
        const expectedPayload = {
          win: false,
          prevResultNumber: 10,
          resultNumber: 50,
          history: [],
          balance: 80,
        };

        thunk(dispatch, getState);

        expect(dispatch.mock.calls).toEqual([
          [ diceGameActions.startMakeBets() ],
          [ diceGameActions.finishMakeBets(expectedPayload) ],
        ]);
      });
    });
  });

  it('should create an action to get free credits', () => {
    expect(diceGameActions.getFreeCredits()).toEqual({
      type: diceGameActionTypes.GET_FREE_CREDITS,
    });
  });

  it('should create an action to set Martingale strategy', () => {
    const martingaleStrategy = true;

    expect(diceGameActions.setMartingaleStrategy(martingaleStrategy)).toEqual({
      type: diceGameActionTypes.SET_MARTINGALE_STRATEGY,
      payload: { martingaleStrategy },
    });
  });
});
