import configureStore from 'redux-mock-store';

import BetAmountConnector from '../connectors/BetAmountConnector';
import { BetAmountContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  BetAmountContainer: () => null,
}));

describe('BetAmountConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      balance: {
        value: 0,
      },
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(BetAmountConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with BalanceContainer', () => {
      expect(wrapper.is(BetAmountContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('setBetAmount', () => {
      it('should pass setBetAmount', () => {
        expect(wrapper.prop('setBetAmount')).toEqual(expect.any(Function));
      });
    });
  });
});
