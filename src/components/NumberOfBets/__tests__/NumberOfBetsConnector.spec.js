import configureStore from 'redux-mock-store';

import NumberOfBetsConnector from '../connectors/NumberOfBetsConnector';
import { NumberOfBetsContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  NumberOfBetsContainer: () => null,
}));

describe('NumberOfBetsConnector', () => {
  let wrapper;

  beforeAll(() => {
    const mockStore = configureStore([]);
    const store = mockStore({});

    wrapper = getShallowWrapper(NumberOfBetsConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with NumberOfBetsContainer', () => {
      expect(wrapper.is(NumberOfBetsContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('setNumberOfBets', () => {
      it('should pass setNumberOfBets', () => {
        expect(wrapper.prop('setNumberOfBets')).toEqual(expect.any(Function));
      });
    });
  });
});
