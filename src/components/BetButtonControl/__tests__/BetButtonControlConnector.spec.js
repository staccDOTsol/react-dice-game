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
      balance: {
        value: 0,
      },
      diceGame: {
        betAmount: 20,
        betNumber: 20,
      },
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
    describe('value', () => {
      it('should pass value', () => {
        expect(wrapper.prop('balance')).toEqual(initialState.balance.value);
      });
    });

    describe('betAmount', () => {
      it('should pass betAmount', () => {
        expect(wrapper.prop('betAmount')).toEqual(initialState.diceGame.betAmount);
      });
    });

    describe('betNumber', () => {
      it('should pass betNumber', () => {
        expect(wrapper.prop('betNumber')).toEqual(initialState.diceGame.betNumber);
      });
    });

    describe('makeBet', () => {
      it('should pass makeBet', () => {
        expect(wrapper.prop('makeBet')).toEqual(expect.any(Function));
      });
    });
  });
});
