import React from "react";
import '../../css/localdataset.css';
import PropTypes from "prop-types";

const MultiLineInputField = props => {
  const {
    name,
    defaultValue,
    placeholder,
    label = "",
    onChange,
    onBlur
  } = props;

  return (
    <div className="input-field">
      <fieldset className="multiline-input-fieldset">
        <legend>{label}</legend>
        <textarea
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            cols="60"
            rows="6"
            className="multiline-text-area"
        >
        </textarea>
      </fieldset>
    </div>
  );
};

MultiLineInputField.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string || PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default MultiLineInputField;