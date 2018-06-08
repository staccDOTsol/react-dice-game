import PropTypes from 'prop-types';

export const InputControlViewPropType = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
};
