import PropTypes from 'prop-types';

export const BetInfoViewPropType = {
  betNumber: PropTypes.number.isRequired,
  sign: PropTypes.string.isRequired,
  chance: PropTypes.number.isRequired,
  payout: PropTypes.number.isRequired,
};
