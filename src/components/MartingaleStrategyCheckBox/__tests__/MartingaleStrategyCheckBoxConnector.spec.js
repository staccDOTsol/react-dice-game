import configureStore from 'redux-mock-store';

import MartingaleStrategyCheckBoxConnector from '../connectors/MartingaleStrategyCheckBoxConnector';
import { MartingaleStrategyCheckBoxContainer } from '../containers';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../containers', () => ({
  MartingaleStrategyCheckBoxContainer: () => null,
}));

describe('MartingaleStrategyCheckBoxConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      autoBet: true,
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(MartingaleStrategyCheckBoxConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with MartingaleStrategyCheckBoxContainer', () => {
      expect(wrapper.is(MartingaleStrategyCheckBoxContainer)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('autoBet', () => {
      it('should pass autoBet', () => {
        expect(wrapper.prop('autoBet')).toEqual(initialState.autoBet);
      });
    });

    describe('setMartingaleStrategy', () => {
      it('should pass setMartingaleStrategy', () => {
        expect(wrapper.prop('setMartingaleStrategy')).toEqual(expect.any(Function));
      });
    });
  });
});
