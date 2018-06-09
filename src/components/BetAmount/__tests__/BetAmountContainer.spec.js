import { getShallowWrapper } from '../../../utils/testUtils';
import { BetAmountContainer } from '../containers';


describe('BetAmountContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      setBetAmount: jest.fn(),
    };

    wrapper = getShallowWrapper(BetAmountContainer, props);
    instance = wrapper.instance()
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('handleChange', () => {
      it('should call setBetAmount', () => {
        const event = { currentTarget: { value: 5 } };

        instance.handleChange(event);

        expect(props.setBetAmount).toHaveBeenCalledTimes(1);
        expect(props.setBetAmount).toHaveBeenCalledWith(event.currentTarget.value);
      });
    });
  });
});
