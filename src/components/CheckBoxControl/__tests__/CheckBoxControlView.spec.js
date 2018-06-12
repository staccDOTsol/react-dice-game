import { getShallowWrapper } from '../../../utils/testUtils';
import CheckBoxControlView from '../views/CheckBoxControlView';


describe('CheckBoxControlView', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      label: 'label',
      disabled: false,
      onChange: jest.fn(),
    };

    wrapper = getShallowWrapper(CheckBoxControlView, props);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('Input', () => {
    describe('change event', () => {
      it('should handle change event', () => {
        const event = { currentTarget: { checked: true } };

        wrapper.find('Input').simulate('change', event);

        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith(event);
      });
    });

    describe('disabled', () => {
      it('should be disabled', () => {
        wrapper.setProps({ ...props, disabled: true });

        expect(wrapper.find('Input').prop('disabled')).toBeTruthy();
      });

      it('should be enabled', () => {
        wrapper.setProps({ ...props, disabled: false });

        expect(wrapper.find('Input').prop('disabled')).toBeFalsy();
      });
    });
  });
});
