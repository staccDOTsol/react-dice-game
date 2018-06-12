import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { CheckBoxControlViewPropType } from '../propTypes';


function CheckBoxControlView({ label, onChange, disabled }) {
  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
        />
        { label }
      </Label>
    </FormGroup>
  );
}

CheckBoxControlView.propTypes = CheckBoxControlViewPropType;

CheckBoxControlView.defaultProps = {
  onChange: () => {},
  disabled: false,
};

export default CheckBoxControlView;
