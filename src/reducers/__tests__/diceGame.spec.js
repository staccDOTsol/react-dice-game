import deepFreeze from 'deep-freeze';

import diceGameReducer from '../diceGame';
import * as diceGameActions from '../../actions/diceGame';
import { DEFAULT_BALANCE } from '../../constants/diceGame';


describe('diceGame reducer', () => {
  const initialState = {
    balance: DEFAULT_BALANCE,
    betAmount: null,
    betNumber: null,
    resultNumber: 50,
    prevResultNumber: null,
    win: false,
    numberOfBets: null,
    autoBet: false,
    history: [],
    duringBettingProcess: false,
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

  describe('FINISH_MAKE_BETS', () => {
    it('should finish make bets', () => {
      const payload = {
        win: true,
        prevResultNumber: 50,
        resultNumber: 60,
        history: [],
        balance: 100,
      };

      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.finishMakeBets(payload)
      )).toEqual({
        ...initialState,
        ...payload,
        duringBettingProcess: false,
      });
    });
  });

  describe('START_MAKE_BETS', () => {
    it('should start make bets', () => {
      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.startMakeBets()
      )).toEqual({
        ...initialState,
        duringBettingProcess: true,
      });
    });
  });

  describe('SET_NUMBER_OF_BETS', () => {
    it('should set number of bets', () => {
      const numberOfBets = 1;

      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.setNumberOfBets(numberOfBets)
      )).toEqual({
        ...initialState,
        numberOfBets,
      });
    });
  });

  describe('SET_AUTO_BET', () => {
    it('should set auto bet', () => {
      const autoBet = true;

      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.setAutoBet(autoBet)
      )).toEqual({
        ...initialState,
        autoBet,
      });
    });
  });

  describe('GET_FREE_CREDITS', () => {
    it('should change balance value', () => {
      expect(diceGameReducer(
        deepFreeze(initialState),
        diceGameActions.getFreeCredits()
      )).toEqual({
        ...initialState,
        balance: DEFAULT_BALANCE,
      });
    });
  });
});
