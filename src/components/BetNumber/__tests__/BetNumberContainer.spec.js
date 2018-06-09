import { getShallowWrapper } from '../../../utils/testUtils';
import BetNumberContainer from '../containers/BetNumberContainer';


describe('BetNumberContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      setBetNumber: jest.fn(),
    };

    wrapper = getShallowWrapper(BetNumberContainer, props);
    instance = wrapper.instance();
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('handleChange', () => {
      it('should call setBetNumber', () => {
        const event = { currentTarget: { value: 5 } };

        instance.handleChange(event);

        expect(props.setBetNumber).toHaveBeenCalledTimes(1);
        expect(props.setBetNumber).toHaveBeenCalledWith(event.currentTarget.value);
      });
    });
  });
});
