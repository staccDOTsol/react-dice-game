import configureStore from 'redux-mock-store';

import BalanceConnector from '../connectors/BalanceConnector';
import { BalanceContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  BalanceContainer: () => null,
}));

describe('BalanceConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      balance: 0,
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(BalanceConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with BalanceContainer', () => {
      expect(wrapper.is(BalanceContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('balance', () => {
      it('should pass balance', () => {
        expect(wrapper.prop('balance')).toEqual(initialState.balance);
      });
    });

    describe('getFreeCredits', () => {
      it('should pass getFreeCredits', () => {
        expect(wrapper.prop('getFreeCredits')).toEqual(expect.any(Function));
      });
    });
  });
});
