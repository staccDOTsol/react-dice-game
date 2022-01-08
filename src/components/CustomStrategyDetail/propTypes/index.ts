import PropTypes from 'prop-types';

export const CustomStrategyDetailContainerPropType = {
  autoBet: PropTypes.bool,
  customStrategyBool: PropTypes.bool,
  setCustomStrategy: PropTypes.func.isRequired,
  martingaleStrategy: PropTypes.bool,
  customStrategy: PropTypes.object.isRequired,
};
