import PropTypes from 'prop-types';

export const MartingaleStrategyCheckBoxContainerPropType = {
  autoBet: PropTypes.bool,
  customStrategy: PropTypes.object,
  setMartingaleStrategy: PropTypes.func.isRequired,
};
