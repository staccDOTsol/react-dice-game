import configureStore from 'redux-mock-store';

import AutoBetCheckBoxConnector from '../connectors/AutoBetCheckBoxConnector';
import { AutoBetCheckBoxContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  AutoBetCheckBoxContainer: () => null,
}));

describe('AutoBetCheckBoxConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      numberOfBets: 1,
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(AutoBetCheckBoxConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with AutoBetCheckBoxContainer', () => {
      expect(wrapper.is(AutoBetCheckBoxContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('numberOfBets', () => {
      it('should pass numberOfBets', () => {
        expect(wrapper.prop('numberOfBets')).toEqual(initialState.numberOfBets);
      });
    });

    describe('setAutoBet', () => {
      it('should pass setAutoBet', () => {
        expect(wrapper.prop('setAutoBet')).toEqual(expect.any(Function));
      });
    });
  });
});
