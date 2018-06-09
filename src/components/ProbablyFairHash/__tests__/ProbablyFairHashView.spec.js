import { getShallowWrapper } from '../../../utils/testUtils';
import ProbablyFairHashView from '../views/ProbablyFairHashView';


describe('ProbablyFairHashView', () => {
  let props;
  let wrapper;

  beforeAll(() => {
    props = {
      nexBetNumber: 50,
    };

    wrapper = getShallowWrapper(ProbablyFairHashView, props);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
