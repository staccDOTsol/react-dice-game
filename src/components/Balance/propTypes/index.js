import PropTypes from 'prop-types';

export const BalanceContainerPropType = {
  balance: PropTypes.number.isRequired,
  getFreeCredits: PropTypes.func.isRequired,
};

export const BalanceViewPropType = {
  balance: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
