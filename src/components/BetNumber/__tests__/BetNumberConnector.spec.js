import configureStore from 'redux-mock-store';

import BetNumberConnector from '../connectors/BetNumberConnector';
import { BetNumberContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  BetNumberContainer: () => null,
}));

describe('BetNumberConnector', () => {
  let wrapper;

  beforeAll(() => {
    const mockStore = configureStore([]);
    const store = mockStore({});

    wrapper = getShallowWrapper(BetNumberConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with BetNumberContainer', () => {
      expect(wrapper.is(BetNumberContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('setBetNumber', () => {
      it('should pass setBetNumber', () => {
        expect(wrapper.prop('setBetNumber')).toEqual(expect.any(Function));
      });
    });
  });
});
