import PropTypes from 'prop-types';

export const BetButtonControlContainerPropType = {
  balance: PropTypes.number,
  betNumber: PropTypes.number,
  betAmount: PropTypes.number,
  betType: PropTypes.oneOf(['low', 'high']).isRequired,
  numberOfBets: PropTypes.number,
  autoBet: PropTypes.bool,
};
