import { getShallowWrapper } from '../../../utils/testUtils';
import AutoBetCheckBoxContainer from '../containers/AutoBetCheckBoxContainer';


describe('AutoBetCheckBoxContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      numberOfBets: 1,
      setAutoBet: jest.fn(),
    };

    wrapper = getShallowWrapper(AutoBetCheckBoxContainer, props);
    instance = wrapper.instance();
  });

  describe('render', () => {
    it('should display the disabled checkbox', () => {
      wrapper.setProps({ ...props, numberOfBets: null });

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should display the enabled checkbox', () => {
      wrapper.setProps({ ...props, numberOfBets: 1 });

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('handleChange', () => {
      it('should call setAutoBet', () => {
        const event = { currentTarget: { checked: true } };

        instance.handleChange(event);

        expect(props.setAutoBet).toHaveBeenCalledTimes(1);
        expect(props.setAutoBet).toHaveBeenCalledWith(event.currentTarget.checked);
      });
    });
  });
});
