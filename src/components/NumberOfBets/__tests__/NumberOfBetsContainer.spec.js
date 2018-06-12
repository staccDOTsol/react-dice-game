import { getShallowWrapper } from '../../../utils/testUtils';
import NumberOfBetsContainer from '../containers/NumberOfBetsContainer';


describe('NumberOfBetsContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      setNumberOfBets: jest.fn(),
    };

    wrapper = getShallowWrapper(NumberOfBetsContainer, props);
    instance = wrapper.instance();
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('handleChange', () => {
      it('should call setNumberOfBets', () => {
        const event = { currentTarget: { value: 5 } };

        instance.handleChange(event);

        expect(props.setNumberOfBets).toHaveBeenCalledTimes(1);
        expect(props.setNumberOfBets).toHaveBeenCalledWith(event.currentTarget.value);
      });
    });
  });
});
