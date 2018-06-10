import { getShallowWrapper } from '../../../utils/testUtils';
import BetButtonControlContainer from '../containers/BetButtonControlContainer';
import BetInfo from '../../BetInfo';


jest.mock('../../BetInfo');

describe('BetButtonControlContainer', () => {
  let props;
  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      betType: 'low',
      betNumber: 20,
      betAmount: 10,
      balance: 100,
      makeBet: jest.fn(),
    };

    wrapper = getShallowWrapper(BetButtonControlContainer, props);
    instance = wrapper.instance();
  });

  describe('render', () => {
    describe('Button', () => {
      it('should display "Bet Lo"', () => {
        wrapper.setProps({ ...props, betType: 'low' });

        expect(wrapper.find('Button').prop('children')).toBe('Bet Lo');
      });

      it('should display "Bet Hi"', () => {
        wrapper.setProps({ ...props, betType: 'high' });

        expect(wrapper.find('Button').prop('children')).toBe('Bet Hi');
      });

      it('should handle click event', () => {
        expect(wrapper.find('Button').prop('onClick')).toEqual(instance.handleClick);
      });

      it('should be disabled', () => {
        wrapper.setProps({ ...props, betNumber: null });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);

        wrapper.setProps({ ...props, betNumber: 0 });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);

        wrapper.setProps({ ...props, betNumber: 101 });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);

        wrapper.setProps({ ...props, betAmount: 0 });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);

        wrapper.setProps({ ...props, betAmount: 101, balance: 100 });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);
      });

      it('should be enabled', () => {
        wrapper.setProps({ ...props, betNumber: 10 });
        expect(wrapper.find('Button').prop('disabled')).toBe(false);

        wrapper.setProps({ ...props, betAmount: 90, balance: 100 });
        expect(wrapper.find('Button').prop('disabled')).toBe(false);
      });
    });

    describe('BetInfo', () => {
      it('should not display BetInfo', () => {
        wrapper.setProps({ ...props, betNumber: null });
        expect(wrapper.find(BetInfo)).toHaveLength(0);

        wrapper.setProps({ ...props, betNumber: 0 });
        expect(wrapper.find(BetInfo)).toHaveLength(0);

        wrapper.setProps({ ...props, betNumber: 101 });
        expect(wrapper.find(BetInfo)).toHaveLength(0);
      });

      it('should display BetInfo', () => {
        wrapper.setProps({ ...props, betNumber: 10 });
        expect(wrapper.find(BetInfo)).toHaveLength(1);
      });
    });
  });

  describe('methods', () => {
    describe('handleClick', () => {
      it('should call makeBet', () => {
        instance.handleClick();

        expect(props.makeBet).toHaveBeenCalledTimes(1);
        expect(props.makeBet).toHaveBeenCalledWith(props.betType, wrapper.state('payout'));
      });
    });
  });
});
