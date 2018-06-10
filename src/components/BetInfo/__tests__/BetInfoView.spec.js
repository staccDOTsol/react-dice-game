import { getShallowWrapper } from '../../../utils/testUtils';
import BetInfoView from '../views/BetInfoView';


describe('BetInfoView', () => {
  let props;
  let wrapper;

  beforeAll(() => {
    props = {
      betNumber: 20,
      sign: '<=',
      chance: 20,
      payout: 5,
    };
    wrapper = getShallowWrapper(BetInfoView, props);
  });

  describe('render', () => {
    it('should display correct', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
