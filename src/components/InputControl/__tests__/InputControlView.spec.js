import { getShallowWrapper } from '../../../utils/testUtils';
import InputControlView from '../views/InputControlView';


describe('InputControlView', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      label: 'label',
      onChange: jest.fn(),
    };

    wrapper = getShallowWrapper(InputControlView, props);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('Input', () => {
    let input;

    beforeEach(() => {
      input = wrapper.find('Input');
    });

    describe('change event', () => {
      it('should handle change event', () => {
        const event = { currentTarget: { value: 5 } };

        input.simulate('change', event);

        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledWith(event);
      });
    });

    describe('keypress event', () => {
      it('should change input value', () => {
        const event = {
          key: 5,
          preventDefault: jest.fn(),
        };

        input.simulate('keypress', event);

        expect(event.preventDefault).toHaveBeenCalledTimes(0);
      });

      it('should not change input value', () => {
        const event = {
          key: 'r',
          preventDefault: jest.fn(),
        };

        input.simulate('keypress', event);

        expect(event.preventDefault).toHaveBeenCalledTimes(1);
      });
    });
  });
});
