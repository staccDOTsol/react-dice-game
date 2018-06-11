import configureStore from 'redux-mock-store';

import ResultAreaConnector from '../connectors/ResultAreaConnector';
import { ResultAreaView } from '../views';
import { getShallowWrapper } from '../../../utils/testUtils';


jest.mock('../views', () => ({
  ResultAreaView: () => null,
}));

describe('ResultAreaConnector', () => {
  let wrapper;
  let initialState;

  beforeAll(() => {
    initialState = {
      diceGame: {
        prevResultNumber: 50,
        win: true,
      },
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    wrapper = getShallowWrapper(ResultAreaConnector, {}, {context: {store}});
  });

  describe('root element', () => {
    it('should be presented with ResultAreaView', () => {
      expect(wrapper.is(ResultAreaView)).toBeTruthy();
    });
  });

  describe('props', () => {
    describe('resultNumber', () => {
      it('should pass resultNumber', () => {
        expect(wrapper.prop('resultNumber')).toEqual(initialState.diceGame.prevResultNumber);
      });
    });

    describe('win', () => {
      it('should pass win', () => {
        expect(wrapper.prop('win')).toEqual(initialState.diceGame.win);
      });
    });
  });
});
