import { getShallowWrapper } from '../../../utils/testUtils';
import MartingaleStrategyCheckBoxContainer from '../containers/MartingaleStrategyCheckBoxContainer';


describe('MartingaleStrategyCheckBoxContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      autoBet: true,
      setMartingaleStrategy: jest.fn(),
    };

    wrapper = getShallowWrapper(MartingaleStrategyCheckBoxContainer, props);
    instance = wrapper.instance();
  });

  describe('render', () => {
    it('should display the disabled checkbox', () => {
      wrapper.setProps({ ...props, autoBet: false });

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should display the enabled checkbox', () => {
      wrapper.setProps({ ...props, autoBet: true });

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('handleChange', () => {
      it('should call setMartingaleStrategy', () => {
        const event = { currentTarget: { checked: true } };

        instance.handleChange(event);

        expect(props.setMartingaleStrategy).toHaveBeenCalledTimes(1);
        expect(props.setMartingaleStrategy).toHaveBeenCalledWith(event.currentTarget.checked);
      });
    });
  });
});
