import { getShallowWrapper } from '../../../utils/testUtils';
import TableView from '../views/TableView';


describe('TableView', () => {
  describe('render', () => {
    it('should not display TableView', () => {
      const props = {
        autoBet: false,
        history: [],
      };
      const wrapper = getShallowWrapper(TableView, props);

      expect(wrapper.find('Table').exists()).toBeFalsy();
    });

    it('should display TableView', () => {
      const props = {
        autoBet: true,
        history: [{
          betNumber: 1,
          betAmount: 10,
          resultNumber: 10,
          balance: 100,
          win: true,
        }],
      };
      const wrapper = getShallowWrapper(TableView, props);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
