import PropTypes from 'prop-types';

export const CheckBoxControlViewPropType = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  id: PropTypes.string
};
