import configureStore from 'redux-mock-store';

import BetButtonControlConnector from '../connectors/BetButtonControlConnector';
import { BetButtonControlContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  BetButtonControlContainer: () => null,
}));

describe('BetButtonControlConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      balance: 0,
      betAmount: 20,
      betNumber: 20,
      autoBet: false,
      numberOfBets: 1,
      duringBettingProcess: false,
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(BetButtonControlConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with BetButtonControlContainer', () => {
      expect(wrapper.is(BetButtonControlContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('balance', () => {
      it('should pass balance', () => {
        expect(wrapper.prop('balance')).toEqual(initialState.balance);
      });
    });

    describe('betAmount', () => {
      it('should pass betAmount', () => {
        expect(wrapper.prop('betAmount')).toEqual(initialState.betAmount);
      });
    });

    describe('betNumber', () => {
      it('should pass betNumber', () => {
        expect(wrapper.prop('betNumber')).toEqual(initialState.betNumber);
      });
    });

    describe('autoBet', () => {
      it('should pass autoBet', () => {
        expect(wrapper.prop('autoBet')).toEqual(initialState.autoBet);
      });
    });

    describe('numberOfBets', () => {
      it('should pass numberOfBets', () => {
        expect(wrapper.prop('numberOfBets')).toEqual(initialState.numberOfBets);
      });
    });

    describe('duringBettingProcess', () => {
      it('should pass duringBettingProcess', () => {
        expect(wrapper.prop('duringBettingProcess')).toEqual(initialState.duringBettingProcess);
      });
    });

    describe('makeBets', () => {
      it('should pass makeBets', () => {
        expect(wrapper.prop('makeBets')).toEqual(expect.any(Function));
      });
    });
  });
});
