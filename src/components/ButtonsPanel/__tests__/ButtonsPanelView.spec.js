import { getShallowWrapper } from '../../../utils/testUtils';
import ButtonsPanelView from '../views/ButtonsPanelView';


describe('ButtonsPanelView', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = getShallowWrapper(ButtonsPanelView);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
