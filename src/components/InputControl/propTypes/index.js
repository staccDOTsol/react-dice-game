import PropTypes from 'prop-types';

export const InputControlViewPropType = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  defaultValue: PropTypes.string
};
