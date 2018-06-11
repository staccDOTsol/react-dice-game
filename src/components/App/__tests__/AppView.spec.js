import { getShallowWrapper } from '../../../utils/testUtils';
import AppView from '../views/AppView';


describe('AppView', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = getShallowWrapper(AppView);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
