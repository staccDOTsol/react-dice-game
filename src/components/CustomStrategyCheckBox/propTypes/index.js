import PropTypes from 'prop-types';
export const CustomStrategyCheckBoxViewPropType = {
  setCustomStrategyBool: PropTypes.func.isRequired,
  customStrategy: PropTypes.object

}
export const CustomStrategyCheckBoxContainerPropType = {
  autoBet: PropTypes.bool,
  setCustomStrategyBool: PropTypes.func.isRequired,
  martingaleStrategy: PropTypes.bool,
  customStrategy: PropTypes.object
};
