import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={"input_${name}"}
          className="validate"
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label htmlFor={"input_${name}"}>{label}</label>

        {errorMessage && <span className="helper-text"> {errorMessage} </span>}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  qutoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",
};

export default Input;
