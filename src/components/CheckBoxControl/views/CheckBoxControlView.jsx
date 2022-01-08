import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { CheckBoxControlViewPropType } from '../propTypes';


function CheckBoxControlView({ label, onChange, disabled, id, checked }) {
  return (
    <FormGroup check>
      <Label check>
        <Input
          id={id}
          type="checkbox"
          checked={checked}
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
