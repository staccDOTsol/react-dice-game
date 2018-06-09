import PropTypes from 'prop-types';

export const BalanceContainerPropType = {
  value: PropTypes.number.isRequired,
  getFreeCredits: PropTypes.func.isRequired,
};

export const BalanceViewPropType = {
  value: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
