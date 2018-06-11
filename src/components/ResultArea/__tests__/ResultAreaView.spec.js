import { getShallowWrapper } from '../../../utils/testUtils';
import ResultAreaView from '../views/ResultAreaView';


describe('ResultAreaView', () => {
  describe('render', () => {
    it('should display root element', () => {
      const props = {
        resultNumber: 50,
        win: true,
      };
      const wrapper = getShallowWrapper(ResultAreaView, props);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should not display root element', () => {
      const props = {
        resultNumber: null,
        win: true,
      };
      const wrapper = getShallowWrapper(ResultAreaView, props);

      expect(wrapper.find('Alert').exists()).toBeFalsy();
    });
  });
});
