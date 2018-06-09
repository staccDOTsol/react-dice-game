import { getShallowWrapper } from '../../../utils/testUtils';
import { BalanceContainer } from '../containers';
import { BalanceView } from '../views';


jest.mock('../views', () => ({
  BalanceView: () => null
}));

describe('FullScreenButtonContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeAll(() => {
    props = {
      value: 0,
      getFreeCredits: jest.fn(),
    };

    wrapper = getShallowWrapper(BalanceContainer, props);
    instance = wrapper.instance()
  });

  describe('root element', () => {
    it('should be presented with BalanceView', () => {
      expect(wrapper.is(BalanceView)).toBeTruthy();
    });

    describe('props', () => {
      describe('value', () => {
        it('should taken from parent component props', () => {
          expect(wrapper.prop('value')).toBe(props.value);
        });
      });

      describe('onClick', () => {
        it('should handle button click event', () => {
          expect(wrapper.prop('onButtonClick')).toEqual(instance.handleButtonClick);
        });
      });
    });
  });

  describe('methods', () => {
    let props;
    let wrapper;
    let instance;

    beforeEach(() => {
      props = {
        value: 0,
        getFreeCredits: jest.fn(),
      };
      wrapper = getShallowWrapper(BalanceContainer, props);
      instance = wrapper.instance();
    });

    describe('handleButtonClick', () => {
      it('should call getFreeCredits', () => {
        instance.handleButtonClick();

        expect(props.getFreeCredits).toHaveBeenCalledTimes(1);
      });
    });
  });
});
