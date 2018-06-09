import { getShallowWrapper } from '../../../utils/testUtils';
import BalanceView from '../views/BalanceView';


describe('BalanceView', () => {
  describe('balance value > 0', () => {
    let props;
    let wrapper;

    beforeAll(() => {
      props = {
        value: 10,
        onButtonClick: jest.fn(),
      };

      wrapper = getShallowWrapper(BalanceView, props);
    });

    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('balance value = 0', () => {
    let props;
    let wrapper;

    beforeAll(() => {
      props = {
        value: 0,
        onButtonClick: jest.fn(),
      };

      wrapper = getShallowWrapper(BalanceView, props);
    });

    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should handle button click', () => {
      wrapper.find('Button').simulate('click');

      expect(props.onButtonClick).toHaveBeenCalledTimes(1);
    });
  });
});
