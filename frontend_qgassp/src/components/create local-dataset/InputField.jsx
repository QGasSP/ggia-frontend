import React from "react";
import '../../css/localdataset.css';
import PropTypes from "prop-types";

const InputField = props => {
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
      <fieldset className="fieldset-input-field">
        <legend>{label}</legend>
        <input
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            className="singleline-text-area"
        />
      </fieldset>
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string || PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default InputField;