import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Text extends PureComponent {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}

Text.PropTypes = { children: PropTypes.node.isRequired };

export default Text;
